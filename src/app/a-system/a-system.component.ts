import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-a-system',
  templateUrl: './a-system.component.html',
  styleUrls: ['./a-system.component.css']
})
export class ASystemComponent implements OnInit {
  assetid:any;
  dateofpurchase:any;
  shopname:any;
  ram:any;
  rom:any;
  monitor:any;
  qty:any;
  amount:any;
  currentuser:any;
  lastuser:any;
  id: any;
  data:any[] = [];
  cols:any;
  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'assetid', header: 'assetid', align: 'left !important' },
      { field: 'dateofpurchase', header: 'dateofpurchase', align: 'left !important' },
      { field: 'shopname', header: 'shopname', align: 'left !important' },
      { field: 'ram', header: 'ram', align: 'left !important' },
      { field: 'rom', header: 'rom', align: 'left !important' },
      { field: 'monitor', header: 'monitor', align: 'left !important' },
      { field: 'qty', header: 'qty', align: 'left !important' },
      { field: 'amount', header: 'amount', align: 'left !important' },
      { field: 'currentuser', header: 'currentuser', align: 'left !important' },
      { field: 'lastuser', header: 'lastuser', align: 'left !important' },
     ]
  }
  onSubmit()
  {
    const params = {
      'sno': this.id,
      'assetid': this.assetid,
      'dateofpurchase': this.dateofpurchase,
      'shopname': this.shopname,
      'ram':this.ram,
      'rom':this.rom,
      'monitor': this.monitor,
      'qty': this.qty,
      'amount':this.amount,
      'currentuser':this.currentuser,
      'lastuser':this.lastuser,
};
    this.restApiService.post(PathConstants.asystem_Post, params).subscribe(res => { })
    this.onView();
    this.onClear();
  }
  onView(){
    this.restApiService.get(PathConstants.asystem_Get).subscribe(res => { this.data = res })

  }
  onEdit(selectedRow: {
    lastuser: any;
    currentuser: any;
    amount: any;
    qty: any;
    monitor: any;
    rom: any;
    ram: any;
    shopname: any;
    dateofpurchase: any;
    assetid: any;
    sno: any;
  
  } ) {
    if (selectedRow !== null && selectedRow !== undefined) {
      this.id = selectedRow.sno;
      this.assetid = selectedRow.assetid;
      this.dateofpurchase = selectedRow.dateofpurchase;
      this.shopname = selectedRow.shopname;
      this.ram = selectedRow.ram;
      this.rom = selectedRow.rom;
      this.monitor = selectedRow.monitor;
      this.qty = selectedRow.qty;
      this.amount = selectedRow.amount;
      this.currentuser = selectedRow.currentuser;
      this.lastuser = selectedRow.lastuser;
    }
    this.onView();
  }
  onClear()
  {
    this.assetid = null;
    this.dateofpurchase = null;
    this.shopname = null;
    this.ram = null;
    this.rom = null;
    this.monitor = null;
    this.qty = null;
    this.amount = null;
     this.currentuser = null;
    this.lastuser = null;

  }
}

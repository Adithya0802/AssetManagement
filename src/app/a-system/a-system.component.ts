import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-a-system',
  templateUrl: './a-system.component.html',
  styleUrls: ['./a-system.component.css']
})
export class ASystemComponent implements OnInit {
  assetid: any;
  dateofpurchase: any;
  shopname: any;
  ram: any;
  rom: any;
  monitor: any;
  qty: any;
  amount: any;
  currentuser: any;
  lastuser: any;
  id: any;
  data: any[] = [];
  cols: any;
  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onView();
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
  onSubmit() {
    console.log('assetid', this.assetid);

    const params = {
      'sno': this.id,
      'assetid': this.assetid,
      'dateofpurchase': this.dateofpurchase,
      'shopname': this.shopname,
      'ram': this.ram,
      'rom': this.rom,
      'monitor': this.monitor,
      'qty': this.qty,
      'amount': this.amount,
      'currentuser': this.currentuser,
      'lastuser': this.lastuser,
    };
    this.restApiService.post(PathConstants.asystem_Post, params).subscribe(res => {
      this.onView();
      this.onClear();
    })
  }
  onView() {
    this.restApiService.get(PathConstants.asystem_Get).subscribe(res => { this.data = res })
  }
  onEdit(rowData: any) {
    this.id = rowData.sno;
    this.assetid = rowData.assetid;
    this.dateofpurchase = rowData.dateofpurchase;
    this.shopname = rowData.shopname;
    this.ram = rowData.ram;
    this.rom = rowData.rom;
    this.monitor = rowData.monitor;
    this.qty = rowData.qty;
    this.amount = rowData.amount;
    this.currentuser = rowData.currentuser;
    this.lastuser = rowData.lastuser;
  }
  onClear() {
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
  phoneKeyDown(e: any) {
    const keyCode = e.keyCode;
    if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) && e.keyCode != 8) {
      e.preventDefault();
    }
  }

  letterOnly(event: any): Boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }
}

import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-a-psp',
  templateUrl: './a-psp.component.html',
  styleUrls: ['./a-psp.component.css']
})
export class APspComponent implements OnInit {
  printername: any;
  printermodel: any;
  purchasedlocation: any;
  printerstatus: any;
  currentuser: any;
  lastuser: any;
  id: any;
  cols: any;
  data: any[] = [];

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onView();
    this.cols = [
      { field: 'printername', header: 'printername', align: 'left !important' },
      { field: 'printermodel', header: 'printermodel', align: 'left !important' },
      { field: 'purchasedlocation', header: 'purchasedlocation', align: 'right !important' },
      { field: 'printerstatus', header: 'printerstatus', align: 'left !important' },
      { field: 'currentuser', header: 'currentuser', align: 'left !important' },
      { field: 'lastuser', header: 'lastuser', align: 'left !important' },
    ]
  }

  onSignIn() {
    const params = {
      'sno': this.id,
      'printername': this.printername,
      'printermodel': this.printermodel,
      'purchasedlocation': this.purchasedlocation,
      'printerstatus': this.printerstatus,
      'currentuser': this.currentuser,
      'lastuser': this.lastuser,
    };
    this.restApiService.post(PathConstants.printer_Post, params).subscribe(res => { })
    this.onView();
    this.onClear();
  }

  onView() {
    this.restApiService.get(PathConstants.printer_Get).subscribe(res => { this.data = res })
  }

  onEdit(rowData: any) {
    this.id = rowData.sno;
    this.printername = rowData.printername;
    this.printermodel = rowData.printermodel;
    this.purchasedlocation = rowData.purchasedlocation;
    this.printerstatus = rowData.printerstatus;
    this.currentuser = rowData.currentuser;
    this.lastuser = rowData.lastuser;
  }
  

  onClear() {
    this.printername = null;
    this.printermodel = null;
    this.purchasedlocation = null;
    this.printerstatus = null;
    this.currentuser = null;
    this.lastuser = null;
  }
}


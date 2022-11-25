import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-a-dongle',
  templateUrl: './a-dongle.component.html',
  styleUrls: ['./a-dongle.component.css']
})
export class ADongleComponent implements OnInit {
  donglecompanyname: any;
  donglenumber: any;
  dongleimeino: any;
  donglepurchasedlocation: any;
  donglestatus: any;
  users: any;
  donglelastuser: any;
  id: any;
  cols: any;
  data: any[] = [];
  count: any;

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onView();
    this.cols = [
      { field: 'donglecompanyname', header: 'donglecompanyname', align: 'left !important' },
      { field: 'donglenumber', header: 'donglenumber', align: 'left !important' },
      { field: 'dongleimeino', header: 'dongleimeino', align: 'left !important' },
      { field: 'donglepurchasedlocation', header: 'donglepurchasedlocation', align: 'left !important' },
      { field: 'donglestatus', header: 'donglestatus', align: 'left !important' },
      { field: 'users', header: 'users', align: 'left !important' },
      { field: 'donglelastuser', header: 'donglelastuser', align: 'left !important' },
    ]
  }

  onSignIn() {
    const params = {
      'sno': this.id,
      'donglecompanyname': this.donglecompanyname,
      'donglenumber': this.donglenumber,
      'dongleimeino': this.dongleimeino,
      'donglepurchasedlocation': this.donglepurchasedlocation,
      'donglestatus': this.donglestatus,
      'users': this.users,
      'donglelastuser': this.donglelastuser,
    };
    this.restApiService.post(PathConstants.dongle_Post, params).subscribe(res => { })
    this.clearform();
  }

  onView() {
    this.restApiService.get(PathConstants.dongle_Get).subscribe(res => { this.data = res })
  }

  onEdit(rowData: any) {
    this.id = rowData.sno;
    this.donglecompanyname = rowData.donglecompanyname;
    this.donglenumber = rowData.donglenumber;
    this.dongleimeino = rowData.dongleimeino;
    this.donglepurchasedlocation = rowData.donglepurchasedlocation;
    this.donglestatus = rowData.donglestatus;
    this.users = rowData.users;
    this.donglelastuser = rowData.donglelastuser;
  }
  clearform() {
    this.donglecompanyname = null;
    this.donglenumber = null;
    this.dongleimeino = null;
    this.donglepurchasedlocation = null;
    this.donglestatus = null;
    this.users = null;
    this.donglelastuser = null;
  }
}

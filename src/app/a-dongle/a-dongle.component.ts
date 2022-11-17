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
  onEdit(selectedRow: {
    donglelastuser: any;
    users: any;
    donglestatus: any;
    donglepurchasedlocation: any;
    dongleimeino: any;
    donglenumber: any;
    donglecompanyname: any;
    sno: any;

  }

    | null | undefined) {

    if (selectedRow !== null && selectedRow !== undefined) {

      this.id = selectedRow.sno;
      this.donglecompanyname = selectedRow.donglecompanyname;
      this.donglenumber = selectedRow.donglenumber;
      this.dongleimeino = selectedRow.dongleimeino;
      this.donglepurchasedlocation = selectedRow.donglepurchasedlocation;
      this.donglestatus = selectedRow.donglestatus;
      this.users = selectedRow.users;
      this.donglelastuser = selectedRow.donglelastuser;


    }


  }
  clearform(){

    this.donglecompanyname=null;
    this.donglenumber=null;
    this.dongleimeino=null;
    this.donglepurchasedlocation=null;
    this.donglestatus=null;
    this.users=null;
    this.donglelastuser=null;
  }
}
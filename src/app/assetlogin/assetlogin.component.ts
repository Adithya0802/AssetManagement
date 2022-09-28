import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-assetlogin',
  templateUrl: './assetlogin.component.html',
  styleUrls: ['./assetlogin.component.css']
})
export class AssetloginComponent implements OnInit {
  employeeId:any;
  assetId: any;
  password: any;
  


  constructor(private restApiService:RestAPIService) { }

  ngOnInit(): void {
  }
  onSignIn() { 
    const params={
      'AssestID':this.assetId,
      'EmployeeId':this.employeeId,
      'password':this.password,
    }
    this.restApiService.post(PathConstants.AssetLogin_Post, params).subscribe(res => {



    })
   // this.router.navigate(['/employeedetails']);
  }
}

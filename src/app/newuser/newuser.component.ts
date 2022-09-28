import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  EmployeeId: any;
  name: any;
  email: any;
  ppassword: any;
  cpassword: any;
  Email: any;
  Name: any;

  constructor(private restApiService:RestAPIService) { }

  ngOnInit(): void {
  }
  onSignIn() { 
    console.log('1')
    const params={
      'Name':this.Name,
      'EmployeeId':this.EmployeeId,
      'Email':this.Email,
      'ppassword':this.ppassword,
      'cpassword':this.cpassword,
    }
    this.restApiService.post(PathConstants.ItRegistration_Post, params).subscribe(res => {
console.log('2')


    })
    //this.router.navigate(['/assetlogin']);
  }
}

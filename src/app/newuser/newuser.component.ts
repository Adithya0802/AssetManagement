import { Component, OnInit } from '@angular/core';
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
  password: any;
  password1: any;
  newPassword: any;
  confirmPassword: any;
  showErrMsg!: boolean;
  showMatchMsg!: boolean;
  SpecialCharErrMsg: boolean=false;
  pswdStrongMsg: boolean=false;
  NumericErrMsg: boolean=false;
  UpperCaseErrMsg: boolean =false;
  LengthErrMsg: boolean=false;
  id: any;

  constructor(private restApiService:RestAPIService) { }

  ngOnInit(): void {
  }
  onSignIn() { 
    const params={
      'sno': this.id,
      'Name':this.Name,
      'EmployeeId':this.EmployeeId,
      'Email':this.Email,
      'password':this.password,
      'password1':this.password1,
    };
    this.restApiService.post(PathConstants.ItRegistration_Post, params).subscribe(res => { })
  }

  checkPassword() {
    if (this.password !== undefined && this.password !== null && this.password.trim() !== '' &&
    this.password1 !== undefined && this.password1 !== null && this.password.trim() !== '') {
          if(this.newPassword.trim() !== this.confirmPassword.trim()) {
            this.showErrMsg = true;
            this.showMatchMsg = false;
          } else {
            this.showErrMsg = false;
            this.showMatchMsg = true;
          }
    } else {
      this.showErrMsg = false;
    }
  }

  check(password:any) {

     if (password.match(/[@$!%*?&]/g)) {
     this.SpecialCharErrMsg = false;
     } else {
     this.SpecialCharErrMsg = true;
     this.pswdStrongMsg = false;
    }    
   if (password.match(/[0-9]/g)) {   
     this.NumericErrMsg = false;
    } else {    
    this.NumericErrMsg = true;    
    this.pswdStrongMsg = false;    
    }    
    if (password.match(/[A-Z]/g)) {    
    this.UpperCaseErrMsg = false;    
    } else {    
    this.UpperCaseErrMsg = true;    
    this.pswdStrongMsg = false;    
    }    
    if (password.length >= 8) {    
    this.LengthErrMsg = false;    
    } else {    
    this.LengthErrMsg = true;    
    this.pswdStrongMsg = false;
    }
    if (password.match(/[@$!%*?&]/g) && password.match(/[0-9]/g) && password.match(/[A-Z]/g) && password.length > 8)
    this.pswdStrongMsg = true;
  }
  onView(){
 this.restApiService.get(PathConstants.ItRegister_Get).subscribe(res =>{ })
 }
}

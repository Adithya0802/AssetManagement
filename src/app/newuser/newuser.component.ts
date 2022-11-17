import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';
import { Router } from '@angular/router';

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

  constructor(private restApiService: RestAPIService, private router: Router) { }

  ngOnInit(): void {
  }
  onSignIn() { 
    const params={
      'sno': this.id,
      'name':this.Name,
      'employeeid':this.EmployeeId,
      'email':this.Email,
      'ppassword':this.password,
      'cpassword':this.password1,
    };
    this.restApiService.post(PathConstants.ItRegister_Post, params).subscribe(res => { })
    this.onView();
    this.router.navigate(['/assetlogin'])
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

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
  Email: any;
  Name: any;
  password: any;
  confrimpassword: any;
  showErrMsg!: boolean;
  showMatchMsg!: boolean;
  SpecialCharErrMsg: boolean = false;
  pswdStrongMsg: boolean = false;
  NumericErrMsg: boolean = false;
  UpperCaseErrMsg: boolean = false;
  LengthErrMsg: boolean = false;
  id: any;
  disableSave: boolean = false;
  validatePassword: boolean = false;
  constructor(private restApiService: RestAPIService, private router: Router) { }

  ngOnInit(): void {
  }
  onSignIn() {
    const params = {
      'sno': this.id,
      'name': this.Name,
      'employeeid': this.EmployeeId,
      'email': this.Email,
      'ppassword': this.password,
      'cpassword': this.confrimpassword,
    };
    this.restApiService.post(PathConstants.ItRegister_Post, params).subscribe(res => { })
    this.onView();
    this.router.navigate(['/assetlogin'])
  }

  checkPassword() {
    if (this.password !== undefined && this.password !== null && this.password.trim() !== '' &&
      this.confrimpassword !== undefined && this.confrimpassword !== null && this.confrimpassword.trim() !== '') {
      if (this.password !== this.confrimpassword) {
        this.showErrMsg = true;
        this.showMatchMsg = false;
        this.disableSave = false;
      } else {
        this.showErrMsg = false;
        this.showMatchMsg = true;
        this.disableSave = true;
      }
    } else {
      this.showErrMsg = false;
    }
  }

  check(confrimpassword: any) {

    if (confrimpassword.match(/[@$!%*?&]/g)) {
      this.SpecialCharErrMsg = false;
      this.validatePassword = true;
    } else {
      this.SpecialCharErrMsg = true;
      this.pswdStrongMsg = false;
      this.validatePassword = false;
    }
    if (confrimpassword.match(/[0-9]/g)) {
      this.NumericErrMsg = false;
      this.validatePassword = true;
    } else {
      this.NumericErrMsg = true;
      this.pswdStrongMsg = false;
      this.validatePassword = false;
    }
    if (confrimpassword.match(/[A-Z]/g)) {
      this.UpperCaseErrMsg = false;
      this.validatePassword = true;
    } else {
      this.UpperCaseErrMsg = true;
      this.pswdStrongMsg = false;
      this.validatePassword = false;
    }
    if (confrimpassword.length >= 8) {
      this.LengthErrMsg = false;
      this.validatePassword = true;
    } else {
      this.LengthErrMsg = true;
      this.pswdStrongMsg = false;
      this.validatePassword = false;
    }
    if (confrimpassword.match(/[@$!%*?&]/g) && confrimpassword.match(/[0-9]/g) && confrimpassword.match(/[A-Z]/g) && confrimpassword.length > 8) {
      this.pswdStrongMsg = true;
    }
  }

  onView() {
    this.restApiService.get(PathConstants.ItRegister_Get).subscribe(res => { })
  }
}

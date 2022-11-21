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
  buttonIsDisabled:boolean=true;

  constructor(private restApiService: RestAPIService, private router: Router) { }

  ngOnInit(): void {
  }
  public onAddComment(event: string): void {
    this.buttonIsDisabled=true;
    let passedString = event;
    if (/\S/.test(passedString)) {
        // string is not empty and not just whitespace
        // activate button
        this.buttonIsDisabled=false;
    }
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
        // this.disableSave = false;
      } else {
        this.showErrMsg = false;
        this.showMatchMsg = true;
        // this.disableSave = true;
      }
    } else {
      this.showErrMsg = false;
    }
  }

  check(password: any) {

    if (password.match(/[@$!%*?&]/g)) {
      this.SpecialCharErrMsg = false;
      this.disableSave = true;
    } else {
      this.SpecialCharErrMsg = true;
      this.pswdStrongMsg = false;
      this.disableSave = false;
    }
    if (password.match(/[0-9]/g)) {
      this.NumericErrMsg = false;
      this.disableSave = true;
    } else {
      this.NumericErrMsg = true;
      this.pswdStrongMsg = false;
      this.disableSave = false;
    }
    if (password.match(/[A-Z]/g)) {
      this.UpperCaseErrMsg = false;
      this.disableSave = true;
    } else {
      this.UpperCaseErrMsg = true;
      this.pswdStrongMsg = false;
      this.disableSave = false;
    }
    if (password.length >= 8) {
      this.LengthErrMsg = false;
      this.disableSave = true;
    } else {
      this.LengthErrMsg = true;
      this.pswdStrongMsg = false;
      this.disableSave = false;
    }
    if (password.match(/[@$!%*?&]/g) && password.match(/[0-9]/g) && password.match(/[A-Z]/g) && password.length > 8) {
      this.pswdStrongMsg = true;
      this.disableSave = true;
    } else {
      // this.disableSave = false;
      this.password = '';
    }
  }


  onView() {
    this.restApiService.get(PathConstants.ItRegister_Get).subscribe(res => { })
  }
}

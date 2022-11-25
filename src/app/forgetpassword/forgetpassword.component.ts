import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  showPassword: boolean = false;
  showcPassword: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  toggleConformPasswordVisibility(): void {
    this.showcPassword = !this.showcPassword;
  }
}

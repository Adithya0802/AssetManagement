import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestAPIService } from '../restapi.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  

  constructor(private restApiService:RestAPIService,private router:Router) { }

  ngOnInit(): void {
  }
  onSignIn() { 
    this.router.navigate(['/newuser']);
   }
   onLogIn() { 
    this.router.navigate(['/employeeregister']);
   }
}

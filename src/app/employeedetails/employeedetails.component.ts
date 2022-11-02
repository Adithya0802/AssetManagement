import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employeeId:any;
  constructor(private router: Router) { }
 

  ngOnInit(): void {
  }
  onSignIn() { 
    this.router.navigate(['/assetdetails']);
  }
}

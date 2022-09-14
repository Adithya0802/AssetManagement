import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assetlogin',
  templateUrl: './assetlogin.component.html',
  styleUrls: ['./assetlogin.component.css']
})
export class AssetloginComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  onSignIn() { 
    this.router.navigate(['/employeedetails']);
  }

}

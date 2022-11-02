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
 
  constructor(private restApiService:RestAPIService,private router:Router) { }

  ngOnInit(): void {
  }
  onSignIn() { 
   this.router.navigate(['/employeedetails']);
  }
}

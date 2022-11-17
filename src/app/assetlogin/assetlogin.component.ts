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
  employeeId: any;
  password: any;
  data: any[] = [];


  constructor(private restApiService: RestAPIService, private router: Router) { }

  ngOnInit(): void {
    this.restApiService.get(PathConstants.ItRegister_Get).subscribe(res => { 
      this.data = res; 
      console.log('e',this.data)
    })
  }
  onSignIn() {
    console.log('data',this.data)
    console.log('1',this.employeeId)
    console.log('1',this.password)
    this.data.forEach((i: any) => {
      if (i.cpassword === this.password) {
        console.log('done')
          this.router.navigate(['/itdashboard'])
      } else {
        console.log('no match')
      }
    })

  }
}


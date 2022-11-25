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
  public showPassword: boolean = false;

  constructor(private restApiService: RestAPIService, private router: Router) { }

  ngOnInit(): void {
    this.restApiService.get(PathConstants.ItRegister_Get).subscribe(res => {
      this.data = res;
      console.log('e', this.data)
    })
  }
  onSignIn() {
    this.data.forEach((i: any) => {
      if (i.email === this.employeeId && i.cpassword === this.password) {
        console.log('sql pass', i.cpassword);
        console.log('Ui pass', this.password);
        console.log('sql mail', i.email);
        console.log('Ui mail', this.employeeId);
        this.router.navigate(['/itdashboard'])
      } else {
        console.log('no match');
      }
    })
  }
 public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}


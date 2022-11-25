import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-itdashboard',
  templateUrl: './itdashboard.component.html',
  styleUrls: ['./itdashboard.component.css']
})
export class ItdashboardComponent implements OnInit {
  data: any;
  data1: any;
  data2: any;
  data3: any;
constructor(private restApiService: RestAPIService) { }
 ngOnInit(): void {
    this.restApiService.get(PathConstants.donglecount_Get).subscribe(res => {
      console.log('enter', this.data)
      this.data = res[0].no;
})

    this.restApiService.get(PathConstants.officecount_Get).subscribe(res => {
      console.log('enter', this.data1)
      this.data1 = res[0].nof;
})

    this.restApiService.get(PathConstants.printercount_Get).subscribe(res => {
      console.log('enter', this.data2)
      this.data2 = res[0].nos;
})

    this.restApiService.get(PathConstants.systemcount_Get).subscribe(res => {
      console.log('enter', this.data3)
      this.data3 = res[0].noss;
 })
  }
}
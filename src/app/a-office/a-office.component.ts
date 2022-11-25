import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-a-office',
  templateUrl: './a-office.component.html',
  styleUrls: ['./a-office.component.css']
})
export class AOfficeComponent implements OnInit {
  computername: any;
  installeddate: any;
  username: any;
  officelastuser: any;
  id: any;
  cols: any;
  data: any[] = [];

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onView();
    this.cols = [
      { field: 'computername', header: 'computername', align: 'left !important' },
      { field: 'installeddate', header: 'installeddate', align: 'left !important' },
      { field: 'username', header: 'username', align: 'right !important' },
      { field: 'officelastuser', header: 'officelastuser', align: 'left !important' },
    ]
  }

  onSignIn() {
    const params = {
      'sno': this.id,
      'computername': this.computername,
      'installeddate': this.installeddate,
      'username': this.username,
      'officelastuser': this.officelastuser,
    };
    this.restApiService.post(PathConstants.office_Post, params).subscribe(res => { })
    this.onClear();
  }

  onView() {
    this.restApiService.get(PathConstants.office_Get).subscribe(res => { this.data = res })
  }

  onEdit(rowData: any) {
    this.id = rowData.sno;
    this.computername = rowData.computername;
    this.installeddate = rowData.installeddate;
    this.username = rowData.username;
    this.officelastuser = rowData.officelastuser
  }

  onClear() {
    this.computername = null;
    this.installeddate = null;
    this.username = null;
    this.officelastuser = null;
  }
}

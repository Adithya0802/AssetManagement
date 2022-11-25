import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-a-license',
  templateUrl: './a-license.component.html',
  styleUrls: ['./a-license.component.css']
})
export class ALicenseComponent implements OnInit {
  name: any;
  productkey: any;
  oscurrentuser: any;
  oslastuser: any;
  id: any;
  cols: any;
  data: any[] = [];

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onView();
    this.cols = [
      { field: 'name', header: 'NAME', align: 'left !important' },

      { field: 'productkey', header: 'PRODUCT KEY', align: 'left !important' },

      { field: 'oscurrentuser', header: 'OS CURRENT USER', align: 'left !important' },
      { field: 'oslastuser', header: 'OS LAST USER', align: 'left !important' },
    ]
  }
  onSubmit() {
    const params = {
      'sno': this.id,
      'name': this.name,
      'productkey': this.productkey,
      'oscurrentuser': this.oscurrentuser,
      'oslastuser': this.oslastuser,
    };

    this.restApiService.post(PathConstants.licence_Post, params).subscribe(res => { })
    this.onView();
    this.onClear();
  }

  onView() {
    this.restApiService.get(PathConstants.licence_Get).subscribe(res => { this.data = res })
  }

 onEdit(rowData: any) {
    this.id = rowData.sno;
    this.name = rowData.name;
    this.productkey = rowData.productkey;
    this.oscurrentuser = rowData.oscurrentuser;
    this.oslastuser = rowData.name;
    this.onView();
  }

  onClear() {
    this.name = null;
    this.productkey = null;
    this.oscurrentuser = null;
    this.oslastuser = null;
  }
}

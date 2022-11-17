import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';
import { HostListener } from '@angular/core';
import { MessageService} from 'primeng/api';
import { ResponseMessage } from 'src/app/CommonModules/messages';

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
      'oslastuser':this.oslastuser,
    };

    this.restApiService.post(PathConstants.licence_Post, params).subscribe(res => { })
    this.onView();
  }

  onView() {
    this.restApiService.get(PathConstants.licence_Get).subscribe(res => {this.data = res})
    }
    
  
  onEdit(selectedRow: {
    oslastuser: any;
    oscurrentuser: any;
    productkey: any;
    sno: any;
   name: any;
  } | null | undefined) {
    if (selectedRow !== null && selectedRow !== undefined) {
      this.id = selectedRow.sno;
      this.name = selectedRow.name;
      this.productkey= selectedRow.productkey;
      this.oscurrentuser = selectedRow.oscurrentuser;
      this.oslastuser= selectedRow.oslastuser;
    }
    this.onView();
  }
}

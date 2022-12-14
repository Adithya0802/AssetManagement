import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-a-ospace',
  templateUrl: './a-ospace.component.html',
  styleUrls: ['./a-ospace.component.css']
})
export class AOspaceComponent implements OnInit {
  officelocation: any;
  seatno: any;
  officename: any;
  assetnumber: any;
  occupiedseat: any;
  cols: any;
  data: any[] = [];
  id: any;

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onView();
    this.cols = [
      { field: 'officelocation', header: 'officelocation', align: 'left !important' },
      { field: 'seatno', header: 'seatno', align: 'left !important' },
      { field: 'officename', header: 'officename', align: 'left !important' },
      { field: 'assetnumber', header: 'assetnumber', align: 'left !important' },
      { field: 'occupiedseat', header: 'occupiedseat', align: 'left !important' },
    ]
  }

  onSignIn() {
    const params = {
      'sno': this.id,
      'officelocation': this.officelocation,
      'seatno': this.seatno,
      'officename': this.officename,
      'assetnumber': this.assetnumber,
      'occupiedseat': this.occupiedseat,
    };
    this.restApiService.post(PathConstants.officespace_Post, params).subscribe(res => { })
    this.onView();
    this.onClear();
  }

  onView() {
    this.restApiService.get(PathConstants.officespace_Get).subscribe(res => { this.data = res })

  }
  onEdit(rowData: any) {
    this.id = rowData.sno;
    this.officelocation = rowData.officelocation;
    this.seatno = rowData.seatno;
    this.officename = rowData.officename;
    this.assetnumber = rowData.assetnumber;
    this.occupiedseat = rowData.occupiedseat;
    this.onView();
  }

  onClear() {
    this.officelocation = null;
    this.seatno = null;
    this.officename = null;
    this.assetnumber = null;
    this.occupiedseat = null;
  }
  phoneKeyDown(e:any){
    const keyCode = e.keyCode;  
    if (( (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) && e.keyCode !=8) {
e.preventDefault();
    }    
}
}

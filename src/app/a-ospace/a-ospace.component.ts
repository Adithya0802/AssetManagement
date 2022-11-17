import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';
import { HostListener } from '@angular/core';
import { MessageService} from 'primeng/api';
import { ResponseMessage } from 'src/app/CommonModules/messages';

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
  cols :any;
  data:any[] = [];
  id: any;
  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {

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
      'sno':this.id,
      'officelocation': this.officelocation,
      'seatno': this.seatno,
      'officename': this.officename,
      'assetnumber':this.assetnumber,
      'occupiedseat':this.occupiedseat,
    };
    this.restApiService.post(PathConstants.officespace_Post, params).subscribe(res => { })
    this.onView();
  }


  onView(){
    this.restApiService.get(PathConstants.officespace_Get).subscribe(res => { this.data = res })

  }
  onEdit(selectedRow: {
    occupiedseat: any;
    assetnumber: any;
    officename: any;
    seatno: any;
    officelocation: any;
    sno: any;
  
  } | null | undefined) {
    if (selectedRow !== null && selectedRow !== undefined) {
      this.id = selectedRow.sno;
      this.officelocation = selectedRow.officelocation;
      this.seatno = selectedRow.seatno;
      this.officename = selectedRow.officename;
      this.assetnumber = selectedRow.assetnumber;
      this.occupiedseat = selectedRow.occupiedseat;
    }
    this.onView();
  }
}

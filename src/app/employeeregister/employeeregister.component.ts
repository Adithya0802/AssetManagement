import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestAPIService } from '../restapi.service';
import { HostListener } from '@angular/core';
import { MessageService} from 'primeng/api';
import { ResponseMessage } from 'src/app/CommonModules/messages';

@Component({
  selector: 'app-employeeregister',
  templateUrl: './employeeregister.component.html',
  styleUrls: ['./employeeregister.component.css']
})
export class EmployeeregisterComponent implements OnInit {
  eid: any;
  name: any;
  email: any;
  cols: any;
  data: any[] = [];
  id: any;
  appInputFormat: string = "false";
  event: any;
  mailId: any;
  messageService: any;

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onView();
    this.cols = [
      { field: 'eid', header: 'Employee Id', align: 'left !important' },

      { field: 'name', header: 'Name', align: 'left !important' },

      { field: 'email', header: 'Email', align: 'left !important' },]
  }
  onSignIn() {
    const params = {
      'sno': this.id,
      'eid': this.eid,
      'name': this.name,
      'email': this.email
    };
    console.log('enter', this.name)
    this.restApiService.post(PathConstants.EmpReg_Post, params).subscribe(res => { })
    this.onView();
  }

  onView() {
    this.restApiService.get(PathConstants.EmpReg_Get).subscribe(res => {
      res.forEach((i:any) => {
         this.mailId = i.email;
      })
      this.data = res
    })
    console.log('1',this.mailId)
  }

  onEdit(selectedRow: {
    sno: any;
    eid: any; name: any; email: any;
  } | null | undefined) {
    if (selectedRow !== null && selectedRow !== undefined) {
      this.id = selectedRow.sno;
      this.eid = selectedRow.eid;
      this.name = selectedRow.name;
      this.email = selectedRow.email;
    }
    this.onView();
  }


  checkMailExists() {
    if(this.email === this.mailId) {
      console.log('same mail id')
      this.messageService.clear();
      this.messageService.add({
       severity: ResponseMessage.SEVERITY_SUCCESS,
        summary: ResponseMessage.SUMMARY_SUCCESS, detail: ResponseMessage.SuccessMessage
      });
      console.log('1',this.mailId)
   } else {
      console.log('saved successfully')
    }

  
}
}


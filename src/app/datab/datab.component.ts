import { Component } from '@angular/core';

@Component({
  selector: 'app-datab',
  templateUrl: './datab.component.html',
  styleUrls: ['./datab.component.css']
})
export class DatabComponent {
email:string='';
password:any;
name:string="string interpolatioin example";
disabled:boolean =false;
item='sampath';
  constructor() { }

  ngOnInit(): void {
    this.email = "enter your name"
  }
 onSubmit()
 {
  console.log("submitted successfully");
  console.log(this.email);
 }
}

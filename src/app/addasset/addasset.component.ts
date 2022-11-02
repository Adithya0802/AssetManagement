import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addasset',
  templateUrl: './addasset.component.html',
  styleUrls: ['./addasset.component.css']
})
export class AddassetComponent implements OnInit {
  state: any = [];
  city: any = [];
  

  constructor() { 
    this.state =[
      {name:'Tamilnadu',code:'TN'},
      {name:'Kerala',code:'KE'},
     ]

     this.city =[
      {name:'eorde',code:'TN'},
      {name:'salem',code:'KE'},
     ]
  }

  ngOnInit(): void {
  }

}

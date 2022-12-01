import { Component } from '@angular/core';

@Component({
  selector: 'app-datab',
  templateUrl: './datab.component.html',
  styleUrls: ['./datab.component.css']
})
export class DatabComponent {

  constructor() { }
name = "sampathkumar";
show = false;

  ngOnInit(): void {
    console.log('component initialized');
  }

 ngonDestroy()
  {
    console.log('component Destroyd');
  }
 toggle()
 {
  this.show = !this.show
 }
}

import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssetManagement';

  hidemenu: boolean = false;
  offmenu:boolean=false;


  constructor(private router: Router) {

    this.router.events.subscribe((events) => {

      if (events instanceof NavigationEnd) {

        if ((events.url === '/dashboard') || (events.url === '/assetlogin') || (events.url === '/newuser')){

          this.hidemenu = true;

        }
        else {
          this.hidemenu = false;
        }
      }

      if (events instanceof NavigationEnd) {
        if ((events.url === '/asystem') || (events.url === '/alicense') || (events.url === '/adongle')|| (events.url === '/aoffice')|| (events.url === '/apsp')|| (events.url === '/addreturnasset') || (events.url === '/aospace') || (events.url === '/itdashboard')){

          this.offmenu = true;
      }
      else {
        this.offmenu = false;
      }
    }
    })
  
}
}

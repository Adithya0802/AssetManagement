import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-assetdetails',
  templateUrl: './assetdetails.component.html',
  styleUrls: ['./assetdetails.component.css']
})
export class AssetdetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  on() { 
    this.router.navigate(['/employeedetails']);
  }
  onAddAsset() { 
    this.router.navigate(['/addasset']);
  }
  onReturnAsset() {
    this.router.navigate(['/returnasset']);
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { AssetloginComponent } from './assetlogin/assetlogin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AssetdetailsComponent } from './assetdetails/assetdetails.component';

const routes: Routes = [
  {path:'assetlogin',component:AssetloginComponent},
  {path:'footer',component:FooterComponent},
  {path:'header',component:HeaderComponent},
  { path: 'employeedetails',component:EmployeedetailsComponent},
  { path: 'assetdetails',component:AssetdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

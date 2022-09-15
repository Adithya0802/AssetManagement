import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { AssetloginComponent } from './assetlogin/assetlogin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeregisterComponent } from './employeeregister/employeeregister.component';

const routes: Routes = [
  {path:'assetlogin',component:AssetloginComponent},
  {path:'footer',component:FooterComponent},
  {path:'header',component:HeaderComponent},
  { path: 'employeedetails',component:EmployeedetailsComponent},
  { path:'dashboard',component:DashboardComponent},
  { path: '',redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'employeeregister',component:EmployeeregisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

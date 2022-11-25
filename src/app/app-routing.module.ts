import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetloginComponent } from './assetlogin/assetlogin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeregisterComponent } from './employeeregister/employeeregister.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ASystemComponent } from './a-system/a-system.component';
import { ALicenseComponent } from './a-license/a-license.component';
import { AOfficeComponent } from './a-office/a-office.component';
import { ADongleComponent } from './a-dongle/a-dongle.component';
import { APspComponent } from './a-psp/a-psp.component';
import { AOspaceComponent } from './a-ospace/a-ospace.component';
import { AddorreturnComponent } from './addorreturn/addorreturn.component';
import { ItdashboardComponent } from './itdashboard/itdashboard.component';
import { DatabComponent } from './datab/datab.component';


const routes: Routes = [
  { path: '',redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'assetlogin',component:AssetloginComponent},
  {path:'footer',component:FooterComponent},
  {path:'header',component:HeaderComponent},
  { path:'dashboard',component:DashboardComponent},
  { path:'employeeregister',component:EmployeeregisterComponent},
  { path:'newuser',component:NewuserComponent},
  { path:'forgetpassword',component:ForgetpasswordComponent},
  { path:'asystem',component:ASystemComponent},
  { path:'alicense',component:ALicenseComponent},
  { path:'aoffice',component: AOfficeComponent},
  { path:'adongle',component:ADongleComponent},
  { path:'apsp',component:APspComponent},
  { path:'aospace',component:AOspaceComponent},
  { path:'addorreturn',component:AddorreturnComponent},
  { path:'itdashboard',component:ItdashboardComponent},
  { path:'datab',component:DatabComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

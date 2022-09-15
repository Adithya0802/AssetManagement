import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { AssetloginComponent } from './assetlogin/assetlogin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeregisterComponent } from './employeeregister/employeeregister.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    AssetloginComponent,
    FooterComponent,
    HeaderComponent,
    AssetdetailsComponent,
    DashboardComponent,
    EmployeeregisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

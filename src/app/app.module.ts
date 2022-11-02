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
import { AssetdetailsComponent } from './assetdetails/assetdetails.component';
import { ReturnassetComponent } from './returnasset/returnasset.component';
import { AddassetComponent } from './addasset/addasset.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MenubarModule } from 'primeng/menubar';
import { SampleComponent } from './sample/sample.component';
import {KnobModule} from 'primeng/knob';




@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    FooterComponent,
    HeaderComponent,
    AssetdetailsComponent,
    DashboardComponent,
    EmployeeregisterComponent,
    ReturnassetComponent,
    AddassetComponent,
    NewuserComponent,
    ForgetpasswordComponent,
    AssetloginComponent,
    SampleComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    HttpClientModule,
    SidebarModule,
    PanelMenuModule,
    PanelModule,
    TabViewModule,
    CalendarModule,
    RadioButtonModule,
    TableModule,
    CheckboxModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MenubarModule,
    KnobModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetloginComponent } from './assetlogin/assetlogin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'assetlogin',component:AssetloginComponent},
  {path:'footer',component:FooterComponent},
  {path:'header',component:HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

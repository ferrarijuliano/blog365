import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HeaderComponent }   from './header/header.component';
import { MainpageComponent }      from './mainpage/mainpage.component';
import { FooterComponent }  from './footer/footer.component';
 
const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'footer', component: FooterComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
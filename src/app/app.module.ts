import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
 
import { AppComponent }         from './app.component';
import { HeaderComponent }   from './header/header.component';
import { MainpageComponent }  from './mainpage/mainpage.component';
import { FooterComponent }      from './footer/footer.component';
 
import { AppRoutingModule }     from './app-routing.module';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    FooterComponent
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
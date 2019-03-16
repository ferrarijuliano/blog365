import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent }         from './app.component';
import { MainpageComponent }  from './mainpage/mainpage.component';
 
import { AppRoutingModule }     from './app-routing.module';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import { Article4Component } from './article4/article4.component';
import { Article5Component } from './article5/article5.component';


 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    MainpageComponent,
    ArticleComponent,
    HeaderComponent,
    FooterComponent,
    Article2Component,
    Article3Component,
    Article4Component,
    Article5Component,
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { 



}



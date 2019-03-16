import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ArticleComponent }   from './article/article.component';
import { Article2Component }   from './article2/article2.component';
import { Article3Component }   from './article3/article3.component';
import { Article4Component }   from './article4/article4.component';
import { Article5Component }   from './article5/article5.component';

import { MainpageComponent }      from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

 
const routes: Routes = [
  { path: 'article', component: ArticleComponent },
  { path: 'article2', component: Article2Component },
  { path: 'article3', component: Article3Component },
  { path: 'article4', component: Article4Component },
  { path: 'article5', component: Article5Component },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: 'mainpage', pathMatch: 'full'},
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
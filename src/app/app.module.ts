import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {QuoteComponent} from './quote/quote.component';
import {HeaderComponent} from './header/header.component';
import {QuoteAddComponent} from './quote/quote-add/quote-add.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {QuoteService} from './quote/quote.service';


const appRoutes: Routes = [
  {path: '', component: QuoteComponent},
  {path: 'quote-add', component: QuoteAddComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    HeaderComponent,
    QuoteAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

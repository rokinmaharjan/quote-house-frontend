import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {QuoteComponent} from './quote/quote.component';
import {HeaderComponent} from './header/header.component';
import {QuoteAddComponent} from './quote/quote-add/quote-add.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {QuoteService} from './quote/quote.service';
import {HttpClientModule} from "@angular/common/http";
import {TagInputModule} from "ngx-chips";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const appRoutes: Routes = [
  {path: 'home', component: QuoteComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
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
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    TagInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    QuoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

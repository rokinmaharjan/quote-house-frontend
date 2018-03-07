import {Injectable} from '@angular/core';
import {Quote} from "./quote.model";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class QuoteService {

  quotes: Quote[] = [];


  constructor() {
    this.quotes = [new Quote('The world is a beautiful place.', 'Rokin Maharjan'),
      new Quote('Inspite of everything, I still believe people are good at the heart.', 'Anne Frank')
    ];
  }

  getQuotes(): Observable<Quote[]> {
    return of(this.quotes);
  }

  addQuote(quote: Quote) {
    this.quotes.push(quote);
    console.log(this.quotes);
  }

}

import {Injectable} from '@angular/core';
import {Quote} from "./quote.model";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class QuoteService {
  private GET_ALL_QUOTES_URL = 'https://quote-house-backend.herokuapp.com/quotes';
  private POST_QUOTE_URL = 'https://quote-house-backend.herokuapp.com/quotes/quote';

  private quotes: Quote[] = [];

  constructor(private http: HttpClient) {
  }

  getQuotes(): Observable<Object> {
    return this.http.get(this.GET_ALL_QUOTES_URL);
  }

  addQuote(quote: Quote): Observable<Object> {
    return this.http.post(this.POST_QUOTE_URL, quote);
  }
}

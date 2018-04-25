import {Injectable} from '@angular/core';
import {Quote} from "./quote.model";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class QuoteService {

  // URL for prod
  private GET_ALL_QUOTES_URL = 'https://quotehouse-backend.herokuapp.com/quotes';
  private POST_QUOTE_URL = 'https://quotehouse-backend.herokuapp.com/quotes/quote';

  // URL for local
  // private GET_ALL_QUOTES_URL = 'http://localhost:8080/quotes';
  // private POST_QUOTE_URL = 'http://localhost:8080/quotes/quote';

  private quotes: Quote[] = [];

  constructor(private http: HttpClient) {
  }

  getQuotesWithPagination(page, size): Observable<Object> {
    return this.http.get(this.GET_ALL_QUOTES_URL, {
      params: new HttpParams().set('page', page).set('size', size)
    });
  }

  addQuote(quote: Quote): Observable<Object> {
    return this.http.post(this.POST_QUOTE_URL, quote);
  }
}

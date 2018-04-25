import {Component, OnInit} from '@angular/core';
import {Quote} from './quote.model';
import {QuoteService} from "./quote.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  defaultSize = 25;
  defaultPage = 0;
  quotes: Quote[] = [];
  pages: number[];

  constructor(private quoteService: QuoteService,
              private http: HttpClient) {
    this.quoteService.getQuotesWithPagination(this.defaultPage, this.defaultSize).subscribe(data => {
      this.quotes = data['quotes'];
      this.pages = Array(data['pages']).fill(0);
    });
  }

  ngOnInit() {
  }

  getQuotesWithPagination(page) {
    console.log(page);
    this.quoteService.getQuotesWithPagination(page, this.defaultSize).subscribe(data => this.quotes = data['quotes']);
  }

}

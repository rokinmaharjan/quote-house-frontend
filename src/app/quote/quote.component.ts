import {Component, OnInit} from '@angular/core';
import {Quote} from './quote.model';
import {QuoteService} from "./quote.service";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private quoteService: QuoteService) {
    this.quoteService.getQuotes().subscribe(quotes => this.quotes = quotes);
  }

  ngOnInit() {
    console.log(this.quotes);
  }

}

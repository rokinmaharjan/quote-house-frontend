import {Component, OnInit} from '@angular/core';
import {Quote} from './quote.model';
import {QuoteService} from "./quote.service";
import {HttpClient} from "@angular/common/http";
import {log} from "util";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private quoteService: QuoteService,
              private http: HttpClient) {
    this.quoteService.getQuotes().subscribe(data => this.quotes = data['quotes']);
  }

  ngOnInit() {
  }

}

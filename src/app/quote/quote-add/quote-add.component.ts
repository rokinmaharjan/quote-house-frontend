import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Quote} from "../quote.model";
import {QuoteService} from "../quote.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quote-add',
  templateUrl: './quote-add.component.html',
  styleUrls: ['./quote-add.component.css']
})
export class QuoteAddComponent implements OnInit {

  constructor(private router: Router, private quoteService: QuoteService) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const quoteBody: string = f.value.quote;
    const author: string = f.value.author;

    const quote: Quote = new Quote(quoteBody, author);

    this.quoteService.addQuote(quote);

    this.router.navigate(['/']);
  }

}

import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Quote} from "../quote.model";
import {QuoteService} from "../quote.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-quote-add',
  templateUrl: './quote-add.component.html',
  styleUrls: ['./quote-add.component.css']
})
export class QuoteAddComponent implements OnInit {

  constructor(private quoteService: QuoteService,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const quoteBody: string = f.value.quote;
    const author: string = f.value.author;

    const quote: Quote = new Quote(quoteBody, author);

    this.quoteService.addQuote(quote).subscribe(data => {
      },
      error => console.log('Error while posting quote.')
    );

    this.router.navigate(['/']);
  }

}

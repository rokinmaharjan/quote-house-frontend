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

  tags: string[] = [];

  constructor(private quoteService: QuoteService,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
    console.log(this.tags);
  }

  onSubmit(f: NgForm) {
    const quoteBody: string = f.value.quote;
    const author: string = f.value.author;

    const quote: Quote = new Quote(quoteBody, author, this.tags);

    this.quoteService.addQuote(quote).subscribe(data => {
      },
      error => console.log('Error while posting quote.')
    );

    this.router.navigate(['/']);
  }


  onAdded(event) {
    this.tags.push(event.value);
    console.log(this.tags);
  }

  onRemoved(event) {
    const index = this.tags.indexOf(event.value);
    this.tags.splice(index, 1);
    console.log(this.tags);
  }
}

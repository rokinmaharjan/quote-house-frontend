export class Quote {
  // public title: string;
  public quote: string;
  public author: string;
  public tags: string[];

  constructor(quote: string, author: string, tags: string[]) {
    // this.title = title;
    this.quote = quote;
    this.author = author;
    this.tags = tags;
  }
}

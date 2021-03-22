import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  list = [];
  number = 1;
  title = 'inmetrics';

  add(number: number) {
    this.number += number
  }

  request() {
    this.http.get('https://my-blog-cms.herokuapp.com/posts')
    .subscribe(x => this.list = x as []);
  }
}

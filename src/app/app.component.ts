import { BaseResourceService } from './shared/services/base-resource.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: BaseResourceService) {
    console.log(this.service);
  }

  list = [];
  number = 1;
  title = 'inmetrics';

  add(number: number) {
    this.number += number
  }

  request() {
    this.service.get('https://my-blog-cms.herokuapp.com/posts')
    .subscribe(x => this.list = x as []);
  }
}

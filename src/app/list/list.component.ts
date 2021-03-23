import { ProductService } from './../shared/services/product.service';
import { Component, OnInit } from '@angular/core';

export class Product {
  currency?: string;
  description?: string;
  id?: string;
  name?: string;
  price?: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productsList = [] as Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.get()
      .subscribe(x => this.productsList = x);
  }
}

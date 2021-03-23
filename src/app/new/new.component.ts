import { ProductService } from './../shared/services/product.service';
import { Product } from './../list/list.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  form: FormGroup;

  constructor(private productService: ProductService) { 
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      currency: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  createProduct(product: Product) {
    this.productService.post(product).subscribe(x => console.log(x));
  }

}

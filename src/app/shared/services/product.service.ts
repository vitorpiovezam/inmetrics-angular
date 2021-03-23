import { HttpClient } from '@angular/common/http';
import { Product } from './../../list/list.component';
import { Injectable } from '@angular/core';
import { BaseResourceService } from 'src/app/core/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseResourceService<Product> {
  constructor(http: HttpClient) { 
    super(http);
  }
}

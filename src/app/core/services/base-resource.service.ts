import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityBase } from '../model/base-resource.model';

@Injectable()
export abstract class BaseResourceService<T extends EntityBase> {
  apiUrl: string;

  constructor(
    private http: HttpClient,
    @Inject({})
    private path?: string
    ) { 
    this.apiUrl = `http://localhost:4300/api/${this.path}`
    console.log(this.apiUrl)
  }

  get(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}`)
  }

  post(t: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, t);
  }
}

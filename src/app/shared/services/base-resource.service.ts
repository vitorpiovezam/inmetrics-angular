import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BaseResourceService {
	constructor(private http: HttpClient) {
	}

	get(url: string) {
		return this.http.get(url);
	}
}

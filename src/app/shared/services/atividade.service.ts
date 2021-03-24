import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResourceService } from 'src/app/core/services/base-resource.service';

@Injectable({
	providedIn: 'root'
})
export class AtividadeService extends BaseResourceService<any> {
	constructor(http: HttpClient) {
		super(http, 'Atividade');
	}
}

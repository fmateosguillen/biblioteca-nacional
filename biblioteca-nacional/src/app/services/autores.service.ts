import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutoresResponse } from '../interfaces/autores-response.interface';
import { Observable } from 'rxjs';
const AUTORES_URL = 'http://www.bne.es/media/datosgob/dominiopublico/dominiopublico1939.json';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(private http: HttpClient) { }

  public getAutoresList(): Observable<AutoresResponse>{
    return this.http.get<AutoresResponse>(AUTORES_URL);
  }

}

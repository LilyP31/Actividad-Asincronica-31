import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Datos } from '../models/datos';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { }

  // Definir la URL (EndPoint) de la API (La BaseURL de la API estara en environment.ts)
  apiVista = environment.apiURL + 'issues';

  // Metodos GET para obtener datos de la API users

  getUsersAll():Observable<Datos[]>{
    return this.http.get<Datos[]>(this.apiVista);
  }

  getUserId(userId: string): Observable<Datos[]> {
    const url = environment.apiURL + userId;
    return this.http.get<Datos[]>(url);
  }



}

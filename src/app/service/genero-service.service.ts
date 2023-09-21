import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GeneroServiceService {

  constructor(private http: HttpClient) {

  }
  getGenero(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:8080/api/genero/get_generos');
  }
}

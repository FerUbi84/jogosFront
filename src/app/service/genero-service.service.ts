import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GeneroServiceService {

  private readonly getGeneros = 'http://127.0.0.1:8080/api/genero/get_generos'

  constructor(private http: HttpClient) {

  }

  list(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.getGeneros).pipe(
      tap(data => console.log(data))
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { GenreDto, GenreGetDto } from './genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + "genres";

  getAll(): Observable<GenreGetDto[]>{
    return this.http.get<GenreGetDto[]>(this.apiUrl);
  }

  getById(id: number): Observable<GenreGetDto>{
    return this.http.get<GenreGetDto>(`${this.apiUrl}/${id}`);
  }

  create(genre: GenreDto){
    return this.http.post(this.apiUrl,genre);
  }

  edit(id: number, genre: GenreDto){
    return this.http.put(`${this.apiUrl}/${id}`, genre);
  }  

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

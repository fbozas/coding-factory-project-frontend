import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieTheaterDto, MovieTheaterGetDto} from './movie-theater.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiUrl + 'movieTheaters';

  public get(): Observable<MovieTheaterGetDto[]>{
    return this.http.get<MovieTheaterGetDto[]>(this.apiURL);
  }

  public getById(id: number): Observable<MovieTheaterGetDto>{
    return this.http.get<MovieTheaterGetDto>(`${this.apiURL}/${id}`);
  }

   public create(movieTheaterDTO: MovieTheaterDto){
    return this.http.post(this.apiURL, movieTheaterDTO);
  }

  public edit(id: number, movieTheaterDTO: MovieTheaterGetDto){
    return this.http.put(`${this.apiURL}/${id}`, movieTheaterDTO);
  }

  public delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}

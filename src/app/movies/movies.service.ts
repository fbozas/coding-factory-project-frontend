import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import { HomeGetDto, MovieDTO, MovieGetDTO, MoviePostGetDTO, MoviePutGetDto } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiUrl + 'movies';

  public getHomePageMovies(): Observable<HomeGetDto>{
    return this.http.get<HomeGetDto>(this.apiURL);
  }

  public putGet(id: number): Observable<MoviePutGetDto>{
    return this.http.get<MoviePutGetDto>(`${this.apiURL}/putget/${id}`);
  }

  public edit(id: number, movieCreationDTO: MovieDTO){
    const formData = this.BuildFormData(movieCreationDTO);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  public filter(values: any): Observable<any>{
    const params = new HttpParams({fromObject: values});
    return this.http.get<MovieGetDTO[]>(`${this.apiURL}/filter`, {params, observe: 'response'});
  }

  public postGet(): Observable<MoviePostGetDTO>{
    return this.http.get<MoviePostGetDTO>(`${this.apiURL}/postget`);
  }

  public create(movieCreationDTO: MovieDTO): Observable<number> {
    const formData = this.BuildFormData(movieCreationDTO);
    return this.http.post<number>(this.apiURL, formData);
  }
  
  public getById(id: number): Observable<MovieGetDTO>{
    return this.http.get<MovieGetDTO>(`${this.apiURL}/${id}`);
  }

  private BuildFormData(movie: MovieDTO): FormData {
    const formData = new FormData();

    formData.append('title', movie.title);
    formData.append('summary', movie.summary);
    formData.append('trailer', movie.trailer);
    formData.append('inTheaters', String(movie.inTheaters));
    if (movie.releaseDate){
      formData.append('releaseDate', formatDateFormData(movie.releaseDate));
    }

    if (movie.poster){
      formData.append('poster', movie.poster);
    }

    formData.append('genresIds', JSON.stringify(movie.genresIds));
    formData.append('movieTheatersIds', JSON.stringify(movie.movieTheatersIds));
    formData.append('actors', JSON.stringify(movie.actors));

    return formData;
  }

  public delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  
}

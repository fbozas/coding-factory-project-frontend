import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import { ActorDto, ActorGetDto, ActorMovieDto } from './actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + 'actors';

  getAll(page: number, recordsPerPage: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<ActorGetDto[]>(this.apiUrl, {observe: 'response', params});
  }

  getById(id: number): Observable<ActorGetDto>{
    return this.http.get<ActorGetDto>(`${this.apiUrl}/${id}`);
  }

  create(actor: ActorDto){
    const formData = this.buildFormData(actor);
    console.log(formData.getAll);
    return this.http.post(this.apiUrl, formData);
  }

  searchByName(name: string): Observable<ActorMovieDto[]>{
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post<ActorMovieDto[]>(`${this.apiUrl}/searchByName`, 
    JSON.stringify(name), {headers});
  }

  edit(id: number, actor: ActorDto){
    const formData = this.buildFormData(actor);
    return this.http.put(`${this.apiUrl}/${id}`,formData);
  }

  delete(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  private buildFormData(actor: ActorDto): FormData{
    const formData = new FormData();

    formData.append('name', actor.name);

    if(actor.biography){
      formData.append('biography', actor.biography);
    }

    if(actor.dateOfBirth){
      formData.append('dateOfBirth', formatDateFormData(actor.dateOfBirth));

    }

    if(actor.picture){
      formData.append('picture', actor.picture);
    }

    return formData;
  }
}

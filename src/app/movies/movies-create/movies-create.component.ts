import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { MovieDTO } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.css']
})
export class MoviesCreateComponent implements OnInit {

  constructor(
    private moviesService: MoviesService, 
    private router: Router) { }
  
  nonSelectedGenres: MultipleSelectorModel[] = [];

  nonSelectedMovieTheaters: MultipleSelectorModel[] = [];

  ngOnInit(): void {
    this.moviesService.postGet().subscribe(response => {
      this.nonSelectedGenres = response.genres.map(genre => {
        return <MultipleSelectorModel>{key: genre.id, value: genre.name}
      });

      this.nonSelectedMovieTheaters = response.movieTheaters.map(movieTheater => {
        return <MultipleSelectorModel>{key: movieTheater.id, value: movieTheater.name}
      });

    });
  }

  saveChanges(movieCreationDTO: MovieDTO){
    console.log(movieCreationDTO);

    this.moviesService.create(movieCreationDTO).subscribe(id => {
      this.router.navigate(['/movie/' + id]);
    })
  }
}

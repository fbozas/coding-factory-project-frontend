import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorMovieDto } from 'src/app/actors/actor.model';
import { MultipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { MovieDTO, MovieGetDTO } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router) { }

  model: MovieGetDTO;

  selectedGenres: MultipleSelectorModel[];
  nonSelectedGenres: MultipleSelectorModel[];
  selectedMovieTheaters: MultipleSelectorModel[];
  nonSelectedMovieTheaters: MultipleSelectorModel[];
  selectedActors: ActorMovieDto[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moviesService.putGet(params["id"]).subscribe(putGetDTO => {
        this.model = putGetDTO.movie;

        this.selectedGenres = putGetDTO.selectedGenres.map(genre => {
          return <MultipleSelectorModel>{key: genre.id, value: genre.name}
        });

        this.nonSelectedGenres = putGetDTO.nonSelectedGenres.map(genre => {
          return <MultipleSelectorModel>{key: genre.id, value: genre.name}
        });
  
        this.selectedMovieTheaters = putGetDTO.selectedMovieTheaters.map(movieTheater => {
          return <MultipleSelectorModel>{key: movieTheater.id, value: movieTheater.name}
        });

        this.nonSelectedMovieTheaters = putGetDTO.nonSelectedMovieTheaters.map(movieTheater => {
          return <MultipleSelectorModel>{key: movieTheater.id, value: movieTheater.name}
        });

        this.selectedActors = putGetDTO.actors;

      });
    });
  }

  saveChanges(movieCreationDTO: MovieDTO){
    this.moviesService.edit(this.model.id, movieCreationDTO).subscribe(() => {
      this.router.navigate(['/movie/' + this.model.id]);
    });
  }
}

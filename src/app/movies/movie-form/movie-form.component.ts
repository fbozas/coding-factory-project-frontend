import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorMovieDto } from 'src/app/actors/actor.model';
import { MultipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { MovieDTO, MovieGetDTO } from '../movie.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: MovieGetDTO;

  @Output()
  onSaveChanges = new EventEmitter<MovieDTO>();

  @Input()
  nonSelectedGenres: MultipleSelectorModel[];

  @Input()
  selectedGenres: MultipleSelectorModel[] = [];

  @Input()
  nonSelectedMovieTheaters: MultipleSelectorModel[];

  @Input()
  selectedMovieTheaters: MultipleSelectorModel[] = [];

  @Input()
  selectedActors: ActorMovieDto[]= [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      movieTheatersIds: '',
      actors: ''
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }

    console.log(this.model)
  }

  onImageSelected(file: File){
    this.form.get('poster')?.setValue(file);
  }

  changeMarkdown(content: string){
    this.form.get('summary')?.setValue(content);
  }

  saveChanges(){
    const genresIds = this.selectedGenres.map(value => value.key);
    this.form.get('genresIds')?.setValue(genresIds);

    const movieTheatersIds = this.selectedMovieTheaters.map(value => value.key);
    this.form.get('movieTheatersIds')?.setValue(movieTheatersIds);

    const actors = this.selectedActors.map(val => {
      return {id: val.id, character: val.character}
    });
    
    this.form.get('actors')?.setValue(actors);

    this.onSaveChanges.emit(this.form.value);
  }
}

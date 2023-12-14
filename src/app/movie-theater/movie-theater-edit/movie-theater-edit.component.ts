import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieTheaterDto } from '../movie-theater.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-movie-theater-edit',
  templateUrl: './movie-theater-edit.component.html',
  styleUrls: ['./movie-theater-edit.component.css']
})
export class MovieTheaterEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private movieTheaterService: MovieTheatersService,
    private router: Router) { }

  model: MovieTheaterDto;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieTheaterService.getById(params['id']).subscribe(movieTheater => 
        this.model = movieTheater);
    });
  }

  saveChanges(movieTheater: MovieTheaterDto){
    this.movieTheaterService.edit(this.model.id, movieTheater).subscribe(() => 
    this.router.navigate(['/movietheaters']));
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTheaterDto } from '../movie-theater.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-movie-theater-create',
  templateUrl: './movie-theater-create.component.html',
  styleUrls: ['./movie-theater-create.component.css']
})
export class MovieTheaterCreateComponent implements OnInit {

  constructor(
    private movieTheaterService: MovieTheatersService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(movieTheater: MovieTheaterDto){
    console.log(movieTheater);
    this.movieTheaterService.create(movieTheater).subscribe(() => this.router.navigate(['/movietheaters']));
  }
}

import { Component, OnInit } from '@angular/core';
import { MovieTheaterGetDto } from '../movie-theater.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-movie-theater-list',
  templateUrl: './movie-theater-list.component.html',
  styleUrls: ['./movie-theater-list.component.css']
})
export class MovieTheaterListComponent implements OnInit {

  constructor(private movieTheatersService: MovieTheatersService) { }

  movieTheaters: MovieTheaterGetDto[];
  displayColumns = ['name', 'actions'];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.movieTheatersService.get().subscribe(movieTheaters => this.movieTheaters = movieTheaters);
  }

  delete(id: number){
    this.movieTheatersService.delete(id).subscribe(() => this.loadData());
  }
}

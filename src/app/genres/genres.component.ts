import { Component, OnInit } from '@angular/core';
import { GenreGetDto } from './genre.model';
import { GenresService } from './genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: GenreGetDto[];
  columnsToDisplay = ['name', 'actions'];

  constructor(private service: GenresService) { }

  ngOnInit(): void {
   this.loadGenres();
  }

  loadGenres(){
    this.service.getAll().subscribe(genres => {
      this.genres = genres;
    });
  }

  delete(id: number){
    this.service.delete(id)
    .subscribe(() => {
      this.loadGenres();
    });
  }
}

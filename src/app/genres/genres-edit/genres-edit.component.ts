import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreDto, GenreGetDto } from '../genre.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-genres-edit',
  templateUrl: './genres-edit.component.html',
  styleUrls: ['./genres-edit.component.css']
})
export class GenresEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private service: GenresService,
    private router: Router) { }

  model: GenreGetDto;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.service.getById(params['id']).subscribe(genre => {
        this.model = genre;
      })
    });
  }

  saveChanges(genreCreationDTO: GenreDto){
    this.service.edit(this.model.id, genreCreationDTO)
    .subscribe((response) => {
      console.log(response);
      this.router.navigate(["/genres"]);
    },error => {
      console.log(error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { GenreDto } from '../genre.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-genres-create',
  templateUrl: './genres-create.component.html',
  styleUrls: ['./genres-create.component.css']
})
export class GenresCreateComponent implements OnInit {

  errors: string[] = [];
  
  constructor(private router: Router, private genresService: GenresService) { }

  ngOnInit(): void {
  }

  saveChanges(genre: GenreDto){
    this.genresService.create(genre).subscribe(() => {
      this.router.navigate(['/genres']);
    }, error => this.errors = parseWebAPIErrors(error));
  }
}

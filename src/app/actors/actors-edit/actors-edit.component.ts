import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorDto, ActorGetDto } from '../actor.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-actors-edit',
  templateUrl: './actors-edit.component.html',
  styleUrls: ['./actors-edit.component.css']
})
export class ActorsEditComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute, 
    private actorService: ActorsService,
    private router: Router) 
    { }

  model: ActorGetDto;

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.actorService
          .getById(params['id'])
          .subscribe(actor => this.model = actor);
      });
  }
  
  saveChanges(actorDto: ActorDto){
    this.actorService.edit(this.model.id,actorDto).subscribe(()=> {
      this.router.navigate(['/actors']);
    });
    console.log(actorDto);
  }
}

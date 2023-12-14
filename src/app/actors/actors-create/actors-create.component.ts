import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActorDto, ActorGetDto } from '../actor.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-actors-create',
  templateUrl: './actors-create.component.html',
  styleUrls: ['./actors-create.component.css']
})
export class ActorsCreateComponent implements OnInit {

  constructor(private actorService: ActorsService, private router: Router) { }
  
  ngOnInit(): void {
  }

  saveChanges(actorDto: ActorDto){
    console.log(actorDto);
    this.actorService.create(actorDto).subscribe(() => {
      this.router.navigate(['/actors']);
    });
  }
}

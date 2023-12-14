import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActorGetDto } from '../actor.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css']
})
export class ActorsListComponent implements OnInit {

  constructor(private actorsService: ActorsService) { }

  actors: ActorGetDto[];
  columnsToDisplay = ['name', 'actions'];

  totalAmountOfRecords: any;
  currentPage = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.actorsService.getAll(this.currentPage, this.pageSize).subscribe((response: HttpResponse<ActorGetDto[]>) => {
      this.actors = response.body ?? [];
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
    });
  }

  updatePagination(event: PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  delete(id: number){
    this.actorsService.delete(id).subscribe(() => {
      this.loadData();
    });
  }
}

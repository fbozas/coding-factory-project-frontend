import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {    

    
  }
  title: any = 'angular-movies';
  display = true;

  handleInput(event: Event){
    this.title = (event.target as HTMLInputElement).value;
  }

  duplicateNumber(n: number){
    return n*n;
  }

  handleRating(rate: number){
    alert(`The user selected ${rate}`);
  }
}

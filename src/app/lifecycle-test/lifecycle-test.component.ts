import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilities/rating/rating.component';

@Component({
  selector: 'app-lifecycle-test',
  templateUrl: './lifecycle-test.component.html',
  styleUrls: ['./lifecycle-test.component.css']
})
export class LifecycleTestComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  @Input()
  title: string = "";

  @ViewChild(RatingComponent)
  rating: RatingComponent;

  timer: ReturnType<typeof setInterval>;


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes");
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log("On Destroy");
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log("On DoCheck");
  }
  ngAfterViewInit(): void {
    console.log("On AfterViewInit");
    console.log(this.rating);
  }

  ngOnInit(): void {
    console.log("On Init");
    console.log(this.rating);
    this.timer = setInterval(() => console.log(new Date(), 1000));
  }
}

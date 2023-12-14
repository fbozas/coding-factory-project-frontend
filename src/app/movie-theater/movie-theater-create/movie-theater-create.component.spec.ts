import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTheaterCreateComponent } from './movie-theater-create.component';

describe('MovieTheaterCreateComponent', () => {
  let component: MovieTheaterCreateComponent;
  let fixture: ComponentFixture<MovieTheaterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTheaterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTheaterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

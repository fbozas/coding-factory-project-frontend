import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTheaterEditComponent } from './movie-theater-edit.component';

describe('MovieTheaterEditComponent', () => {
  let component: MovieTheaterEditComponent;
  let fixture: ComponentFixture<MovieTheaterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTheaterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTheaterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

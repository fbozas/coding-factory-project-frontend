import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsCreateComponent } from './actors-create.component';

describe('ActorsCreateComponent', () => {
  let component: ActorsCreateComponent;
  let fixture: ComponentFixture<ActorsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {  ComponentFixture, TestBed } from '@angular/core/testing';

import { personCardComponent } from './person-card.component';

describe('personCardComponent', () => {
  let component: personCardComponent;
  let fixture: ComponentFixture<personCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ personCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(personCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

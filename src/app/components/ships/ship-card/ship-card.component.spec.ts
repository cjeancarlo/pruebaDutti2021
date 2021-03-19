import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {  MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { ShipCardComponent } from './ship-card.component';



describe('ShipCardComponent', () => {
  let component: ShipCardComponent;
  let fixture: ComponentFixture<ShipCardComponent>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShipCardComponent],
     
      imports: [MatIconModule, MatIconModule, MatTabsModule, FlexLayoutModule, MatCardModule, MatIconModule, MatDialogModule, HttpClientTestingModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipCardComponent);
    component = fixture.componentInstance;

    component.ship = {
      MGLT: '60',
      cargo_capacity: '3000000',
      consumables: '1 year',
      cost_in_credits: '3500000',
      created: '2014-12-10T14:20:33.369000Z',
      crew: '30-165',
      edited: '2014-12-20T21:23:49.867000Z',
      films: ['http://swapi.dev/api/films/1/', 'http://swapi.dev/api/films/3/', 'http://swapi.dev/api/films/6/'],
      hyperdrive_rating: '2.0',
      length: '150',
      manufacturer: 'Corellian Engineering Corporation',
      max_atmosphering_speed: '950',
      model: 'CR90 corvette',
      name: 'CR90 corvette',
      passengers: '600',
      pilots: [],
      starship_class: 'corvette',
      url: 'http://swapi.dev/api/starships/2/',
    };


    fixture.detectChanges();


  });

  it('should create', () => {

   
    expect(component).toBeTruthy();
  });
});
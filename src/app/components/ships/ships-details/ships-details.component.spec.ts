import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ShipsDetailsComponent } from './ships-details.component';
import { PaginationControlsComponent } from 'ngx-pagination';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { ShipCardComponent } from '../ship-card/ship-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { appReducers } from 'src/app/store/app.reducers';
import { StoreModule } from '@ngrx/store';

describe('ShipsDetailsComponent', () => {
  let component: ShipsDetailsComponent;
  let fixture: ComponentFixture<ShipsDetailsComponent>;

  @Component({
    selector: 'pagination-controls',
    template: '<p>Mock Pagination controls Component</p>'
  })
  class MockPaginationControls { }
  @Pipe({ name: 'paginate' })
  class MockPipe implements PipeTransform {
    transform(value: number): number {
      // Do stuff here, if you want
      return value;
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(appReducers),
        HttpClientModule, MatProgressSpinnerModule, FlexLayoutModule, MatCardModule, MatIconModule],
      declarations: [ShipsDetailsComponent, MockPaginationControls, MockPipe, ShipCardComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsDetailsComponent);
    component = fixture.componentInstance;
    component.dataList = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

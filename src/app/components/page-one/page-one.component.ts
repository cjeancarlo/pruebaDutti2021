import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PaginationConfig } from 'src/app/models/pagination.config.model';
import { Vehicle } from 'src/app/models/vehicle.model';
import { ShipsService } from 'src/app/services/ships.service';
import { VehicleListLoading } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();

  vehicles: Vehicle[];
  loading = false;
  loaded = false;
  config: PaginationConfig;

  constructor(private shipService: ShipsService, private store: Store<AppState>) {
    this.shipService.page.next(1);
  }

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 0
    };


    this.store.dispatch(VehicleListLoading());
    this.store.select('vehicle')
      .pipe(
        takeUntil(this.ngUnsubscribe)
      ).subscribe(vehicle => {
        console.log(vehicle);

        this.vehicles = vehicle.vehicles;
        this.loading = vehicle.loading;
        this.loaded = vehicle.loaded;
        this.config.totalItems = vehicle.count;
      });

  }

  pageChanged(event) {
    this.config.currentPage = event;
    this.shipService.page.next(event);
    this.store.dispatch(VehicleListLoading());
  }


  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Vehicle } from 'src/app/models/vehicle.model';
import { vehicle_list_loading } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  vehicles: Vehicle[];
  loading = false;
  loaded = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
      this.store.dispatch(vehicle_list_loading());
          this.store.select('vehicle').subscribe( vehicle => {
          console.log(vehicle);
          this.vehicles = vehicle.vehicles
          this.loading = vehicle.loading;
          this.loaded = vehicle.loaded;
      })

  }

}

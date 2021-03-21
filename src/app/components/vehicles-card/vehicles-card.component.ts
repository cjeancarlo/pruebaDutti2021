import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-vehicles-card',
  templateUrl: './vehicles-card.component.html',
  styleUrls: ['./vehicles-card.component.scss']
})
export class VehiclesCardComponent implements OnInit {


  @Input() vehicle: Vehicle;
  constructor(private shipService: ShipsService) { }

  ngOnInit(): void {
  }

  get vehicleId() {
    return this.shipService.getObjId(this.vehicle);
  }

  getFilmId(filmUrl: string) {
    return this.shipService.getObjIdFromString(filmUrl);
  }
}

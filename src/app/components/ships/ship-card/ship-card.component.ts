import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ships } from 'src/app/models/ships.model';
import { ShipsService } from 'src/app/services/ships.service';
import { ShipInfoDetailComponent } from '../ship-info-detail/ship-info-detail.component';

@Component({
  selector: 'app-ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.scss']
})
export class ShipCardComponent implements OnInit {


  @Input() ship: Ships;
  constructor( public dialog: MatDialog, private shipService :ShipsService) { }

  ngOnInit(): void {
  }

  get starshipId() {
    return this.shipService.getStarshipId(this.ship);
  }


  openDialogInfo(): void {
     const dialogRef = this.dialog.open(ShipInfoDetailComponent, {
       panelClass: 'ship-no-padding-dialog',
       data:  this.ship
     });

     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
     });
  }

}

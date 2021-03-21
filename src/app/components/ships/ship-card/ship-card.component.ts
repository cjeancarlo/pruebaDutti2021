import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Ships } from 'src/app/models/ships.model';
import { ShipsService } from 'src/app/services/ships.service';
import { ShipInfoDetailComponent } from '../ship-info-detail/ship-info-detail.component';

@Component({
  selector: 'app-ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.scss']
})
export class ShipCardComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();

  @Input() ship: Ships;
  constructor(public dialog: MatDialog, private shipService: ShipsService) { }

  ngOnInit(): void { }

  get starshipId() {
    return this.shipService.getObjId(this.ship);
  }

  openDialogInfo(): void {
    const dialogRef = this.dialog.open(ShipInfoDetailComponent, {
      panelClass: 'ship-no-padding-dialog',
      data: this.ship
    });

    dialogRef.afterClosed()
      .pipe(
        takeUntil(this.ngUnsubscribe)
      ).subscribe(() => console.log('The dialog was closed')
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}


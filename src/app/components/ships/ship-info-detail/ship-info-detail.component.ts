import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ships } from 'src/app/models/ships.model';
import { ShipsService } from 'src/app/services/ships.service';


@Component({
  selector: 'app-ship-info-detail',
  templateUrl: './ship-info-detail.component.html',
  styleUrls: ['./ship-info-detail.component.scss']
})
export class ShipInfoDetailComponent implements OnInit {

  constructor(
    private shipService :ShipsService,
    public dialogRef: MatDialogRef<ShipInfoDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public ship: Ships) { }

  ngOnInit(): void {
    console.log(this.ship);
  }

  get starshipId() {
      return this.shipService.getObjId(this.ship);
  }

  onClose(): void {
    this.dialogRef.close();
  }

}

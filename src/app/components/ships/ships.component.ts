import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShipsService } from 'src/app/services/ships.service';
import { AppState } from 'src/app/store/app.reducers';

import { list_loading} from '../../store/actions'

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];

  constructor( private shipsService: ShipsService, private store: Store<AppState>) {

    
  }

  ngOnInit(): void {

      this.store.dispatch(list_loading())


     this.shipsService.getShips().subscribe((ships) => {
       this.dataList = ships;
       console.log('SHIPS -->', this.dataList.results)
     })
  }
}

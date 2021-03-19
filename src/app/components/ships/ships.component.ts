import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

import { list_loading} from '../../store/actions'

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

      this.store.dispatch(list_loading());

      

    
  }
}

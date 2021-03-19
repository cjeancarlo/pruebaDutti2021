import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Person } from 'src/app/models/person.model';
import { ShipsService } from 'src/app/services/ships.service';
import { people_list_loading } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  people: Person[];
  loading = false;
  loaded = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
      this.store.dispatch(people_list_loading());
      
      this.store.select('people').subscribe( people => {
      console.log(people);
        this.people = people.people;
          this.loading = people.loading;
          this.loaded = people.loaded;
      })

  }


 
}

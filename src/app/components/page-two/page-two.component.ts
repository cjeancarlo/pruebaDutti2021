import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PaginationConfig } from 'src/app/models/pagination.config.model';
import { Person } from 'src/app/models/person.model';
import { ShipsService } from 'src/app/services/ships.service';
import { PeopleListLoading } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();

  people: Person[];
  loading = false;
  loaded = false;
  config: PaginationConfig;

  constructor(private shipService: ShipsService, private store: Store<AppState>) { }

  ngOnInit(): void {

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 0
    };

    this.store.dispatch(PeopleListLoading());

    this.store.select('people')
      .pipe(
        takeUntil(this.ngUnsubscribe)
      ).subscribe(people => {
        console.log(people);
        this.people = people.people;
        this.loading = people.loading;
        this.loaded = people.loaded;
        this.config.totalItems = people.count;
      });

  }


  pageChanged(event) {

    this.config.currentPage = event;
    this.shipService.page.next(event);
    this.store.dispatch(PeopleListLoading());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


}

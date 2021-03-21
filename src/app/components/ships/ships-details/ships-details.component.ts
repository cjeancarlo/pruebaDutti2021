import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PaginationConfig } from 'src/app/models/pagination.config.model';
import { Ships } from 'src/app/models/ships.model';
import { ShipsService } from 'src/app/services/ships.service';
import { ListLoading } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();

  dataList: Ships[];
  config: PaginationConfig;
  shipId = '';
  url = '';

  loading = false;
  loaded = false;
  totalItems = 0;

  // Modal
  // titleDetails = '';
  // modelDetails = '';
  // starshipClass = '';

  constructor(private shipService: ShipsService, private store: Store<AppState>) {

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.totalItems
    };

  }

  ngOnInit(): void {

    this.store.select('data')
      .pipe(
        takeUntil(this.ngUnsubscribe)
      ).subscribe(data => {

        this.loading = data.loading;
        this.loaded = data.loaded;
        this.dataList = data.ships;
        this.totalItems = data.count;

        this.config.totalItems = data.count;
      });

  }

  getStarshipId(url: string) {
    this.shipId = url.slice(0, -1);
    const urlImage = `${this.shipId}.jpg`;
    return urlImage !== '';
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
    this.shipService.page.next(event);
    this.store.dispatch(ListLoading());
  }

  // openDetails(details: Ships) {
  //   $("#exampleModal").modal('show');
  //   this.titleDetails = details.name;
  //   this.modelDetails = details.model;
  //   this.starship_class = details.starship_class
  // }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


}

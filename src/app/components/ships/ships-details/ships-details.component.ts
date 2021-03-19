import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ships } from 'src/app/models/ships.model';
import { AppState } from 'src/app/store/app.reducers';

declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  dataList: Ships[];
  config: any;
  shipId: string = '';
  url: string = '';

  loading = false;
  loaded = false;

  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor(private store: Store<AppState>) { 
  }
  
  ngOnInit(): void {

    this.store.select('data').subscribe( data => {
            
      this.loading = data.loading;
      this.loaded = data.loaded;
      this.dataList = data.ships;
    })

      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
      };
  }


  getStarshipId(url) {
    this.shipId = url.slice(0, -1)
    const urlImage = `${this.shipId}.jpg`
    return urlImage !== "";
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}

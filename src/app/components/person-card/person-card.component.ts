import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  
  @Input() person: Person;
  constructor(private shipService: ShipsService) { }

  ngOnInit(): void {
  }

  get personId() {
    return this.shipService.getObjId(this.person);
  }

  getFilmId(filmUrl:  string) {
    return this.shipService.getObjIdFromString(filmUrl);
  }

}

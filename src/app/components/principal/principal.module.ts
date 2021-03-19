
import { NgModule } from '@angular/core';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { ShareModule } from '../../share/share.module';
// Components
import { ShipsComponent } from '../ships/ships.component';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { ShipsDetailsComponent } from '../ships/ships-details/ships-details.component';
import { PrincipalComponent } from './principal.component';

//NRX
import { ShipCardComponent } from '../ships/ship-card/ship-card.component';
import { ShipInfoDetailComponent } from '../ships/ship-info-detail/ship-info-detail.component';
import { personCardComponent } from '../person-card/person-card.component';
import { VehiclesCardComponent } from '../vehicles-card/vehicles-card.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    ShipsComponent,
    ShipsDetailsComponent,
    ShipCardComponent,
    ShipInfoDetailComponent,
    personCardComponent,
    VehiclesCardComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    ShareModule,
    PrincipalComponentsRoutingModule
  ],


})
export class PrincipalModule { }

import { NgModule } from '@angular/core';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { ShareModule  } from '../../share/share.module';
// Components
import { ShipsComponent } from '../ships/ships.component';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { ShipsDetailsComponent } from '../ships/ships-details/ships-details.component';
import { PrincipalComponent } from './principal.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    ShipsComponent,
    ShipsDetailsComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    ShareModule,
    PrincipalComponentsRoutingModule
  ],
  
  
})
export class PrincipalModule { }
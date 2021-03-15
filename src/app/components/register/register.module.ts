import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from 'src/app/share/share.module';

import { RegisterComponent } from './register.component';



export const registerRoutes: Routes  = [
  {
  path: '',
  component: RegisterComponent
  }
];



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(registerRoutes),
  ]
})
export class RegisterModule { }

import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from 'src/app/share/share.module';

import { LoginComponent } from './login.component';


export const loginRoutes: Routes  = [
  {
  path: '',
  component: LoginComponent
  }
];



@NgModule({
  declarations: [LoginComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(loginRoutes),
  ]
})
export class LoginModule { }

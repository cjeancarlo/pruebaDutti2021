
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




const COREMODULE: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  NgxPaginationModule,
  SweetAlert2Module
  
];
@NgModule({
  declarations: [
  ],
  imports: [
    COREMODULE
  ],
  exports: [COREMODULE],
  
})
export class ShareModule { }
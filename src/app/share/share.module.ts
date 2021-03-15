
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const COREMODULE: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  NgxPaginationModule
  
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
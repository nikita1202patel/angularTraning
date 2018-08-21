import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ProductComponent} from '../product/product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
   
  ],
  declarations: [ ProductListComponent],
  exports:[
    ProductListComponent
  ]
})

export class ProductListModule { }

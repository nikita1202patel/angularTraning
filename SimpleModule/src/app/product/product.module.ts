import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ProductService} from './product/product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [ProductComponent],
  exports: [
    ProductComponent
  ],
  providers:[
    ProductService
  ]
})
export class ProductModule { }

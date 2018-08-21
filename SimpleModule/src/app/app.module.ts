import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import {ProductListModule} from './product-list/product-list.module';
import {ProductModule} from './product/product.module';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    ProductModule,
    RouterModule,
    ProductListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

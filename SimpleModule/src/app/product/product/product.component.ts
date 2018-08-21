import { Component, OnInit } from '@angular/core';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products;
  showImage : boolean = false;
  imageWidth : number = 50;
  imageMargin : number = 2;
  TwoWayBinding : string = 'TwoWayBinding';
  // products : any[] = [
  //   {
  //     "productName" : "Leaf Rake",
  //     "imageUrl" : "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
  //     "productCode" : "GDN-0011"
  //   },
  //   {
  //     "productName" : "Garden Cart",
  //     "imageUrl" : "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
  //     "productCode" : "GDN-0023"
  //   },
  // ]

  constructor(private product : ProductService) { 
      this.products = product.getProducts();
  }

  ngOnInit() {
  }
   
  toggleImage() : void{
    this.showImage = !this.showImage;
  }
  callPhone(value){
     console.log(value);
  } 

}

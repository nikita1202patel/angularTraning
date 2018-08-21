import { Injectable } from '@angular/core';

@Injectable()

export class ProductService {
    products : any[] = [
        {
          "productName" : "Leaf Rake",
          "imageUrl" : "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
          "productCode" : "GDN-0011"
        },
        {
          "productName" : "Garden Cart",
          "imageUrl" : "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
          "productCode" : "GDN-0023"
        },
      ]
      
  constructor() { }
  getProducts() : any[] {
   
   return this.products;
  }
}
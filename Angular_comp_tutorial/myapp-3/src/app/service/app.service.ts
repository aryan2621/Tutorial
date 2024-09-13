import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private logService: LogService) {}
  public getProducts() {
    return [
      {
        name: 'Laptop',
        price: 1000,
      },
      {
        name: 'Mobile',
        price: 100,
      },
      {
        name: 'TV',
        price: 10000,
      },
    ];
  }
  public addProduct(product: any) {
    return product;
  }
  public deleteProduct(product: any) {
    return product;
  }

}

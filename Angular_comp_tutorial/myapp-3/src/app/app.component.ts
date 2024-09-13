import { Component } from '@angular/core';
import { AppService } from './service/app.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]

  // dependency injection
})
export class AppComponent {
  title = 'myapp-3';

  // Method-1 to use the service
  constructor(
    private appService: AppService,
    private userService: UserService
  ) {}
  // this is known as dependency injection

  // Method-2 to use the service
  // appServices = new AppService();

  // Directives in angular are used to manipulate the DOM
  //  Types of directives
  // 1. Structural directives
  // 2. Attribute directives

  // Structural directives
  // Structural directives are used to add or remove elements from the DOM
  // 1. ngIf
  // 2. ngFor
  // 3. ngSwitch

  // Attribute directives
  // Attribute directives are used to add or remove attributes from the DOM
  // 1. ngClass
  // 2. ngStyle
  // 3. ngModel
  available: boolean = false;

  // services in angular are used to share data between components
  // 1. create a service using the command ng g s service-name
  // 2. import the service in the component
  // 3. add the service in the constructor
  // 4. use the service in the component

  // getProducts() {
  //   return this.appServices.getProducts();
  // }
  // addProducts(product: any) {
  //   return this.appServices.addProduct(product);
  // }
  // deleteProducts(product: any) {
  //   return this.appServices.deleteProduct(product);
  // }


  users: {
    name: string;
    age: number;
    status: string;
  }[] = [];

  ngOnInit() {
    this.users = this.userService.users;
  }
}

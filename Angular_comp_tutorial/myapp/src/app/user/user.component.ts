import { Component } from '@angular/core';

// @Component is a decorator that is used to define the class as a component
@Component({
  // Method:1 Using selector
  // selector: 'app-user',
  // selector can be used in html as <app-user></app-user>

  // Method 2: Using selectorAttribute
  // selector: '[app-user]',

  // Method 3: Using selectorClass
  selector: '.app-user',

  // templateUrl is the path to the template file
  // template is the template itself

  // Method 1: Using template

  // template: `<h1>John Doe</h1>
  // <p>Email: aryan@gmail.com</p>
  // `,

  // Method 2: Using templateUrl
  templateUrl: './user.component.html',
  // only one of template or templateUrl can be used

  // Method 1: Using styleURL
  styleUrls: [
    './user.component.css',
    // './user.component.scss',
    // './user.component.less',
  ],
  // Method 2: Using styles
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
  // In templateURL only one file can be used but in styleUrls multiple files can be used
})
export class UserComponent {
  // Command to create new component: ng g c user

  // Data-binding is the process of binding the data to the template
  // There are 3 types of data-binding
  // 1. String Interpolation
  // 2. Property Binding
  // 3. Event Binding

  // This is an example of String Interpolation
  Employee = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA',
    },
  };
  getUserAddress() {
    return (
      this.Employee.address.street +
      ',' +
      this.Employee.address.city +
      ', ' +
      this.Employee.address.state
    );
  }

  // This is an example of Property Binding
  allowUserFromUser = false;

  // This is an example of Event Binding
  userCreatedStatus = 'No user';
  changeUserCreatedStatus() {
    this.userCreatedStatus = 'User Created';
  }

  CurrentUser = 'Rishabh Verma';
  onUpdateUserinfo(event: Event) {
    //  Typecasting the event
    this.CurrentUser = (event.target as HTMLInputElement).value;
    //  as this $event is of type Event so we need to typecast it to HTMLInputElement
  }

  // Two-way data-binding
  // This is an example of Two-way data-binding

  // ngIf
  show = true;
  toggleUser() {
    this.show = !this.show;
  }

  // nGStyle
  color = 'red';
  changeColor() {
    let colorValue = Math.random() * 100;
    console.log(colorValue);

    if (colorValue > 30) {
      this.color = 'green';
    } else if (colorValue > 60) {
      this.color = 'blue';
    } else {
      this.color = 'yellow';
    }
  }

  // ngClass
  Styles = [
    {
      '.Offline': {
        color: 'red',
        'font-weight': 'bold',
      },
    },
  ];

  // ngFor
  users = ['Rishabh', 'Aryan', 'Rahul', 'Rajat', 'Rahul'];

  // debug in angular in chrome
  // 1. Open chrome
  // 2. Open the application
  // 3. Press F12
  // 4. Go to the console tab
  // 5. Type ng.probe(document.querySelector('app-user')).componentInstance
  // 6. This will give the instance of the component
  // 7. Now we can access the properties of the component
  // 8. To change the properties of the component we can use the following command
  // ng.probe(document.querySelector('app-user')).componentInstance.CurrentUser

  // also you can see angular-augry extension in chrome

  // ngSwitch
  student = 'Nothing';
  mark = Math.random() * 100;
  marks = new Map<number, string>();
  constructor() {
    // constructor is used to initialize the class and its properties
    // it will be called when the class is instantiated even if it is not used
    setTimeout(() => {
      this.allowUserFromUser = true;
    }, 5000);

    this.marks.set(90, 'Rishabh');
    this.marks.set(80, 'Aryan');
    this.marks.set(70, 'Rahul');
    this.marks.set(60, 'Rajat');
    this.marks.set(50, 'Rahul');
    this.marks.set(40, 'Rajarshi');

    this.student = this.marks.get(this.mark)?.toString() ?? 'Nothing';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector means that the component will be used in the
  // HTML as <app-root></app-root>
  templateUrl: './app.component.html',
  // templateUrl means that the HTML code will be loaded
  // from the file app.component.html
  styleUrls: ['./app.component.css'],
  // styleUrls means that the CSS code will be loaded
  // from the file app.component.css

  // step-4: Bootstrap the AppComponent
})
export class AppComponent {
  title = 'myapp';
  profile = 'Programmer';
  // title and profile are properties of the class AppComponent
  // they can be used in the HTML code
}

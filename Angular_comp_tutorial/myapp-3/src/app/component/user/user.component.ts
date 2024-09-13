import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // providers: [UserService],
})
export class UserComponent {
  constructor(private userService: UserService) {}
  @Input() user: {
    name: string;
    age: number;
    status: string;
  } = { name: '', age: 0, status: '' };

  
  setActive(user: any) {
    this.userService.setActive(user);
  }
  setInactive(user: any) {
    this.userService.setInactive(user);
  }
  // the active/inactive wont work as differnt instance of service is passed
  // to the differnt ways
  // to fix this we need to use the highest level of injection
  // currently appcomponent/user/adduser are using
  // highest level is appModule
  // next level is appComponent
  // next level is userComponent
  // next level is addUserComponent

  // same instance of service is passed to
  //  all the components but service have diffent instance
}

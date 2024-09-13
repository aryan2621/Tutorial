import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  // providers: [UserService],
})
export class AddUserComponent {
  constructor(private userService: UserService) {}
  userName = '';
  userAge = 0;
  userStatus = '';

  addUser() {
    let user = {
      name: this.userName,
      age: this.userAge,
      status: this.userStatus,
    };
    this.userService.addUser(user);
    this.userName = '';
  }
  ngOnInit(): void {
    this.userService.statusUpdated.subscribe((status: string) => {
      alert('Status Updated to ' + status);
    });
    // this will subscribe to the event emitter
    // and will execute the function when the event is emitted
  }
}

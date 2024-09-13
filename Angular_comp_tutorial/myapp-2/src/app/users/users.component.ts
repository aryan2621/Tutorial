import { Component, ViewEncapsulation } from '@angular/core';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None,
  // this line is added to make the h3 style red in both user and add user component
})
export class UsersComponent {
  usersList: string[] = [];

  constructor(private localService: LocalService) {
    let data = this.localService.getData('usersList');
    if (data) {
      let array = JSON.parse(data);
      if (array) this.usersList = array;
    }
  }

  AddUser(event: string) {
    this.usersList.push(event);
    this.localService.setData('usersList', JSON.stringify(this.usersList));
  }
 
}

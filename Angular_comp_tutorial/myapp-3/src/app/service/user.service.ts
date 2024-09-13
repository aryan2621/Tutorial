import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private logService: LogService) {}
  users = [
    {
      name: 'Rishabh',
      age: 20,
      status: 'active',
    },
    {
      name: 'Rahul',
      age: 21,
      status: 'active',
    },
  ];
  addUser(user: { name: string; age: number; status: string }) {
    this.users.push(user);
    this.logService.logStatusChange(user.status);
    // if we want to inject one service in another service
    // make sure to place the service in highest level of injection
    // like appModule
  }

  statusUpdated = new EventEmitter<string>();

  setActive(user: any) {
    user.status = 'active';
    this.statusUpdated.emit(user.status);
    // through this we can communicate between two components
    // we can emit any data type
    
  }
  setInactive(user: any) {
    user.status = 'inactive';
    this.statusUpdated.emit(user.status);
  }
}

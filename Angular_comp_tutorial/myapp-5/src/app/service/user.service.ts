import { Injectable } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  // @Output() userAdded = new EventEmitter<boolean>();
  useAdded = new Subject<boolean>();

  userAddedOnClick() {
    // this.userAdded.emit(true);
    this.useAdded.next(true);
  }
}

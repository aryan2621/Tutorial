import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  // userName: string = '';

  @Output() userAdded = new EventEmitter<string>();
  @ViewChild('userName') userName: any;

  // #name is a local reference variable
  // it is used to get the value of input field
  // it helps in getting the value of input field

  // AddUser(input: HTMLInputElement) {
  AddUser() {
    // input contains all the value of input field
    // if(userName.value === '') return;
    // this.userAdded.emit(userName.value);
    // userName.value = '';

    // if (input.value === '') return;
    // this.userAdded.emit(input.value);
    // input.value = '';

    console.log(this.userName);
    if (this.userName.nativeElement.value === '') return;
    this.userAdded.emit(this.userName.nativeElement.value);
    this.userName.nativeElement.value = '';
  }

  // ngContent is used to pass the content from parent to child
}

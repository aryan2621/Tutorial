import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  name: string;
  email: string;
  phone: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChild('f') signupForm?: NgForm;

  onFormSubmit() {
    let values = this.signupForm?.value;
    // console.log('f', this.signupForm?.valid ? this.signupForm.valid : '');
    console.log(values);
  }

  // onInput(from:ngForm,$event: any) {
  //   console.log($event.target.value);
  // }

  onInput($event: any) {
    console.log($event.target.value);
  }
  gender: string = 'male';
  about: string = '';
  submitted: boolean = false;
  user = {
    username: '',
    email: '',
    phone: 0,
  };

  onFormSubmits() {
    this.submitted = true;
    this.user.username = this.signupForm?.value.userData.username;
    this.user.email = this.signupForm?.value.userData.email;
    this.user.phone = this.signupForm?.value.userData;
    this.about = this.signupForm?.value.about;
    this.gender = this.signupForm?.value.gender;
    this.signupForm?.reset();
  }

  fillThedata() {
    // patchValue is used to fill the dataValue in the form
    // setValue is used to fill the dataValue in the form

    this.signupForm?.setValue({
      userData: {
        username: 'Rahul',
        email: 'a@a.com',
        phone: 1234567890,
      },
      gender: 'male',
      about: 'I am',
    });
  }
  // to fill the dataValue in the form
}

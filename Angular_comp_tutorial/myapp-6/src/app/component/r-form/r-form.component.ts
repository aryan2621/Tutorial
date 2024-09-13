import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css'],
})
export class RFormComponent {
  genders = ['male', 'female'];
  signUpForm!: FormGroup;

  // custom validation in the angular form
  forbiddenUsernames = ['Chris', 'Anna', 'Max', 'John', 'Zoya'];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('', [
          Validators.required,
          this.isRestricted.bind(this),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
      }),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('female'),
      hobbies: new FormArray([]),
    });

    this.signUpForm.valueChanges.subscribe((data) => {
      console.log(data);
    });
    this.signUpForm.statusChanges.subscribe((data) => {
      console.log(data);
    });
    this.signUpForm.setValue({
      userData: {
        username: 'Max',
        email: 'a@a.com',
      },
      username: 'Max',
      email: 'a@a.com',
      gender: 'male',
      hobbies: [],
    });
    this.signUpForm.patchValue({
      userData: {},
    });
  }
  submitForm() {
    console.log(this.signUpForm);
    console.log(this.signUpForm.value);
    this.signUpForm.reset();
  }

  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
    // adding control to form array using get method
  }

  isRestricted(c: FormControl): {
    [s: string]: boolean;
  } | null {
    return this.forbiddenUsernames.includes(c.value)
      ? { nameIsRestricted: true }
      : null;
  }
  title = 'angular-forms';
}

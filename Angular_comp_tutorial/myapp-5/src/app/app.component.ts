import { Component } from '@angular/core';
import {
  Observable,
  Observer,
  Subscription,
  filter,
  interval,
  map,
} from 'rxjs';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private userService: UserService) {}

  title = 'myapp-5';
  intervalSubscription: Subscription = new Subscription();
  userAddedSubscription: Subscription = new Subscription();

  customObservale = Observable.create((observer: any) => {
    let count = 0;
    setInterval(() => {
      if (count === 10) {
        // handling errors
        // observer.error(new Error('Count is 5'));
      }

      // handling completion
      if (count === 5) {
        // observer.complete();
      }
      observer.next(count);
      // observer.next means that the observable is emitting a value

      count++;
    }, 1000);
  });

  userAdded = false;

  ngOnInit(): void {
    // subject is a special type of observable
    // it is both an observable and an observer
    // it can emit values and also listen to values
    // it is used to share data between components
    // it is used to create custom observables
    // it is used to create custom observers

    // this userAdded thing can be doable with subject and
    // as well as with event emitters
    // but event emitters are not recommended for sharing data
    // between components

    // sharing data by eventEmitter
    // this.userService.userAdded.subscribe((data: boolean) => {
    //   this.userAdded = data;
    //   console.log(data);
    // });

    // sharing data by subject
    this.userAddedSubscription = this.userService.useAdded.subscribe(
      (data: boolean) => {
        this.userAdded = data;
        console.log('data by subject', data);
      }
    );

    // Create an observable that emits a value every second
    // observable is a function that takes a function as an argument
    // and returns a function as a return value
    // it doesnt depend on any component some observables are built in rxjs
    // these are need to be unsubscribed
    // some are created by angular these are automatically unsubscribed

    // this.intervalSubscription = interval(1000).subscribe((data) => {
    // console.log(data);

    // but on switching to another component, there may be
    // multiple subscriptions to the same observable
    // which can casue memory leaks

    // });

    // Operators are functions that take an observable as an argument
    // and return an observable as a return value
    // they are used to transform the data emitted by the observable

    this.intervalSubscription = this.customObservale
      .pipe(
        filter((data: number) => data > 0),

        // filter is an operator that takes a function as an argument
        // and returns an observable as a return value
        // it is used to filter the data emitted by the observable
        // it takes a function as an argument

        map((data: number) => {
          return `Count is: ${data}`;
        })
      )
      .subscribe(
        (data: number) => {
          // console.log(data);
        },
        (error: any) => {
          console.log(error);
        },
        (complete: any) => {
          console.log('completed', complete);
        }
      );
  }
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
    this.customObservale.unsubscribe();
    // this will prevent memory leaks as compoonet

    this.userAddedSubscription.unsubscribe();
  }
}

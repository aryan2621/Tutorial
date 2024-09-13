import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private router: Router, private currentRoute: ActivatedRoute) {}

  user: {
    name: string;
    id: number;
  } = {
    name: '',
    id: 0,
  };

  ngOnInit() {
    this.user = {
      name: this.currentRoute.snapshot.params['name'],
      id: this.currentRoute.snapshot.params['id'],
    };

    // dynamically update the route
    // dynamically fetching the data from the url
    // but when we moved to another and clicking the back button
    // the data is not updated and it wil keep previos data
    // even through the url is updated
    //as oninit is called only once

    // this will keep updating as the url is updated
    this.currentRoute.params.subscribe((data: Params) => {
      console.log('data', data);
      this.user = {
        name: data['name'],
        id: data['id'],
      };
    });
    // this is rjx way of subscribing to the data

    // console.log('queryParms', this.currentRoute.snapshot.queryParams);
    // console.log('fragment', this.currentRoute.snapshot.fragment);

    this.currentRoute.queryParams.subscribe((data: Params) => {
      console.log('queryParms', data);
    });
    this.currentRoute.fragment.subscribe((data: any) => {
      console.log('fragment', data);
    });
  }

  movetoAbout() {
    // perfom the logic

    // this.router.navigateByUrl('/about');
    // move to about page
    this.router.navigate(['/about']);
    // move to about page
  }
  getParamsvalues() {
    this.router.navigate(['/user', 2, 'sanskriti'], {
      queryParams: { name: 'sai', age: 23 },
      fragment: 'loading',
    });
  }
}

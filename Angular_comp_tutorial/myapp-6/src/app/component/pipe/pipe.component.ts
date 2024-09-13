import { Component } from '@angular/core';

interface User {
  name: string;
  age: number;
  date: Date;
}

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent {
  users: User[] = [
    { name: 'Rajesh', age: 30, date: new Date(2019, 0, 1) },
    { name: 'John', age: 40, date: new Date(2019, 0, 1) },
    { name: 'Zoya', age: 50, date: new Date(2019, 0, 1) },
    { name: 'Max', age: 60, date: new Date(2019, 0, 1) },
    { name: 'Chris', age: 70, date: new Date(2019, 0, 1) },
  ];

  filterString: string = '';
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  userList: any[];

  counter$: Observable<number>;
  even$: Observable<boolean>;
  people$: Observable<any>;
  person$: Observable<any>;
  data: any;

  constructor(private router: Router) {
      this.counter$ = Observable.interval(1000);

      this.even$ = this.counter$.map(number => number % 2 === 0);

      this.people$ = Observable.of([
              {name: 'Joe'},
              {name: 'Bob'},
              {name: 'Susy'}
          ]);

      this.person$ = Observable.of({
              name: 'Sally',
              age: 30
          })
          .delay(3000);

      this.data = this.getData();
  }

  checkCurrentRoute(routeStr: string) {
      return this.router.url.split('/').indexOf(routeStr) !== -1;
  }

  getData() {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve('RECEIVED DATA!');
          }, 5000);
      });
  }
}

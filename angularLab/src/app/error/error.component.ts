import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
              <h1 class="display-1"> ERROR: Page not found </h1>
              <a [routerLink]="['']" class="btn btn-primary"> Go to Homepage</a>
            `
  //templateUrl: './error.component.html',
  //styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  constructor() { }
  ngOnInit() {
}

}

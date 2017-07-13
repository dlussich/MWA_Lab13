import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template:`
            <h1 class="display-1"> Angular App </h1>
            <h1> This is the home page</h1>
            `
  //templateUrl: './homepage.component.html',
  //styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {DbService} from './../db.service'

@Component({
  selector: 'app-students',
  template:`
            <h1 class="display-2">Students</h1>
            <div class="col-md-6">
              <table class="table table-hover">
                <tr><th>Name</th><th>Student ID</th><th>Email</th></tr>
                <tr *ngFor="let stu of students">
                  <td><a [routerLink]="['profile', stu.id]">{{stu.name}}</a></td>
                  <td>{{stu.stuID}}</td>
                  <td>{{stu.email}}</td>
                </tr>
              </table>
            </div>
            <div class="col-md-4">
             <router-outlet></router-outlet>
             </div>
            `
  //templateUrl: './students.component.html',
  //styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  private students;
  constructor(private dbService: DbService) {
     this.students=this.dbService.getData();
   }

  ngOnInit() {
    console.log(this.students)
  }

}

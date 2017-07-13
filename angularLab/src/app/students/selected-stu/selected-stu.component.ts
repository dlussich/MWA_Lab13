import { Component, OnInit,Input } from '@angular/core';
import {DbService} from '../../db.service'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-selected-stu',
  template:`<h1 class="display-3">Student Details</h1> 
            <div class="container">
                   <table class="table table-striped">
                        <tr><th>Name:</th><td>{{name}}</td></tr>
                        <tr><th>Stundent ID: </th><td>{{studentID}}</td></tr>
                        <tr><th>Email: </th><td>{{email}}</td></tr>
                    </table>
              </div>`
  //templateUrl: './selected-stu.component.html',
 // styleUrls: ['./selected-stu.component.css']
})
export class SelectedStuComponent implements OnInit {

  constructor(private dbService: DbService,private activatedRoute: ActivatedRoute) {
       activatedRoute.params.subscribe(
          (param: any) => {
            this.id = param['id'];
            let data=dbService.getStudentById(this.id);
            this.email=data.email;
            this.studentID=data.stuID;
            this.name=data.name;
          }
      );
        
   }

  private id:number;
  private name:string;
  private email:string;
  private studentID:number;

  ngOnInit() {
  }

}

import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class DbService {
private data;
  constructor() { 
    this.data = [
    {id:1, name:'Frank Rosenberg',stuID:32231,email:'frosenberg@mum.edu'},
    {id:2, name:'William Lawason',stuID:12346,email:'wlawson@gmail.com'},
  {id:3, name:'Brent Russell',stuID:19213,email:'brussell@mum.edu'},
{id:4, name:'William Shakespiere',stuID:11111,email:'wshakespiere@mum.edu'},
{id:5, name:'Robin Hood',stuID:31233,email:'rhood@gmail.com'},
{id:6, name:'Rosalinda Maar',stuID:11777,email:'rmaar@mum.edu'},
{id:7, name:'Juana de Arco',stuID:21654,email:'jdearco@mum.edu'},
{id:8, name:'Nicole Wayatt',stuID:11664,email:'nwayatt@gmail.com'}];
  }


    getData() {
        return this.data;
    }
  
    getStudentById(id:number){
       let result= this.data.filter(obj =>{
          return obj.id == id;
        });
        return result[0];
    }


}

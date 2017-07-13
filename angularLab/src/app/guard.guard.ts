import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GuardGuard implements CanActivate {
  constructor(private r: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let id=next.params['id'];
      if(id>8){
        let result=confirm('The id is not valid, do you want to continue?');
        if(result){
          this.r.navigate(['error']);
        }else{
          this.r.navigate(['students']);
        }
      }
      return true;
  }
}

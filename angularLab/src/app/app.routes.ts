import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { StudentsComponent } from "./students/students.component";
import { ErrorComponent } from "./error/error.component";
import { SelectedStuComponent } from "./students/selected-stu/selected-stu.component";
import { GuardGuard } from "./guard.guard";

const MY_ROUTES: Routes = [
     { path: '', component: HomepageComponent },
     { path: 'error', component: ErrorComponent },
     // A redirect route requires a pathMatch property to tell the router how to match a URL to the path of a route.
     // The default matching strategy of Angular router is
     // to match the redirect route when the URL begins with the redirect route's prefix path.
     // if 'prefix' all params/routes/xx will be redirected to homepage
     { path: 'students', component: StudentsComponent,children: [
         { path: 'profile/:id', component: SelectedStuComponent, canActivate:[GuardGuard] }
     ] },
     
     // ** for all routes that we don't recognize, 
     // Routes served from top to bottom so this should always come last!
     { path: '**', redirectTo: 'error'}
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);

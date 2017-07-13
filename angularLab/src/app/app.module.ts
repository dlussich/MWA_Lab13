import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { myRoutes } from "./app.routes";
import { HomepageComponent } from './homepage/homepage.component';
import { StudentsComponent } from './students/students.component';
import { DbService } from "app/db.service";
import { SelectedStuComponent } from './students/selected-stu/selected-stu.component';
import { ErrorComponent } from './error/error.component';
import { GuardGuard } from './guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    SelectedStuComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    myRoutes
  ],
  providers: [DbService,
              GuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

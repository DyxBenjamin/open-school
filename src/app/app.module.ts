import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupsComponent } from './teachers/groups/groups.component';
import { ParentsComponent } from './teachers/parents/parents.component';
import { StudentsComponent } from './teachers/students/students.component';
import { TutorialsComponent } from './teachers/tutorials/tutorials.component';
import { CoursesComponent } from './teachers/courses/courses.component';
import { CourseCreateComponent } from './teachers/courses/course-create/course-create.component';
import { GroupSessionComponent } from './teachers/tutorials/group-session/group-session.component';

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    GroupsComponent,
    ParentsComponent,
    StudentsComponent,
    TutorialsComponent,
    CoursesComponent,
    CourseCreateComponent,
    GroupSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

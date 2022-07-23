import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/portal/home/home.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {AppRoutingModule} from "./app-routing.module";
import {MatIconModule} from "@angular/material/icon";
import { TeacherGroupsComponent } from './teachers/teacher-groups/teacher-groups.component';
import { TeacherParentsComponent } from './teachers/teacher-parents/teacher-parents.component';
import { TeacherStudentsComponent } from './teachers/teacher-students/teacher-students.component';
import { TeacherTutorialsComponent } from './teachers/teacher-tutorials/teacher-tutorials.component';
import { TeacherCoursesComponent } from './teachers/teachers-courses/teacher-courses.component';
import { CourseCreateComponent } from './teachers/teachers-courses/course-create/course-create.component';
import { GroupSessionComponent } from './teachers/teacher-tutorials/group-session/group-session.component';
import {NewUserComponent} from "./pages/new-user/new-user.component";
import {RegisteredUserComponent} from "./pages/registered-user/registered-user.component";

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    TeacherGroupsComponent,
    TeacherParentsComponent,
    TeacherStudentsComponent,
    TeacherTutorialsComponent,
    TeacherCoursesComponent,
    CourseCreateComponent,
    GroupSessionComponent,
    NavBarComponent,
    NewUserComponent,
    HomeComponent,
    RegisteredUserComponent
  ],
  exports: [MatSidenavModule],
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

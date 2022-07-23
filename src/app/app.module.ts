import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherGroupsComponent } from './teachers/teacher-groups/teacher-groups.component';
import { TeacherParentsComponent } from './teachers/teacher-parents/teacher-parents.component';
import { TeacherStudentsComponent } from './teachers/teacher-students/teacher-students.component';
import { TeacherTutorialsComponent } from './teachers/teacher-tutorials/teacher-tutorials.component';
import { TeacherCoursesComponent } from './teachers/teachers-courses/teacher-courses.component';
import { CourseCreateComponent } from './teachers/teachers-courses/course-create/course-create.component';
import { GroupSessionComponent } from './teachers/teacher-tutorials/group-session/group-session.component';
import { StudentsComponent } from "./students/students.component";
import { StudentsCoursesComponent } from "./students/courses/courses.component";
import { StudentsCoursesCourseComponent } from "./students/courses/course/course.component";
import { StudentsCourseHeaderComponent } from './students/courses/course/course-header/course-header.component';
import { CourseContentComponent } from './students/courses/course/course-content/course-content.component';

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
    StudentsComponent,
    StudentsCoursesComponent,
    StudentsCoursesCourseComponent,
    StudentsCourseHeaderComponent,
    CourseContentComponent,

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

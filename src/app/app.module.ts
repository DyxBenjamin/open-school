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
import { LoginComponent } from './acceso/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SignupComponent } from './acceso/signup/signup.component';
import { SignupPadreComponent } from './acceso/signup-padre/signup-padre.component';
import { SignupProfesorComponent } from './acceso/signup-profesor/signup-profesor.component';
import { SignupTutorComponent } from './acceso/signup-tutor/signup-tutor.component';
import { PerfilAlumnoComponent } from './acceso/perfil-alumno/perfil-alumno.component';
import { PerfilPadreComponent } from './acceso/perfil-padre/perfil-padre.component';
import { PerfilProfesorComponent } from './acceso/perfil-profesor/perfil-profesor.component';
import { PerfilTutorComponent } from './acceso/perfil-tutor/perfil-tutor.component';

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
    LoginComponent,
    SignupComponent,
    SignupPadreComponent,
    SignupProfesorComponent,
    SignupTutorComponent,
    PerfilAlumnoComponent,
    PerfilPadreComponent,
    PerfilProfesorComponent,
    PerfilTutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

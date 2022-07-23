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
    GroupsComponent,
    ParentsComponent,
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

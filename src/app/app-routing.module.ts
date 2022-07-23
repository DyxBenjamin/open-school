import {RouterModule, Routes} from "@angular/router";
import {TeachersComponent} from "./teachers/teachers.component";
import {LoginComponent} from "./acceso/login/login.component";
import {SignupComponent} from "./acceso/signup/signup.component";
import {SignupPadreComponent} from "./acceso/signup-padre/signup-padre.component";
import {SignupProfesorComponent} from "./acceso/signup-profesor/signup-profesor.component";
import {SignupTutorComponent} from "./acceso/signup-tutor/signup-tutor.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: 'teachers', pathMatch: 'full'},
  {path: 'teachers', component: TeachersComponent },
  {path: 'login', component: LoginComponent },
  {path: 'signUp', component: SignupComponent },
  {path: 'signupPadre', component:SignupPadreComponent},
  {path: 'signupProfesor', component:SignupProfesorComponent},
  {path: 'signupTutor', component:SignupTutorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

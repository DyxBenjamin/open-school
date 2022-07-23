import {RouterModule, Routes} from "@angular/router";
import {TeachersComponent} from "./teachers/teachers.component";
import {LoginComponent} from "./acceso/login/login.component";
import {SignupComponent} from "./acceso/signup/signup.component";
import {SignupPadreComponent} from "./acceso/signup-padre/signup-padre.component";
import {SignupProfesorComponent} from "./acceso/signup-profesor/signup-profesor.component";
import {SignupTutorComponent} from "./acceso/signup-tutor/signup-tutor.component";
import {NgModule} from "@angular/core";
import {TeacherGroupsComponent} from "./teachers/teacher-groups/teacher-groups.component";
import {TeacherParentsComponent} from "./teachers/teacher-parents/teacher-parents.component";
import {TeacherStudentsComponent} from "./teachers/teacher-students/teacher-students.component";
import {TeacherTutorialsComponent} from "./teachers/teacher-tutorials/teacher-tutorials.component";
import {TeacherCoursesComponent} from "./teachers/teachers-courses/teacher-courses.component";
import {CourseCreateComponent} from "./teachers/teachers-courses/course-create/course-create.component";
import {GroupSessionComponent} from "./teachers/teacher-tutorials/group-session/group-session.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'teachers', component: TeachersComponent },
  {path: 'teachers/groups', component: TeacherGroupsComponent },
  {path: 'teachers/parents', component: TeacherParentsComponent },
  {path: 'teachers/students', component: TeacherStudentsComponent },
  {path: 'teachers/tutorials', component: TeacherTutorialsComponent },
  {path: 'teachers/tutorials/group', component: GroupSessionComponent },
  {path: 'teachers/courses', component: TeacherCoursesComponent },
  {path: 'teachers/courses/create', component: CourseCreateComponent },
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

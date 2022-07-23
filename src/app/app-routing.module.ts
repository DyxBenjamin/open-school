import {RouterModule, Routes} from "@angular/router";
import {TeachersComponent} from "./teachers/teachers.component";
import {NgModule} from "@angular/core";
import {GroupsComponent} from "./teachers/groups/groups.component";
import {ParentsComponent} from "./teachers/parents/parents.component";
import {StudentsComponent} from "./teachers/students/students.component";
import {TutorialsComponent} from "./teachers/tutorials/tutorials.component";
import {CoursesComponent} from "./teachers/courses/courses.component";
import {CourseCreateComponent} from "./teachers/courses/course-create/course-create.component";

const routes: Routes = [
  {path: '', redirectTo: 'teachers', pathMatch: 'full'},
  {path: 'teachers', component: TeachersComponent },
  {path: 'teachers/groups', component: GroupsComponent },
  {path: 'teachers/parents', component: ParentsComponent },
  {path: 'teachers/students', component: StudentsComponent },
  {path: 'teachers/tutorials', component: TutorialsComponent },
  {path: 'teachers/courses', component: CoursesComponent },
  {path: 'teachers/courses/create', component: CourseCreateComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

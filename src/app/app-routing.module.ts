import {RouterModule, Routes} from "@angular/router";
import {TeachersComponent} from "./teachers/teachers.component";
import {NgModule} from "@angular/core";
import {TeacherGroupsComponent} from "./teachers/teacher-groups/teacher-groups.component";
import {TeacherParentsComponent} from "./teachers/teacher-parents/teacher-parents.component";
import {TeacherStudentsComponent} from "./teachers/teacher-students/teacher-students.component";
import {TeacherTutorialsComponent} from "./teachers/teacher-tutorials/teacher-tutorials.component";
import {TeacherCoursesComponent} from "./teachers/teachers-courses/teacher-courses.component";
import {CourseCreateComponent} from "./teachers/teachers-courses/course-create/course-create.component";

const routes: Routes = [
  {path: '', redirectTo: 'teachers', pathMatch: 'full'},
  {path: 'teachers', component: TeachersComponent },
  {path: 'teachers/groups', component: TeacherGroupsComponent },
  {path: 'teachers/parents', component: TeacherParentsComponent },
  {path: 'teachers/students', component: TeacherStudentsComponent },
  {path: 'teachers/tutorials', component: TeacherTutorialsComponent },
  {path: 'teachers/courses', component: TeacherCoursesComponent },
  {path: 'teachers/courses/create', component: CourseCreateComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

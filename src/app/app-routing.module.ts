import {RouterModule, Routes} from "@angular/router";
import {TeachersComponent} from "./teachers/teachers.component";
import {NgModule} from "@angular/core";
import {GroupsComponent} from "./teachers/groups/groups.component";
import {ParentsComponent} from "./teachers/parents/parents.component";

const routes: Routes = [
  {path: '', redirectTo: 'teachers', pathMatch: 'full'},
  {path: 'teachers', component: TeachersComponent },
  {path: 'teachers/groups', component: GroupsComponent },
  {path: 'teachers/parents', component: ParentsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

import {RouterModule, Routes} from "@angular/router";
import {TeachersComponent} from "./teachers/teachers.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: 'teachers', pathMatch: 'full'},
  {path: 'teachers', component: TeachersComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";
import {HomeComponent} from "./pages/portal/home/home.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {AppRoutingModule} from "./app-routing.module";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupsComponent } from './teachers/groups/groups.component';
import { ParentsComponent } from './teachers/parents/parents.component';

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    HomeComponent,
    NavBarComponent
    TeachersComponent,
    GroupsComponent,
    ParentsComponent
  ],
  exports: [MatSidenavModule],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
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

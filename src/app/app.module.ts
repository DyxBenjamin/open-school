import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

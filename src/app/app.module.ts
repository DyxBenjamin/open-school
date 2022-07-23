import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";
import {HomeComponent} from "./pages/portal/home/home.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatRadioModule} from "@angular/material/radio";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    HomeComponent,
    NavBarComponent
  ],
  exports: [MatSidenavModule],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

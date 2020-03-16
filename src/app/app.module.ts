import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingModule } from './modules/landing/landing.module';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';


import {OrderingModule} from './modules/ordering/ordering.module';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    OrderingModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
// 1- IMPORTO ESTA librería: 
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { React1Component } from './react1/react1.component';

@NgModule({
  declarations: [
    AppComponent,
    React1Component
  ],
  imports: [
    BrowserModule,
    //FormsModule, -> AQUí TAMBIÉN !!!!!!
    ReactiveFormsModule
    //HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

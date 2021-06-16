import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FactorialPipe } from './factorial.pipe';
import { SumatorioPipe } from './sumatorio.pipe';
import { CuboPipe } from './cubo.pipe';
import { CuadradoPipe } from './cuadrado.pipe';
import { UpperLowerComponent } from './upper-lower/upper-lower.component';

@NgModule({
  declarations: [
    AppComponent,
    FactorialPipe,
    SumatorioPipe,
    CuboPipe,
    CuadradoPipe,
    UpperLowerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    //HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

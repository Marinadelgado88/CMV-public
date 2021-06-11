import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';  //Con Angular última versión 8 NO hace falta
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DirIfComponent } from './views/dir-if/dir-if.component';
import { ForComponent } from './views/for/for.component';
import { SwitchComponent } from './views/switch/switch.component';
import { ModelComponent } from './views/model/model.component';
import { StyleComponent } from './views/style/style.component';
const appRoutes: Routes = [
  { path: 'DirIfComponent', component: DirIfComponent },  
  { path: 'ForComponent', component: ForComponent },
  { path: 'ModelComponent', component: ModelComponent },
  { path: 'SwitchComponent', component: SwitchComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },  

];


@NgModule({
  declarations: [
    AppComponent,
    DirIfComponent,
    ForComponent,
    SwitchComponent,
    //ModelComponent,
    StyleComponent
  ],
  
    
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

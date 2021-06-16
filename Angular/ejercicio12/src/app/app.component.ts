import { Component } from '@angular/core';

import {Persona} from './persona';
import {Pais} from './pais';
import {Continente} from './continente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes: JsonPipe';


  persona1: Persona = new Persona('Marina', 'Delgado', 32, '26250242c');
  persona2: Persona = new Persona('Rafa', 'Fernandez', 46, '48866662b');
  persona3: Persona = new Persona('Joaquina', 'Esquinas', 65, '40258965c');
  persona4: Persona = new Persona('Salo', 'Delgado', 42, '40256325c');
  personaArray: Persona[] = [this.persona1, this.persona2, this.persona3, this.persona4];

  pais1: Pais = new Pais('comunidad', 'Barcelona', [this.persona1,this.persona2, this.persona3, this.persona4]);
  pais2: Pais = new Pais('comunidad', 'Mardrid', [this.persona1,this.persona2, this.persona3, this.persona4]);
  pais3: Pais = new Pais('comunidad', 'Andalucia', [this.persona1,this.persona2, this.persona3, this.persona4]);
  pais4: Pais = new Pais('comunidad', 'Alicante', [this.persona1,this.persona2, this.persona3, this.persona4]);

  continente : Continente = new Continente ("Europa", [this.pais1, this.pais2, this.pais3, this.pais4])
}

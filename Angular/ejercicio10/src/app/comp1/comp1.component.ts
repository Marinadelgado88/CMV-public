import { Component, OnInit } from '@angular/core';
import { LIBROS } from '../mocks';
import{ Libro } from'../libro.model';
import { LibroService } from '../libro.service';
import { LoggerService } from '../logger.service';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  libros: Libro[];
  constructor(private libroService: LibroService, private loggerService: LoggerService) { }

  ngOnInit() {
     //this.libros = this.libroService.getLibros();
    //this.libroService.getLibros().then(libros => this.libros = libros);

    // 2- Con método "then" manejo lo que me devuelva "resolver" y con método "catch" manejo lo que devuelva "rechazar" (en este ejemplo no lo utilizo)
    this.libroService.getLibros()
    .then(
      lib => {
        this.loggerService.log("Ejecucion del 1º then");
        console.log(lib[0].autor);  // compruebo que está trabajando con lo que me devuelve función "resolver" del Servicio
        return lib;
      }
    )
    .then(
      lib => {
        this.loggerService.log("Ejecucion del 2º then");
        return new Promise<Libro[]>((resolve, reject) => { // (*)
            this.loggerService.log("Inicio ejecutor (Promise del 2º then)");
            console.log(lib[1].autor);
            setTimeout(() => {
              this.loggerService.log("Fin ejecutor (Promise del 2º then)");
              resolve(lib);
            }, 5000);
        });
      }
    )
    .then(
      lib => {
        this.loggerService.log("Ejecucion del 3º then");
        console.log(lib[0].titulo);
        this.libros = lib;
      }
    );

  }

}

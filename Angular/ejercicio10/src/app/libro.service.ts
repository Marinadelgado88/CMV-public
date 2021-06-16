import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import{ Libro } from'./libro.model';
import { LIBROS } from './mocks';

// El decorados @Injectable marca una clase como disponible para un inyector para poder instanciarla 
@Injectable()
export class LibroService {

  // INYECTAMOS el Servicio Logger ya que lo usará
  constructor(private loggerService: LoggerService) { }

  /* getLibros() {  // Así lo hacíamos de manera SÍNCRONA
    this.loggerService.log("Llamada realizada sobre Libroservice.getLibros");
    return LIBROS;
  } */

  /* Para que la aplicación no se bloquee se trabja de manara asíncrona
    Esto se hace con PROMESAS, es un valor que se espera en un tiempo futuro, no definido después de ejecutar, de forma asíncrona, en una función.
    1- Ser crea la Promesa con:  new Promise /ejecutor/ funciones(resolver, rechazar) ....
      Empiza a ejecutarse de manera asíncrona justo cuando se crea. Llamará a la función "resolver" para hacer su funcionalidad o 
       la función "rechazar" si hay un error
  */
  getLibros(): Promise<Libro[]> {
    return new Promise<Libro[]>( (resolve, reject) => {
      this.loggerService.log("Inicio ejecutor (Promise de LibroService.getLibros())");
      setTimeout(() => {
        this.loggerService.log("Fin ejecutor (Promise de LibroService.getLibros())");
        resolve(LIBROS);
      }, 5000);
    });
  }



}

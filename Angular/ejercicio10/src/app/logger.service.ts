import { Injectable } from '@angular/core';

// El decorados @Injectable marca una clase como disponible para un inyector para poder instanciarla 
@Injectable()
export class LoggerService {

  constructor() { }

  log(message: string) {
    console.log("( " + new Date().toLocaleTimeString() + " ) " + message);
  }

}

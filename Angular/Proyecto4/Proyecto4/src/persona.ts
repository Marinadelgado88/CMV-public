
export class Persona {
    nombre: string;
    edad: number;
    ciudad: string;
  
    constructor(ed:number){ this.edad = ed}
  
    getEdad() { return this.edad; }
  }
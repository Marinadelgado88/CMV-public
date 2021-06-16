import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"],
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;

  constructor() {
    this.titulo = "Componente peliculas";
    console.log("Constructor Lanzado");
  }

  ngOnInit() {
    console.log("Oninit Lanzado");
  }
  ngDoCheck() {
    console.log("Docheck Lanzado");
  }
  cambiarTitulo() {
    this.titulo = "El titulo ha sido cambiado";
  }
  ngOnDestroy() {
    console.log("El componente se va a eliminar");
  }
}

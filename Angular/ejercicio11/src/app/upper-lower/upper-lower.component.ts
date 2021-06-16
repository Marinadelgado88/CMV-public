import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-lower',
  templateUrl: './upper-lower.component.html',
  styleUrls: ['./upper-lower.component.css']
})
export class UpperLowerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dia = new Date();
  h = this.dia.getHours();
  m = this.dia.getMinutes();
  hora = this.h + ":" + this.m;

  texto:string;

}

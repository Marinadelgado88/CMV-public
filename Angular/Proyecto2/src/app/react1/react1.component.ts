import { Component, OnInit } from '@angular/core';

// IMPORTO:
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-react1',
  templateUrl: './react1.component.html',
  styleUrls: ['./react1.component.css']
})
export class React1Component implements OnInit {
  title = 'FOrmulario REACTIVO';
  form: FormGroup;  // definimos variable para el formulario -> TAMBIÉN EN el HTML !!!!!!!
  constructor(private fctrl:FormBuilder) {   // a través de del constructor inyectamos "FormBuilder" para poder crear un Objeto que ->
    // con "form" creamos el grupo de controles de Validación por campo del formu                         -> represente los controles del formulario
    this.form=fctrl.group({                           
      codigo:['',Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6)
      ])],
      nombre:['',Validators.required]
    })
  }

  onSubmit() {
    console.log("codigo . " + this.form.controls['codigo'].value);
    console.log("nombre . " + this.form.controls['nombre'].value);
    console.log(JSON.stringify(this.form.value));
  }

  ngOnInit() {
  }

}

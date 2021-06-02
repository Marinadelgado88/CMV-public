var myarr = [];

type Datos = {
  n11: number,
  n22: number,
  n33: number
};

var dtls: Datos = {
  n11: 3,
  n22: 5,
  n33: 7
};

var datOr = {
  dt1: "Fecha de nacimiento:",
  dt2: "9-9",
  dt3: "1988"
};

type DatosStr = {
  dt1: string,
  dt2: string,
  dt3: string
};
type DatosTotales = Datos & DatosStr;
var dtls: DatosTotales = {
  n11: 9,
  n22: 9,
  n33: 1988,
  dt1: "/",
  dt2: "/",
  dt3: "Fecha de nacimiento:"
};

type TotalesOr = Datos | DatosStr;
var datOr: TotalesOr = {
  dt1: "Fecha de nacimiento:",
  dt2: "9-9",
  dt3: "1988"
};
interface Nombres {
  n1: string,
  n2: string
}
var nms: Nombres = {
  n1: "Marina",
  n2: "Delgado"
};

var Animal: { nombre: string; raza: string; peso: number } = {
  nombre: "Gato",
  raza: "Felino",
  peso: 30
};

var datos: number = [];
function enviar() {
  var nm1 = (<HTMLInputElement>document.getElementById("num1")).value;
  var n1: number = (parseInt(nm1));
  datos.push(n1);
  var nm2 = (<HTMLInputElement>document.getElementById("num2")).value;
  var n2: number = (parseInt(nm2));
  datos.push(n2);
  var nm3 = (<HTMLInputElement>document.getElementById("num3")).value;
  var n3: number = (parseInt(nm3));
  datos.push(n3);
}

function verArrayDatos() {
  for (var i = 0; i < datos.length; i++) {
    alert(datos[i]);
  }
}

function multiDatos() {
  alert("Multiplicacion:" + ((dts.n22 - dtls.n11) * dts.n22));
}
function restaDatos() {
  alert("Resta:" + ((dts.n22 * 4 )- (dts.n11 + dts.n33)));
}

function vernombre() {
  alert("Nombre entero:" + nms.n1 + "" + nms.n2);
}
function verNombreReves() {
  alert("Nombre por Apellido:" + nms.n2 + "" + nms.n1);
}
function verFechaNac() {
  alert(dtls.dt3 + ":" + dtls.n11 + dtls.dt1 + dtls.n22 + dtls.dt2 + dtls.n33);
}
function verAnimal() {
  alert(
    "Animal" +
      Animal.nombre +
      "-Raza:" +
      Animal.raza +
      "-peso:" +
      Animal.peso +
      "Kg"
  );
}

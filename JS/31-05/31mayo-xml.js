// ejercicios con arrays


// pasos ejercicio con XML:
// generar el array desde el XML
// AÑADIR un botón para cada orden:
// 1 - ascendente por nombre de usuario
// 2 - asecendente por clave de usuario
// 3 - mostrar solamente el usuario solicitado
//    (input - .slice .indexOf)

// variable global de la pagina
// un array con un elemento por cada usuario del XML
// en realidad será un array de arrays, una matriz bidimensional
let registrados = [];
function ascNombre() {
    //Ordeno primero la mariz
    registrados.sort(
    (usuario1,usuario2) =>
       usuario1[0].localeCompare(usuario2[0]),
  );
  function mostrar(){
    // muestro en pantallla el array de usuarios registrados
    //en el id solicitado
  
    let tabla="";
    registrados.forEach((usuario) => {
      usuario.forEach((datos) => {
        tabla = "<table><tr><th>Empleado</th><th>Clave</th></tr>";
        for (i = 0; i <registrados.length; i++) { 
          // leo las etiquetas que me interesan del objeto
          usrNom = registrados[i][0];
          usrPsw = registrados[i][1];
            // actualizo la tabla de visualización
          tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
          // actualizo el array bidimensional con los usuarios registrados
        }
        tabla += "</table>"
      });
    });
    document.getElementById("solicitado").innerHTML = tabla;
  }
  
}

function leerXML() {
    // lee desde GitHub.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        miFuncion(this);
      }
    };
    xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados2.xml", true);
    // xhr.open("GET", "registrados2.xml", true);
    xhr.send();
  }

  function miFuncion(xml) {
    var i;
    var usrNom;
    var usrPsw;
    var usuario = [];
    var xmlDoc = xml.responseXML;
    
    var x = xmlDoc.getElementsByTagName("usuario");
    // obtenemos algo así como x=[{USR1},{USR2}...,{CANDIDO}]
    
    // tabla es una variable string que contiene codigo
    // html para poder mostrar en pantalla el XML con formato tabla

    let tabla = "<table><tr><th>EMPLEADO</th><th>CLAVE</th></tr>";
    for (i = 0; i <x.length; i++) { 
      // leo las etiquetas que me interesan del objeto
      let usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
      let usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
      // actualizo la tabla de visualización
      tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
      // actualizo el array bidimensional con los usuarios registrados
      let usuario = [usrNom,usrPsw];
      registrados.push(usuario);
    }
    tabla += "</table>"
    document.getElementById("mensaje").innerHTML = tabla;
    
    // muestro en consola el array de usuarios registrados
      registrados.forEach((usuario) => {
          usuario.forEach((datos) => {
              console.log(datos);
          });
      });

      // nombre del primer usuario
      let indiceCampoNombre=0;
      let indiceCampoClave=1;
      // obtengo el nombre del primer usuario
      let nomUsr1 = registrados[0][indiceCampoNombre];
      // clave del usuario 3
      let claUsr3 = registrados[2][indiceCampoClave];

  }
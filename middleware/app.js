/*
MIDDLEWARE:  es una forma de filtrar una solicitud y una respuesta en una aplicación. Añade una pequeña capa
  entre el cliente y la aplicación ( a través de una función). Nos ayuda a generar un código más sencillo de mantener.
  Ejemplos de Middleware:
  * Limpiar las etiquetas HTML añadiendo sangrias y volviendo a dar formato al contenido
  * Notificaciones de errores y excepciones
  * Código que monitoriza el rendimiento de la aplicación
*/

// 1- SE NECESITA el módulo "connect" para hacer un Middleware --> INstalarlo !!!
var connect = require('connect'),
  http = require('http');
/*
  Arrancamos a través de connect
*/

var app = connect()
  .use(tenToSix)
  .use(days)
  .use(months)
  .use(helloWorld)
// Se pueden lanzar mas de un Middleware, los que sean

// CONTROL de ACCESO con un Middleware : solución muy segura, eliminamos el control de acceso del propio código en
 // en si ( la lógica ) y lo ponemos en el Middleware, ANTES de iniciar la lógica de la aplicación ( osea el código en si)
  // Función MIDDLEWARE; SIEMPRE debe de tener la sintaxis con "next"
  //Solo se pueda acceder a la aplicación entre las 10,00 AM y las 18,00 PM
function tenToSix(req, res, next) {
  var currentHour = new Date().getHours();
  if (currentHour < 10 || currentHour > 18) {
    res.writeHead(503, {'Content-Type': 'text/plain'});
    res.end('Norrr We are closed. Puedes volver entre las 9,00 and 10,00.');
  } else {
    next();
  }
}
function days(req, res, next) {
  var currentDay = new Date().getHours();
  if (currentDay < 12 || currentDay > 22) {
    res.writeHead(503, {'Content-Type': 'text/plain'});
    res.end('Norrr We are closed. Puedes volver entre los dias 12 y 22 de cada mes.');
  } else {
    next();
  }
}
function months(req, res, next) {
  var currentMonth = new Date().getMonth();
  if (currentMonth < 5 || currentMonth > 8) {
    res.writeHead(503, {'Content-Type': 'text/plain'});
    res.end('Norrr We are closed. Puedes volver los meses de verano');
  } else {
    next();
  }
}
function helloWorld(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hi! We are open!');
  console.log("ESTÁS DENTRO !!");
}

http.Server(app).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');


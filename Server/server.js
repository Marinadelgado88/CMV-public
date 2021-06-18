// SERVIDOR WEB o HTTP: es un programa informático que procesa una
 // aplicación del lado del servidor, realizando conexiones bidereccionales o 
 // unidireccionales y síncronas o asíncronas con el cliente, generando
 // o cediendo una respuesta en cualquier lenguaje o aplicación 
 // del lado del cliente.

 var http = require('http'),
 url = require('url');
var fs = require('fs');

// 1- Creo el servidor 
http.createServer(function(req, res) {
var pathname = url.parse(req.url).pathname;
// Si tiene esa ruta hago la respuesta (response ) que sea.
// La aplicación atenderá a diferentes solicitudes, dependiendo de cual sea la URL
if (pathname === '/') {
 // Se añade una cabecera con información; tipo de contenido, fecha, etc ,,,
 res.writeHead(200, {
   'Content-Type': 'text/html'
 });
 // 2- Para visualizar una vista en HTML (rederizar) utilizamos módulo fs
 fs.readFile('./index.html', (err, data) => {
   if(err) {
     console.log(err);
     res.end()
   } else {
     res.write(data);
     res.end();
   }
 })      
 } else if (pathname === '/blog') {
     // Se añade una cabecera con información; tipo de contenido, fecha, etc ,,,
     res.writeHead(200, {
         'Content-Type': 'text/html'
     });
     // 2- Para visualizar una vista en HTML (rederizar) utilizamos módulo fs
     fs.readFile('./blog.html', (err, data) => {
         if (err) {
             console.log(err);
             res.end()
         } else {
             res.write(data);
             res.end();
         }
     })
    } else if (pathname === '/deportes') {
        // Se añade una cabecera con información; tipo de contenido, fecha, etc ,,,
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        // 2- Para visualizar una vista en HTML (rederizar) utilizamos módulo fs
        fs.readFile('./deportes.html', (err, data) => {
            if (err) {
                console.log(err);
                res.end()
            } else {
                res.write(data);
                res.end();
            }
        })
    } else if (pathname === '/servicios') {
        // Se añade una cabecera con información; tipo de contenido, fecha, etc ,,,
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        // 2- Para visualizar una vista en HTML (rederizar) utilizamos módulo fs
        fs.readFile('./servicios.html', (err, data) => {
            if (err) {
                console.log(err);
                res.end()
            } else {
                res.write(data);
                res.end();
            }
        })
 } else if (pathname === '/contacto') {
 // Como texto plano
 res.writeHead(200, {
   'Content-Type': 'text/plain'
 });
 res.end('contacto, nos devolverá un texto plano con la información de contacto de la aplicación ')
} else if (pathname === '/historia') {
    // Como texto plano
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(' nos devolverá un texto plano con un poco de la “historia” de la programación ')
} else if (pathname === '/redirect') {
 // Un redireccionamiento
 res.writeHead(301, {
   //'Location': '/'
   //'Location': 'https://www.linkedin.com/feed/'
   'Location': 'https://www.marca.com/'
 });
 res.end();
 // para que coja los estilos
} 
else if(req.url === '/main.css') {
fs.readFile('main.css',function(err,data){
res.writeHead(200,{"Content-Type": "text/css"});
res.write(data);
res.end();
});

}
else {
   res.writeHead(404, {
   'Content-Type': 'text/plain'
 });
 res.end('Page not found\n')
}
}).listen(4000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:4000/');

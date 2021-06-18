function pares(num){
  if (num % 2===0){

return 'true';
  
}
else{
    return 'false';
}
}

const resultpares= pares(4)
console.log(resultpares)

//

function getEl (a){
    return '.btn';
}

const btnEl = getEl('.btn');

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve "x"
console.log(mySecretLetter()); // devuelve "x"


function calculador(a,b,c,d){


    return console.log('El ancho del contenido es:' +a +'px y el ancho total de la caja es: ' + b +'px.')
}

const resultado = calculador( screen.width, screen.height);
console.log('TestOne');
console.log('Variable: ' + (2 + 4 + 45));

var numero1 = 5;
var numero2 = 15;
console.log(numero1 + ' + ' + numero2 + ' = ' + (numero1 + numero2));
console.log("%d - %d = %d",numero1,numero2,numero1-numero2);
//Objetos JSON
var json = {nombre:'Sebastian',apellido:'Ch'};
console.log(json);
console.log("%j",json);
//%s muestra una cadena de caracteres
var nombre = "Sebastian";
var edad = 7;
//El objeto global console nos permite mostrar datos en la terminal
console.log("%s",nombre);
console.log(`El nombre es: ${nombre} y tiene ${edad} años`);

//Ver rutas con node
console.log(__filename);
console.log(__dirname);

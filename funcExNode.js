/*
  Funciones Globales que nos permiten llamar o ejecutar otras funciones
  despues de un intervalo de tiempo
  setTimeout    -->  Ejecuta una vez la/s Funciones
  setInterval   -->  Ejecuta varias veces la/s Funciones hasta que nosotros la finalizamos
  clearTimeout  -->  Cancela la Ejecucion de setTimeout o setInterval
  clearInterval -->  Cancela la Ejecucion de setTimeout o setInterval
*/

/*
  Ejemplos sencillo, que tambien puede ser aplicado a un servidor
  que despues de sierta cantidad de segundos al haber ejecutado una instruccion
  queremos que escriba un archivo en el servidor para realizar una copia
*/

//1ro damos una funcion que se ejecutara despues de un tiempo dado
var sId = setTimeout(function(){
  console.log("Corriendo...");
  //2do parametro, dar los numeros de milisegundos antes de ejecutar la funcion
  //la funcion se ejecutara solo una vez despues que pasen los milisegundos
},1000);

//Cancelar setTimeout, debemos concegir el id del setTimeout
//la funcion setTimeout nos retorna un objeto que tiene el id
//que podemos utilizar para cancelar el proceso
clearTimeout(sId);
/*
Si al momento de ejecutar vemos que no sucede nada, es por que al ejecutar
la funcion automaticamente pasa a clearTimeout y no visualiza la funcion
que contiene console.log
*/


var valor=0;
var sId = setInterval(function(){
  valor +=1;
  console.log(valor);
  if(valor==5){
    clearInterval(sId);
  }
},1000);

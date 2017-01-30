//Solicitamos los datos al usuario
process.stdout.write("Insert the numbers to add press (.)point to finish\n");
//variable explicita inicializada
var suma = 0;
//tomamos los datos del usuario, y se los enviamos a la funcion
//.ON es por que queremos escuchar mediante el evento data
//recordemos que "data" es un objeto
process.stdin.on("data",function(data){
  //para no tener problemas con los espacios que ingrese los usuario
  //antes o despues utilizamos TRIM()
  //verificamos si el usuario ingreso un punto, leyendo desde la terminal con STDIN
  if(data.toString().trim() =='.'){
    //si es asi finalizamos
    process.exit();
  }else{
    //si no realizamos la operacion aritmetica mediante la variable suma
    //Como vamos a recibir una cadena de caracteres simplemente parseamos
    suma+=parseInt(data.toString().trim());
  }
});
//process.on estara escuchando los eventos que estan iniciados
//en cuanto se acaben , en este caso el usuario presione .
//ejecutamos la funcion
process.on("exit",function(){
  process.stdout.write("The total is : " + suma + "\n");
});

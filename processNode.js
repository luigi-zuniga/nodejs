//Objeto global process
//1 -Nos indica donde esta instalado Node
//2 -la ruta del archivo que se ejecuto
//argv (Argumentos de la variable)
console.log(process.argv);
//Al NO contar con el metodo main en javascript, esta seria una opcion mas sencilla
//De encontrar o leer los argumentos que se le dan a un proceso
function readOpc(Opn)
{
  //index sera nuestra matriz
  var index = process.argv.indexOf(Opn);
  //si indexOf no encuentra el valor nos da un valor de -1 y retorna false
  if(index === -1)
  {
    //Si llamamos al proceso sin la banderilla -name retorna false
  //debido a que no retorna en el arreglo -name
    return false;
  }else{
    //Si no nos devulve el index +1
    return process.argv[index +1];
  }
}
//variable nombre que sera enviada a la funcion readOpc
//-name enviada a readOpc sera nuestra banderilla ubicada en la posicion 2
var name = readOpc("-name");
//name esta en la posicion 3
console.log("name is: " + name);

//escribir en la terminal con el objeto process.stdout.write (no da salto de linea)
process.stdout.write('Cual es tu Apellido:\n');
//leer desde la terminal
process.stdin.on("data",function(data){
  process.stdout.write(`El nombre completo es ${name} ${data}\n`);
  //.exit para que termine el proceso automaticamente
  process.exit();
});

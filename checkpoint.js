// Importante: No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
// código dentro de las funciones ya definidas.


function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:

  var soloenteros = [];

  for (var i = 0; i < array.length; i++) {
    if (typeof(array[i])=="number") { 

       soloenteros.push(array[i]);
    }; 
  }
 return soloenteros;

 var input = [1 ,'hola', 2];
 console.log(soloNumeros(input));
}  



function sumaTodos(array) {
  // La funcion llamada 'sumaTodos' recibe como argumento un array con dos numeros
  // y debe devolver la suma total entre todos los numeros dentro de ese rango
  // ej:
  // sumaTodos([1,3]) => 1 + 2 + 3 = 6
  // Nota: Los numeros estan ordenados de menor a mayor.

  // Tu código aca:
  
  let inicio = array[0];
  let fin = array[1];
  let suma = 0;
  
  for (let i = inicio; i <= fin; i++) {
     suma += i;
  }
  
  return suma;
  

  let numeros = [1, 2];

  console.log(sumaTodos(array));
}
 


function checkInventario(inventario, item) {
  // La funcion 'checkInventario' recibe como argumento un array de objetos llamado 'inventario' y el nombre de un item llamado 'item'
  // Cada objeto tiene una propiedad 'nombre' y 'cantidad'.
  // La funcion debe devolver la cantidad de items que hay.
  // Si el item no existe la funcion tiene que devolver 0 (cero).
  // Ej:
  // var inventario = [
  //   {
  //     nombre: 'tenedor',
  //     cantidad: 6
  //   },
  //   {
  //     nombre: 'cuchara',
  //     cantidad: 4,
  //   },
  // ]
  // checkInventario(inventario, 'tenedor') devuelve => 6

  // Tu código aca:

  for (i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === item) {
      return inventario[i].cantidad;
    } 
  }
  return 0;
}
  


function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
	
	var numeroSimetrico = "";



	for( var i = this.length -1; i >= 0; i--){
		(numeroSimetrico = numeroSimetrico + this.charAt(i));	
	  
    }
    	if(numeroSimetrico === num){ 
        return true;
      }

      return false;
    
    }
  

    

function index() {
  // Escribi una función encontraIndex en el prototipo de Arrays,
  // que recibe un elemento.
  // La function tiene que devolver el indice (index) del primer elemento que coincida con el pasado como parametro dentro del array.
  // Si el elemento se repite dentro del Array, este devuelve el indice del Primer elemento.
  // Si no existe ese elemento la funcion debe devolver -1
  // NO USAR LA FUNCION indexOf DE LOS ARREGLOS.
  // ej:
  // var numeros = [5, 6, 4, 65, 8, 4]
  // numeros.encontraIndex(4) debe devolver 2.
  // ya que el numero 4 se encuentra en la posicion 2 dentro del array.
  // numeros.encontraIndex(23) debe devolver -1 ya que ese elemento no existe en ese array.

  // Tu código aca:
 
  for (var i=0;i<array.length;i++) {
    if (array[i] === elemento) {
      return i;
    }
  }
  return -1;

var miArray = [5, 6, 4, 65, 8, 4];
var index = findIndex(miArray, 5);
return index;
  
}

function crearClasePersona() {
  // Crear una clase para construir objeto de tipo Persona.
  // el constructor debe recibir:
  // nombre (string) , edad (integer) , hobbies (array de strings) , amigos (array de objetos)
  // Esta funcion debe retonar la clase Persona.

  class Persona {
    constructor(nombre, edad, hobbies, amigos) {

      this.nombre = nombre;
      this.edad = edad;
      this.hobbies = hobbies;
      this.amigos = amigos;

    }

    addFriend(nombre, edad) {
      // el metodo addFriend recibe un string nombre y un entero edad y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // no debe retornar nada.

      const amigo = { nombre: "nombre", edad: "edad"}; 

      this.amigos.push(nombre, edad);
    }

    addHobby(hobby) {
      // este método debe agregar un hobby (hobby) al arreglo de hobbies de la persona.
      // no debe retornar nada.

      this.hobbies.push(hobby);


    }
    getFriends() {
      // Escribe una función que retorne un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // persona.getFriends() // retorna ['toni', 'Leo', 'Manu']

      const amigos = [{nombre: 'martin', edad: 31},
      {nombre: 'toni', edad: 33} ];

      const indexed = amigos.map((amigo) => amigo.nombre);

      return (indexed); 

    }

    getHobbies() {
      // Escribe una función que retorne un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() // retorna ['correr', 'dormir', 'nadar']

      const hobby = ["correr", "dormir", "nadar"];
      
      return Persona.getHobbies(hobby);

    }

    getPromedioEdad() {
      // Escribe una función que retorne el promedio de edad de los amigos de una persona
      // ej, si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() // retorna 29
      return (this.amigos.reduce((a, {edad}) => (a + edad), 0)) / this.amigos.length;

    }

  };

  return Persona;
}

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function cuantosRepetidos(array, elemento) {
  // La funcion llamada 'cuantosRepetidos' recibe como argumento un array de arrays llamado 'array' y un string llamado 'elemento'
  // Cada subarray contiene strings.
  // Debe devolver la cantidad de veces que 'elemento' se repite dentro de los subarrays.
  // Ej:
  // cuantosRepetidos([['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']], 'manzana') debe retornar 2
  // ya que 'manzana' se repite 2 veces.
  // Nota: Podes usar for loops anidados.

  // Tu código aca:

   var contador = 0;
    for (var i = 0; i < array.length; i++) {
        for(item of array[i]){
            if(item === elemento){
                contador++;
            }
        }
    }
    return contador;

console.log(cuantosRepetidos(arr, 'manzana'));

}

// No modifiques nada debajo de esta linea
//

module.exports = {
  soloNumeros,
  sumaTodos,
  checkInventario,
  numeroSimetrico,
  cuantosRepetidos,
  crearClasePersona,
  index
}

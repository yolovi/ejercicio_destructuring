/* //EMPLEADOS
// Dado el siguiente objeto:
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

// Extrae la empleada Ana con todos sus datos personales:
// {"name":"Ana", "email":"Ana@gmail.com"}

const [,persona] = empleados
console.log(persona)

// Extrae el email del empleado Luis --> Luis@gmail.com

const [luis] = empleados
console.log(luis);

const {email} = luis
console.log(email) */

//POKEMON
// Dado el siguiente objeto:
const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};

/* // Cambia el nombre de la propiedad “name” por “nombre
const { name: nombre } = pokemon

// Extrae el nombre del Pokemon
console.log(nombre);

// Extrae el tipo de Pokemon que es
const {type} = pokemon
console.log(type)

// Extrae el movimiento “Tackle”
const {moves} = pokemon
console.log(moves)

const[,movimiento] = moves
console.log(movimiento) */

// Ejercicios spread/rest

// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod",
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
};

// const sumaObjetos = {...pokemon, ...pikachu}
// console.log(sumaObjetos);

// const nuevoPokemon = {
//     pokemon1: pokemon, pokemon2: pikachu
// }

// console.log(nuevoPokemon)

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

// console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
// sumEveryOther(11, 3, 12); //26

// function sumEveryOther(...numeros) {
//     let suma = 0
//     for (let i = 0; i < numeros.length; i++){
//         suma+= numeros[i]
//         // suma = suma + numeros[i]
//     }
//     return suma
// }

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
// addOnlyNums(1, 'perro', 2, 4); //7

function addOnlyNums(...argumentos) {
  let suma = 0;
  for (const argumento of argumentos) {
    if (typeof argumento === "number") {
      suma += argumento;
    }
  }
  return suma;
}

console.log(addOnlyNums(1, "perro", 2, 4)); //7

function addOnlyNums2(...argumentos) {
  let suma = 0;
  for (const argumento of argumentos) {
    if (typeof argumento == "number") {
      suma += argumento;
    }
  }
  return suma;
}

console.log(addOnlyNums2(1, "perro", 2, 4, "2")); //7

//el operador `typeof` siempre devuelve en `string` el tipo de dato

//2
typeof "number" === "number" // ✅ true
typeof "number" == "number" // ✅ true

//"2"
typeof "2" === "string" // ✅ true
typeof "2" === "number"  // ❌ false
typeof "2" == "number"  // ❌ false (porque "string" ≠ "number")


//No importa que uses `==` o `===`, en este caso el tipo nunca será `"number"` si el valor es un `string` (aunque el string sea "2").




//------------------------------------------

function addOnlyNums3(...args) {
  let suma = 0;
  for (const arg of args) {
    if (!isNaN(arg)) {
      suma += Number(arg);
    }
  }
  return suma;
}

console.log(addOnlyNums3(1, "perro", 2, 4, "2")); // → 9


//------------------------------------------

// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

function countTheArgs(...argum) {
  return argum.length;
}
// console.log(countTheArgs("gato", "perro")); //2
// console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

function combineTwoArrays(array1, array2) {
  return [...array1, ...array2];
}

// console.log(combineTwoArrays([1, 2, 4], ["manzana", 7, 9]));

/*
//EXTRAS

// Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana

// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

console.log(maximaHoy);
console.log(maximaManana);

// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

const onlyUniques = (...data) => {
  const filtro = data.filter((value, i) => data.indexOf(value) == i);
  return filtro;
};

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));

// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

const combineAllArrays = (...combinados) => {
  return combinados.reduce((a, b) => [...a, ...b]);
};
console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]));
console.log(
  combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])
);

// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

const sumAndSquare = (...data) => {
  const ope = data.map((num) => num ** 2).reduce((a, b) => a + b);
  return ope;
};

console.log(sumAndSquare(2, 2, 3));
*/

const num = 2;
const numString = "2";

//typeof devuelve el tipo de dato como string. Por ejemplo: "number" y no evalúa, solo nos devuelve esta información. 
// == evalúa solo el valor
if (typeof num == "number") {  
  console.log(num + "es un number"); //entra aquí
} else {
  console.log("prueba otra vez");
}

// == evalúa solo el valor no el tipo de dato
if (typeof numString == "number") {   //
  console.log(numString + "is a number");
} else {
  console.log("prueba otra vez"); // entra aquí
}



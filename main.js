
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
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

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
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

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
    let suma = 0
    for (const argumento of argumentos) {
        if (typeof (argumento) === "number") {
            suma += argumento
        }
    }
    return suma
}

console.log(addOnlyNums(1, 'perro', 2, 4)); //7



// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

function countTheArgs(...argum){
    return argum.length
}
console.log(countTheArgs('gato', 'perro')); //2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); //4


// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

function combineTwoArrays(array1, array2){
    return [...array1, ...array2]
}

console.log(combineTwoArrays([1,2,4], ["manzana", 7, 9]))




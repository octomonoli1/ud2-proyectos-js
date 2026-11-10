//1. Crea una lista de alumnos. (lista == array)
let alumnos = [
    "Juan Pérez",
    "Antonio Rodríguez",
    "Ana Santos",
    "Sara Gómez",
    "Pedro Nuñez"
];

console.log("Array original");
console.table(alumnos);

//En una lista importa el orden. ¿Donde meter/sacar un elemento?
//Al final
//Al ppio
//En medio

//1.a. Introduce "Sofia López" al final
alumnos.push("Sofía López");

//1.b. Introduce "Hugo González" al principio
alumnos.unshift("Hugo González");

//1.c. Introduce "Victor Roldán" en medio
alumnos.splice(3,0,"Victor Roldán");

console.log("Array con elementos añadidos");
console.table(alumnos);

//1.d. Eliminar el primero de la lista
alumnos.shift();

//1.e. Elimina el ultimo elemento de la lsita
alumnos.pop();

//1.f. Elimina en una posicion intermedia
alumnos.splice(3,1);

console.log("Array con elementos eliminados");
console.table(alumnos);

//2. Crea un conjunto de alumnos
//Características SET: 
// No importa orden. 
// No hay duplicados

let set_alumnos = new Set([
    "Juan Pérez",
    "Antonio Rodríguez",
    "Ana Santos",
    "Sara Gomez",
    "Pedro Nuñez"
]);

console.table(set_alumnos);

//2.a. Añado un nuevo alumno "Fran Sanchez"
set_alumnos.add("Fran Sanchez");
set_alumnos.add("Fran Sanchez");
set_alumnos.add("Fran Sanchez");
set_alumnos.add("Fran Sanchez");
set_alumnos.add("Fran Sanchez");

//2.b. Elimino al alumno "Sara Gomez"
set_alumnos.delete("Sara Gomez");

//2.c. Comprobar existencia
console.log(set_alumnos.has("Federico Perez"));

//2.c. Tamaño del conjunto
console.log(set_alumnos.size);

//3. Elimina los duplicados de la siguiente lista de la compra
// Huevo
// Leche
// Carne
// Cereales
// Leche

let productos = ["Huevo", "Leche","Carne","Cereales","Leche"];
console.table(productos);

let set_productos = new Set(productos);

productos = [...set_productos];

console.table(productos);

//4. Crea un listin telefonico
let listin = new Map();

listin.set("Juan Perez","600123456");
listin.set("Dolores Rodriguez", "611222333");
listin.set("Sara Gomez","700444564");

console.table(listin);

//4.a. Accedemos al valor de la clave "Sara Gomez"
console.log("El telefono de sara es: " + listin.get("Sara Gomez"));

//4.b. Eliminamos los datos de "Dolores Rodriguez"
listin.delete("Dolores Rodriguez");

//4.c. ¿Como obtengo un conjunto de claves?
let claves = listin.keys();

//4.d. ¿Y de valores?
let values = listin.values();
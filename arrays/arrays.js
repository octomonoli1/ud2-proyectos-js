//EJ1. Playas favoritas
//Creación directa
let playas = ["Chipiona","Rota","Matalascañas"];
console.table(playas);

//Creación instancia + asignacion por indices
let playas2 = [];
playas2[0] = "Chipiona";
playas2[1] = "Rota";
playas2[2] = "Matalascañas";
console.table(playas2);

//Creación instancia + asignación/eliminación por método
let playas3 = [];
playas3.push("Chipiona");
playas3.push("Rota");
playas3.push("Matalascañas");
playas3.pop(); //Quita el ultimo
playas3.shift(); //Quita el primero
playas3.push("Sanlucar");
playas3.push("Mazagon");
playas3.push("Fuengirola");
playas3.push("Roquetas");
playas3.splice(2,1); //Elimina empezando en 2 (pos) la 1 (cant) elemento
playas3[3] = "Playa de los muertos"; //Sustituir¡
//Convierte de array en string usando el delimitador por parametro
let playas_str = playas3.join(", ");
console.log(playas_str);
//Convierte de string a array buscando el delimitador por parametro
let playas_array = playas_str.split(", ");
console.table(playas_array);

let nombre_playa = "Fuengirola";
console.log(`La posicion de ${nombre_playa} es ${playas_array.indexOf(nombre_playa)}`);

//Playas ordenadas alfabeticamente
playas_array.sort();
console.table(playas_array);

//Ordenadas alreves
playas_array.reverse();
console.table(playas_array);

//Rellenar array con elementos
let ejemplos_numeros = new Array(10);
ejemplos_numeros.fill(8);
console.table(ejemplos_numeros);

//Ejercicio 2
//Realiza un array que almacene las notas de diez alumnos de clase. 
// Pinta la menor y la mayor de todas. 
let notas = new Array(10);
console.log(notas);
console.log("HOLA");
notas.fill(0);
notas.push(10);
notas.pop()
notas.pop()
notas.pop();
console.table(notas);


//for clasico
for(let i  = 0 ; i < notas.length; i++){
    notas[i] = (Math.random()*10).toFixed(2);
}

//for each
/*for(let nota of notas){
    nota = (Math.random()*10).toFixed(2);
}*/


console.log(notas);

notas.sort();
console.log("Nota mayor: " + Math.max(...notas));
console.log("Nota menor: " + Math.min(...notas));

let datos_personales = ["Jose Agustin" ,"20"];
datos_personales.reverse();

function saluda(nombre, edad){
    console.log(`Hola ${nombre} tienes ${edad} años`);
}

saluda(...datos_personales);


let numeros = [0,1,26,78,10,9,8,4];
console.log("El mayor numero es " + Math.max(...numeros));

//Ejercicio 3. Introduce el numero de alumnos de clase.
//Almacena en el array edades todas las edades (introducidas por prompt)
//Muestra la media, maxima y minima de todas ellas.

let edades = new Array(5);
console.log(edades.length);

for (let i = 0 ; i < 5 ; i++){
    edades[i] = parseInt(window.prompt(`Introduce la edad ${i}`));
}


let media = 0;
//Recorrer array alrevés (Usando copia).
for(edad of [...edades].reverse()){
    media += edad;
}

console.log("La edad máxima es " + Math.max(...edades));
console.log("La edad mínima es " + Math.min(...edades));
console.log("La edad media es " + media / edades.length);

//Ejercicio 3
const edades_compa = [18,19,20,20,20,19,18,20,17,35, 16, 41, 56, 19, 20];

let media_compa = 0;
let num_edades = 0;
for(edad of edades_compa){
    if(edad >18 && edad < 50){
        media_compa += edad;
        num_edades++;
    }
}

console.log("La edad media es : " + Math.floor(media_compa / num_edades) );


//Ejercicio 4: Eliminar el color verde de un array que almacena cinco colores cualesquiera, entre 
//ellos debe estar el verde. 

//OPC 1
const colores = ["azul", "rojo", "amarillo","verde","rosa","negro","blanco"];

for(let i = 0 ; i < colores.length ; i++){
    if(colores[i] === "verde"){
        colores.splice(i,1);
    }
}

//OPC 2
colores.splice(colores.indexOf("verde"), 1);
console.table(colores);

//Supon un array ordenado alfabéticamente de frutas. (Aguacate, Banana, Chirimoya, 
//Dátil, Fresa, Guayaba, Kiwi, Limón, Naranja, Pera, Sandía, Uva, Yuca). Introduce el 
//melón de forma que el orden se mantenga usando splice. 
const frutas = ["Aguacate", "Banana", "Chirimoya", "Dátil", "Fresa", "Guayaba", "Kiwi", "Limón", "Naranja", "Pera", "Sandía", "Uva", "Yuca"];
frutas.splice(frutas.indexOf("Naranja"), 0, "Melón");

frutas.push("Melocotón");
frutas.sort();

console.table(frutas);


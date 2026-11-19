let colores = ["azul","verde","amarillo","rojo"];

//1. Recorrer un array y mostrar el valor
/*for(let i = 0; i < colores.length; i++){
    console.log(`Color ${i+1}: ${colores[i]}`);
}*/

/*for(let color of colores){
    console.log(`Color  : ${color}`);
}*/

console.log("Pintamos el array original: ");
colores.forEach((color, idx)=> console.log(`Color  ${idx+1}: ${color}`));

//2. Recorrer un array mostrar las posiciones pares
/*for(let i = 0; i < colores.length; i++){
    if(i%2 == 0){
        console.log(`Color ${i+1}: ${colores[i]}`);
    }
}*/

console.log("Pintamos las posiciones: ");
colores.filter((color,idx) => idx%2==0)
    .forEach((color, idx)=> console.log(`Color  ${idx+1}: ${color}`));

//3. Modificar el valor del array a mayúsculas
/*for(let i = 0 ; i < colores.length; i++) {
    colores[i] = colores[i].toUpperCase();
}*/

console.log("Array en mayúsculas: ");
colores.map((color)=> color.toUpperCase())
    .forEach((color, idx)=> console.log(`Color  ${idx+1}: ${color}`));

let numeros = [1,6,8,9,12,16,5];

//1. Pintarlo por pantalla (foreach)
//2. Pintar solo los mayor que 7
//3. Almacenar en numeros el doble de cada uno
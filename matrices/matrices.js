let f1 = [1,2,3];
let f2 = [4,5,6];
let f3 = [7,8,9];

let m = [f1,f2,f3];

console.log(m);

let m2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(m2);

//Nomenclatura de acceso a matrices es nombre_matriz[filas][columnas]
console.log("Pintamos el 5: " + m2[1][1]);
console.log("Pintamos el 9: " + m2[2][2]);
console.log("Pintamos el 6: " + m2[1][2]);

//Pintar el doble de la matriz 2xm2

for(let i = 0; i < m2.length; i++){
    for(let j = 0; j < m2[i].length;  j++){
        m2[i][j] = 2*m2[i][j];
    }
}

console.log(m2);

//Calcular la media de los valores de la matriz
let media = 0; 
let num_elem = 0; 
for(let fila of m2){
    for(let num of fila){
        media += num;
        num_elem ++;
    }
}

console.log("El valor medio de la matriz es: " + media/num_elem);

//Suma 5 a cada valor de la matriz
for(let i = 0; i < m2.length; i++){
    for(let j = 0 ; j < m2[i].length; j++){
        m2[i][j] += 5;
    }
}

console.table(m2);


let matriz_original = [
    [0,1],
    [2,3]
];

function traspuesta(matriz){
    let result = [];
    for(let i = 0 ; i < matriz.length; i++){
        let fila_nueva = [];
        for(let j = 0; j < matriz[i].length; j++){
            fila_nueva.push(matriz[j][i]);
        }
        result.push(fila_nueva);
    }

    return result;
}

console.table(matriz_original);
console.table(traspuesta(matriz_original));

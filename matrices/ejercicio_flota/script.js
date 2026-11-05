const TAM = 15;
const BARCOS = 5;
const tablero = new Array(TAM);
let aciertos = 0;
let casillas_jugadas = [];

//Inicializamos el tablero a 0 (sin usar)
for(let i = 0 ; i < tablero.length ; i++){
    tablero[i] = new Array(TAM).fill(0);
}

//Añadimos los barcos de forma aleatoria
let colocados = 0;
do{
    const fila_aleat = Math.floor(Math.random()*TAM);
    const col_aleat = Math.floor(Math.random()*TAM);
    if(tablero[fila_aleat][col_aleat]==0){
        tablero[fila_aleat][col_aleat] = 1;
        colocados++;
    }
}while(colocados < 5);
console.table(tablero);

//Pintamos el tablero oculto
const oceano = document.getElementById("tablero");
for(let i = 0 ; i < tablero.length; i ++){
    for(let j = 0 ; j < tablero[i].length; j++){
        const hueco = document.createElement("div");
        hueco.classList.add("hueco");
        hueco.id = "hueco"+i+"_"+j;
        hueco.addEventListener("click", disparo_click);
        oceano.appendChild(hueco);
    }
}

//Funcionalidad de disparo
function dispara(){

    //Solicita fila
    let fila = 0;
    do{
        fila = window.prompt(`Introduce la fila (${0} - ${TAM-1})`);
        if(fila < 0 || fila > 14){
            window.alert("Error. La fila debe estar en rango");
        }
    }while(fila < 0 || fila > 14);

    //Solicita columna
    let col = 0;
    do{
        col = window.prompt(`Introduce la columna (${0} - ${TAM-1})`);
        if(col < 0 || col > 14){
            window.alert("Error. La columna debe estar en rango");
        }
    }while(col < 0 || col > 14);

    //Descubre casilla rojo (barco) o azul (agua) solo en casillas no jugadas
    if(!casillas_jugadas.includes(`${fila}_${col}`)){
        if(tablero[fila][col] == 1){
            document.getElementById("hueco"+fila+"_"+col).classList.add("hundido");
            aciertos++;
        }else{
            document.getElementById("hueco"+fila+"_"+col).classList.add("agua");
        }

        //Independientemente de si acierta o no se marca elegido a verde
        document.getElementById("hueco"+fila+"_"+col).classList.add("elegido");
        casillas_jugadas.push(`${fila}_${col}`);
    }else{
        window.alert("Error! No puedes seleccionar una casilla ya jugada");
    }
    

    //Comprueba fin juego
    if(aciertos >= 2){
        window.alert("ENHORABUENA! Has ganado el juego");
        document.getElementById("disparar").disabled = true;

        //Revelamos el tablero completo
        for(let i = 0 ; i < tablero.length; i ++){
            for(let j = 0 ; j < tablero[i].length; j++){
                if(tablero[i][j]==1){
                    document.getElementById("hueco"+i+"_"+j).classList.add("hundido");
                }else{
                    document.getElementById("hueco"+i+"_"+j).classList.add("agua");
                }
            }
        }
    }
}

//Disparo click
function disparo_click(element){
    console.log(element.currentTarget);
}

//Boton para reiniciar el juego
function reiniciar(){
    window.location.reload();
}
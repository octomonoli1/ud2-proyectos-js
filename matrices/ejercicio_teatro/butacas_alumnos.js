const N_FILAS = 10;
const N_COLS = 15;
const N_BUTACAS = 5;

const teatro = new Array(N_FILAS);

for(let i = 0 ; i < N_FILAS ; i++){
    teatro[i] = new Array(N_COLS).fill(0);
}

let butacas = 0;

do{
    const filas_aleat = Math.floor(Math.random()*N_FILAS);
    const cols_aleat = Math.floor(Math.random()*N_COLS);
    if(teatro[filas_aleat][cols_aleat] === 0){
        teatro[filas_aleat][cols_aleat] = 1;
        butacas++;
    }
}while(butacas < N_BUTACAS);

console.table(teatro);

const sala = document.getElementById("sala"); //Obtiene la sala

for(let filas of teatro){
    for(let butaca of filas){
        const cuadro_asiento = document.createElement("div");
        cuadro_asiento.classList.add("butaca");
        if(butaca === 1){
            cuadro_asiento.classList.add("ocupada");
        }
        sala.appendChild(cuadro_asiento);
    }
}
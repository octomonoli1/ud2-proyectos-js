const notas = [];
let salir = false;

do{

    //Solicitamos la opción al usuario
    const opc = window.prompt("Gestión de notas. Elige una opción:"
        + "\nA. Introduce una nota al principio"
        + "\nB. Introducir una nota al final"
        + "\nC. Subir todas las notas X puntos"
        + "\nD. Calcular estadísticas actuales"
        + "\nE. Vaciar notas"
        + "\nF. Inicializar N notas a valor X"
        + "\nG. Eliminar la primera nota"
        + "\nH. Eliminar la segunda nota"
        + "\nI. Establecer a 0 todos los suspensos"
        + "\nJ. Sustituir una nota por otra"
        + "\nK. Añadir una nota en una posición determinada"
        + "\nL. Contar el número de suspensos"
        + "\nM. Salir"
    ).toUpperCase();

    //Comprobamos su valor
    switch(opc){
        case 'A':
            notas.unshift(introduce_nota());
            break;
        case 'B':
            notas.push(introduce_nota());
            break;
        case 'C':
            const subida = parseFloat(window.prompt("¿Cuantos puntos vas a subir?"));
            subir_notas(subida);
            break;
        case 'D':
            mostrar_estadisticas();
            break;
        case 'E':
            notas.length = 0;
            break;
        case 'F':
            notas.length = parseInt(prompt("Introduce el numero de notas"));
            notas.fill(parseFloat(prompt("Introduce el valor inicial")));
            break;
        case 'G':
            notas.shift();
            break;
        case 'H':
            notas.splice(1,1);
            break;
        case 'I':
            suspensos_a_cero();
            break;
        case 'J':
            const nota_origen = introduce_nota();
            const nota_destino = introduce_nota();
            sustituye_notas(nota_origen, nota_destino);
            break;
        case 'K':
            const nota = introduce_nota();
            let pos;
            do{
                pos = window.prompt("Introduce la posición");
                if(pos < 0 || pos > notas.length){
                    console.error("La posicion debe estar dentro del array");
                }
            }while(pos < 0 || pos > notas.length);
            notas.splice(pos, 0, nota);
            break;
        case 'L':
            console.log(`Hay ${contar_suspensos()} suspensos`);
            break;
        case 'M':
            salir = true;
            break;
        case 'N':
            inicializa_aleatorio();
            break;
        default:
            console.error("Introduce una opción correcta");
            break;
    }

    console.table(notas);

}while(!salir);

function introduce_nota(){
    let nota;

    do{
        nota = parseFloat(prompt("Introduce una nota: "));
        if(nota < 0 || nota > 10){
            console.error("La nota debe estar entre 0 y 10");
        }
    }while(nota < 0 || nota > 10);

    return nota;
}

function mostrar_estadisticas(){
    let max = -Infinity;
    let min = Infinity;
    let media = 0;
    
    for(let nota of notas){
        max = nota>max? nota: max;
        min = nota<min? nota: min;
        media+=nota;
    }

    console.log(`La nota maxima es ${max}`);
    console.log(`La nota minima es ${min}`);
    console.log(`La nota media es ${media/notas.length}`);
    console.log(`La moda es: ${calcular_moda()}`);
}

function subir_notas(subida){
    for(let i = 0 ; i < notas.length; i++){
        notas[i] += subida;
        notas[i] = (notas[i]>10)? 10: notas[i];
    }
}

function suspensos_a_cero(){
    for (let i = 0 ; i < notas.length; i++){
        notas[i] = notas[i] < 5 ? 0 : notas[i];
    }
}

function sustituye_notas(nota_origen, nota_destino){
    for(let i = 0 ; i < notas.length ; i++){
        notas[i] = notas[i] === nota_origen ? nota_destino: notas[i];
    }
}

function contar_suspensos(){
    let num_suspensos = 0;
    for(let nota of notas){
        num_suspensos += nota<5? 1: 0;
    }

    return num_suspensos;
}

function calcular_moda(){
    let moda;
    let mapa = new Map();

    for(let nota of notas){
        if(mapa.has(nota)){
            let repeticiones = mapa.get(nota);
            repeticiones++;
            mapa.set(nota, repeticiones);
        }else{
            mapa.set(nota, 1);
        }
    }

    let max_rep = 0;
    for(const nota of mapa.keys()){
        if(max_rep < mapa.get(nota)){
            max_rep = mapa.get(nota);
            moda = nota;
        }
    }

    return moda;
}

function inicializa_aleatorio(){
    notas.length = 0;
    let tam_aleat = Math.floor(Math.random()*20);
    for(let i = 0 ; i < tam_aleat; i++){
        let nota_aleat = Math.floor(Math.random()*10);
        notas.push(nota_aleat);
    }
}
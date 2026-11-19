class Libro{

    constructor(titulo, autor, ejemplares){
        this.titulo = titulo;
        this.autor = autor;
        this.ejemplares = ejemplares;
    }

    toString(){
        return "Titulo: " + this.titulo + "\nAutor: " + this.autor + "\nEjemplares: " + this.ejemplares; 
    }

}

let biblioteca = new Map();
let salir = false;
do{

    //Solicitamos la opción al usuario
    const opc = window.prompt("Gestión de biblioteca. Elige una opción:"
        + "\nA. Añadir un libro"
        + "\nB. Eliminar un libro"
        + "\nC. Consultar un libro"
        + "\nD. Mostrar catálogo"
        + "\nE. Modificar ejemplares"
        + "\nF. Buscar libros de autor"
        + "\nG. Prestar un libro"
        + "\nH. Devolver un libro"
        + "\nI. Mostrar estadísticas"
        + "\nJ. Vaciar catálogo"
        + "\nK. Salir"
    ).toUpperCase();

    //Comprobamos su valor
    switch(opc){
        case 'A':
            let isbn_nuevo = windowp.prompt("Introduce el ISBN");
            let nombre = windowp.prompt("Introduce el titulo");
            let autor = windowp.prompt("Introduce el autor");
            let ejemplares = parseInt(windowp.prompt("Introduce el numero de ejmplares"));
            biblioteca.set(isbn_nuevo, new Libro(nombre, autor, ejemplares));
            break;
        case 'B':
            let isbn_eliminar = windowp.prompt("Introduce el ISBN");
            if(biblioteca.has(isbn_eliminar)){
                biblioteca.delete(isbn_eliminar);
            }else{
                console.log("El libro introducido no existe");
            }
            break;
        case 'C':
            let isbn_cosnultar = windowp.prompt("Introduce el ISBN");
            if(biblioteca.has(isbn_cosnultar)){
                console.log("Libro cosnultado: " + biblioteca.get(isbn_cosnultar).toString());
            }else{
                console.log("El libro introducido no existe");
            }
            break;
        case 'D':
            imprimeBiblioteca();
            break;
        case 'E':
            let isbn_modificar = windowp.prompt("Introduce el ISBN");
            let cantidad_nueva = parseInt(windowp.prompt("Introduce el numero de ejmplares"));
            if(biblioteca.has(isbn_modificar)){
                biblioteca.get(isbn_modificar).ejemplares = cantidad_nueva;
            }else{
                console.log("El libro introducido no existe");
            }
            break;
        case 'F':
            let autor_buscar = windowp.prompt("Introduce el autor");
            for(let isbn of biblioteca.keys()){
                if(biblioteca.get(isbn).autor === autor_buscar){
                    console.log(biblioteca.get(isbn).toString());
                }
            }
            break;
        case 'G':
            let isbn_prestar = windowp.prompt("Introduce el ISBN");
            if(biblioteca.has(isbn_prestar)){
                biblioteca.get(isbn_prestar).ejemplares = biblioteca.get(isbn_prestar).ejemplares - 1;
            }else{
                console.log("El libro introducido no existe");
            }
            break;
        case 'H':
            let isbn_devolver = windowp.prompt("Introduce el ISBN");
            if(biblioteca.has(isbn_devolver)){
                biblioteca.get(isbn_devolver).ejemplares = biblioteca.get(isbn_devolver).ejemplares + 1;
            }else{
                console.log("El libro introducido no existe");
            }
            break;
        case 'I':
            console.log(`Hay ${biblioteca.size} libros`);
            console.log(`Hay ${calcular_ejemplares()} ejemplares`);
            console.log(`El libro mas repetido es: ${libro_mas_ejemplares()}`);
            break;
        case 'J':
            
            break;
        case 'K':
            salir = true;
            break;
        default:
            console.error("Introduce una opción correcta");
            break;
    }

}while(!salir);

function imprimeBiblioteca(){
    for(let isbn of biblioteca.keys()){
        console.log(biblioteca.get(isbn).toString());
    }
}


function calcular_ejemplares(){
    let total = 0;

    for(let isbn of biblioteca.keys()){
        total+=biblioteca.get(isbn).ejemplares;
    }

    return total;
}
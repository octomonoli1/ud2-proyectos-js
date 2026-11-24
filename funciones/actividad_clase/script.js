class Alumno{

    constructor(nombre, apellidos, fecha_nac, localidad, sexo, nota_media){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fecha_nac = fecha_nac;
        this.localidad = localidad;
        this.sexo = sexo;
        this.nota_media = nota_media;
    }

    toString(){
        return `Nombre: ${this.nombre} ${this.apellidos}, 
                Localidad = ${this.localidad}, 
                Fecha de nacimiento: ${this.fecha_nac}, 
                Sexo: ${this.sexo}, 
                Nota: ${this.nota_media}`;
    }

    getIniciales(){
        return `${this.nombre.charAt(0)}${this.apellidos.charAt(0)}`;
    }

}

const a1 = new Alumno("Paco", "Díaz Jiménez", "12-12-2000", "Mairena del Alcor", "Hombre", 8.8);
const a2 = new Alumno("Susana", "López Santos", "08-02-2004", "Viso del Alcor", "Mujer", 9.2);
const a3 = new Alumno("Carlos", "García Pérez", "15-06-2002", "Sevilla", "Hombre", 7.5);
const a4 = new Alumno("María", "Fernández Ruiz", "23-09-2003", "Alcalá de Guadaíra", "Mujer", 8.6);
const a5 = new Alumno("Antonio", "Martínez Romero", "04-03-2001", "Carmona", "Hombre", 6.9);
const a6 = new Alumno("Lucía", "Sánchez Moreno", "19-11-2004", "Dos Hermanas", "Mujer", 9.5);
const a7 = new Alumno("David", "Torres Castillo", "30-01-2002", "Coria del Río", "Hombre", 7.8);
const a8 = new Alumno("Elena", "Navarro Díaz", "11-07-2003", "Utrera", "Mujer", 8.9);
const a9 = new Alumno("Javier", "Romero Flores", "27-05-2000", "La Rinconada", "Hombre", 6.5);
const a10 = new Alumno("Carmen", "Jiménez Vega", "06-12-2004", "Mairena del Aljarafe", "Mujer", 9.7);
const a11 = new Alumno("Manuel", "Ortega Molina", "14-04-2001", "Écija", "Hombre", 7.2);
const a12 = new Alumno("Paula", "Castro Herrera", "21-08-2002", "Lebrija", "Mujer", 8.4);
const a13 = new Alumno("Sergio", "Delgado Reyes", "09-10-2003", "Marchena", "Hombre", 5.9);
const a14 = new Alumno("Laura", "Méndez Gil", "17-02-2004", "Osuna", "Mujer", 9.1);
const a15 = new Alumno("Álvaro", "Vázquez León", "25-06-2000", "Arahal", "Hombre", 7.7);
const a16 = new Alumno("Marta", "Cabrera Ortiz", "03-09-2002", "Bormujos", "Mujer", 8.2);
const a17 = new Alumno("Adrián", "Flores Medina", "12-01-2003", "Camas", "Hombre", 6.8);
const a18 = new Alumno("Nuria", "Reyes Aguilar", "28-07-2001", "San Juan de Aznalfarache", "Mujer", 9.4);
const a19 = new Alumno("Daniel", "Morales Cruz", "16-05-2004", "Tomares", "Hombre", 7.9);
const a20 = new Alumno("Irene", "Herrera Domínguez", "22-03-2002", "Gelves", "Mujer", 8.7);

const alumnos = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20];

const cuerpo = document.getElementById("cuerpo");

alumnos.forEach(alumno =>  {
    const tr = document.createElement("tr");
    cuerpo.appendChild(tr);

    Object.values(alumno).forEach(dato =>  {
        const td = document.createElement("td");
        td.textContent = dato;
        tr.appendChild(td);
    }); 
});

function imprimir_alumnos(){
    alumnos.forEach(alumno => console.log(alumno.toString()));
}

function imprimir_aprobados(){
    alumnos
        .filter(alumno => alumno.nota_media>=9)
        .forEach(alumno => console.log(alumno.toString()));
}

function calcula_nota_media(){
    let total = alumnos
        .map(alumno=>alumno.nota_media)
        .reduce((acum, nota)=> acum + nota);
        
    console.log(`La nota media es ${(total/alumnos.length).toFixed(2)}`);
}

function muestra_mejor_expediente(){
    // Opción A
    const mejor_alumno = alumnos.reduce((mejor, alumno) => 
        alumno.nota_media > mejor.nota_media? alumno: mejor);
    console.log(`El alumno con mejor nota es: ${mejor_alumno.toString()}`);
    
    //Opción B
    const alumnos_ordenados = alumnos.sort((alum1, alum2)=> alum2.nota_media - alum1.nota_media);
    console.log(`El alumno con mejor nota es: ${alumnos_ordenados[0]}`);
}

function mostrar_iniciales(){
    //Opción A
    alumnos
        .map(alumno => alumno.nombre.charAt(0) + alumno.apellidos.charAt(0))
        .forEach(inicial => console.log(inicial));

    //Opción B
    alumnos.forEach(alumno => console.log(alumno.getIniciales()));
}

/*for(let alumno of alumnos){

    const tr = document.createElement("tr");

    const tdnombre = document.createElement("td");
    tdnombre.textContent = alumno.nombre;

    const tdapellidos = document.createElement("td");
    tdapellidos.textContent = alumno.apellidos;

    const tdfecha_nac = document.createElement("td");
    tdfecha_nac.textContent = alumno.fecha_nac;

    const tdlocalidad = document.createElement("td")
    tdlocalidad.textContent = alumno.localidad;

    const tdsexo = document.createElement("td")
    tdsexo.textContent = alumno.sexo;
    
    const tdnota_media = document.createElement("td")
    tdnota_media.textContent = alumno.nota_media;

    tr.appendChild(tdnombre);
    tr.appendChild(tdapellidos);
    tr.appendChild(tdfecha_nac);
    tr.appendChild(tdlocalidad);
    tr.appendChild(tdsexo);
    tr.appendChild(tdnota_media);

    cuerpo.appendChild(tr);
}*/
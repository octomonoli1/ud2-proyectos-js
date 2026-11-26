function inicializar_datos(){
    coches = [
        new Coche("SEAT", "León", "red", 1498, 150, "1234-BBC", 28500),
        new Coche("Volkswagen", "Golf", "white", 1498, 150, "2345-CCD", 32000),
        new Coche("BMW", "Serie 1", "black", 1998, 150, "3456-DDF", 38500),
        new Coche("Audi", "A3", "gray", 1498, 150, "4567-EEG", 36500),
        new Coche("Renault", "Clio", "blue", 1199, 115, "5678-FFH", 18900),
        new Coche("Peugeot", "208", "yellow", 1199, 100, "6789-GGJ", 21000),
        new Coche("Toyota", "Corolla", "white", 1798, 140, "7890-HHK", 32300),
        new Coche("Ford", "Focus", "blue", 999, 125, "8901-JJL", 26500),
        new Coche("Mercedes-Benz", "Clase A", "black", 1332, 163, "9012-KKM", 41000),
        new Coche("Hyundai", "Tucson", "gray", 1598, 150, "1122-LLN", 35500),
        new Coche("Kia", "Sportage", "red", 1598, 150, "2233-MMN", 34000),
        new Coche("Nissan", "Qashqai", "white", 1332, 158, "3344-NNP", 33000),
        new Coche("Audi", "RS3", "green", 2480, 400, "4455-PPQ", 75000),
        new Coche("BMW", "M3", "blue", 2993, 510, "5566-QQR", 95000),
        new Coche("Volkswagen", "Polo", "gray", 999, 95, "6677-RRS", 19500),
        new Coche("Dacia", "Sandero", "white", 999, 100, "7788-SST", 14500),
        new Coche("Honda", "Civic", "black", 1993, 184, "8899-TTV", 36500),
        new Coche("Mazda", "3", "red", 1998, 186, "9900-VVW", 31000),
        new Coche("Cupra", "Formentor", "gray", 1984, 310, "1010-WWX", 48000),
        new Coche("Toyota", "GR Yaris", "white", 1618, 280, "2020-XXY", 48500)
    ];
}

function imprimir_tabla(coches){
    const cuerpo_tabla = document.getElementById("cuerpo-tabla-coches");
    vaciar_tabla();
    coches.forEach(coche => {
        const tr = document.createElement("tr");
        cuerpo_tabla.appendChild(tr);

        Object.values(coche).forEach((dato,idx) => {
            const td = document.createElement("td");
            if(idx == 2){
                td.style.backgroundColor = dato;
            }else{
                td.textContent = dato;
            }
            tr.appendChild(td);
        });
    });
}

function buscar_coche(coches){
    const marca = document.getElementById("input-busqueda").value;
    const filtro = coches.filter(coche => coche.marca.trim().toUpperCase().includes(marca.toUpperCase()));
    if(filtro.length == 0){
        const cuerpo_tabla = document.getElementById("cuerpo-tabla-coches");
        const span = document.createElement("span");
        span.textContent = "No hay datos";
        cuerpo_tabla.appendChild(span);

    }
    imprimir_tabla(filtro);
}

function vaciar_tabla(){
    const cuerpo_tabla = document.getElementById("cuerpo-tabla-coches");
    cuerpo_tabla.textContent = "";
}

function coche_caro(coches){
    let mas_caro = [];
    mas_caro.push(coches.slice().sort((c1, c2) => c2.precio - c1.precio)[0]);
    imprimir_tabla(mas_caro);
}

function coche_barato(coches){
    let mas_barato = [];
    mas_barato.push(coches.slice().sort((c1, c2) => c1.precio - c2.precio)[0]);
    imprimir_tabla(mas_barato);
}
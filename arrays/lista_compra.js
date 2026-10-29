const productos = ["Pan","Huevo","Leche", "Galletas","Zumo"];
const form = document.getElementById("form");
const lista = window.document.getElementById("lista_compra");

for(let producto of productos){
    mostrar_producto(producto);
}

function mostrar_producto(producto){
    const li = window.document.createElement("li");
    li.textContent = producto;
    li.appendChild(addFuncBorrado(li, producto));
    lista.appendChild(li);
}

function addFuncBorrado(li, producto){
    const borrar = window.document.createElement("button");
    borrar.textContent = "Borrar";
    borrar.addEventListener("click", () => {
        productos.splice(productos.indexOf(producto),1);
        lista.removeChild(li);
    });

    return borrar;
}

function addElement(event){

    event.preventDefault();

    const producto = document.getElementById("product")
    productos.push(producto.value);
    mostrar_producto(producto.value);
    producto.value = "";
}
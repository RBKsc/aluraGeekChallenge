import { conexionApi } from "./conexionApi.js";
const lista =document.querySelector("[data-lista]");

export default function crearCard(imagen, nombre, descripcion){
    const producto =document.createElement("ul");
    producto.className="productos";
    producto.innerHTML=`<img class= "productos__item" src="${imagen}">
    <h3>${nombre}<h3>
    <div>
    <p>${descripcion}<p>
    <div>`
    

    return producto

}

async function obtenerProducto(){
    try {
        const listaProd= await conexionApi.listaProductos()

        listaProd.forEach(producto=>{
            lista.appendChild (crearCard(producto.imagen, producto.nombre, producto.descripcion))})
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión</h2>`
    }
}

obtenerProducto();
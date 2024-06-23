import { conexionApi } from "./conexionApi.js";

const lista =document.querySelector("[data-lista]");


export default function crearCard(imagen, nombre, descripcion, id){
    const producto =document.createElement("ul");
    producto.className="productos";
    producto.innerHTML=`<img class= "productos__item" src="${imagen}">
    <h3>${nombre}<h3>
    <div>
    <p>${descripcion}<p>
    <img class="icono-eliminar" src="./imagenes/basura.png" data-id='${id}'>
    <div>`
  
    const btnExcluir = producto.querySelector(".icono-eliminar");
    btnExcluir.addEventListener("click", async () => {
      const confirmacion = confirm(
        "El producto sera eliminado. ¿Desea continuar?"
      );
      if (confirmacion) {
        const resultado = await conexionApi.eliminarProducto(id);
        if (resultado) {
          producto.remove();
        }
      }
    });
  
    return producto;

}

async function obtenerProducto(){
    try {
        const listaProd= await conexionApi.listaProductos()

        listaProd.forEach(producto=>{
            lista.appendChild (crearCard(producto.imagen, producto.nombre, producto.descripcion, producto.id))})
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión</h2>`
    }
}

obtenerProducto();
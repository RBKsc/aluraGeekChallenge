import { conexionApi } from "./conexionApi.js";

const form= document.querySelector("[data-formulario]");

async function crearProd (evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector ("[data-price]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try{
        await conexionApi.crearNew(nombre, precio, imagen);

        window.location.href= "./index.html"
    }catch(e){
        alert(e)
    }
}

form.addEventListener("submit", evento=> crearProd(evento));
async function listaProductos (){
    let conexion = await fetch ("http://localhost:3001/productos",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    })
    let conexionConvertida = await conexion.json();
    //console.log (conexionConvertida)
    return conexionConvertida
}

export const conexionApi={
    listaProductos
}
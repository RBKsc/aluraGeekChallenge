async function listaProductos (){
    const conexion = await fetch ("http://localhost:3001/productos",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    })
    let conexionConvertida = await conexion.json();
    //console.log (conexionConvertida)
    return conexionConvertida
}

async function crearNew (nombre, descripcion, imagen){
    const conexion = await fetch("http://localhost:3001/productos",{
        method: "POST",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify({
            imagen:imagen,
            nombre:nombre,
            descripcion:descripcion
        })
    })

    const conexionConvertida= await conexion.json();
    if (!conexion.ok){
        throw new Error ("Ha ocurrido un error al enviar el video");
    }
    return conexionConvertida
}

export const conexionApi={
    listaProductos, crearNew
}
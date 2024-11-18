//funcion que hace una peticion GET a la API para obtener los productos
async function listarProductos() {
    try {
        const conexion = await fetch('http://localhost:3001/productos');
        const conexionConvertida = await conexion.json();
        
        if (Array.isArray(conexionConvertida)) {
            return conexionConvertida; // Si es un array, lo devuelves
        } else {
            console.error("La respuesta de la API no es un array", conexionConvertida);
            return []; // Retorna un array vacío si no es un array
        }
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return []; // En caso de error, también devuelves un array vacío
    }
}

//funcion que hace una peticion POST a la API para agregar un producto
async function agregarProducto(titulo, descripcion, imagen) {
    const conexion = await fetch('http://localhost:3001/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descripcion: descripcion,
            imagen: imagen
        })
    });
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

//funcion que hace una peticion GET a la API para buscar un producto
async function buscarTarjeta (palabraClave) {
    const conexion = await fetch(`http://localhost:3001/productos?q=${palabraClave}`);
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

//Funcion que hace una peticion DELETE a la API para borrar un producto
async function borrarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!conexion.ok) {  // Verificar si la respuesta no es exitosa
        throw new Error(`Error: ${conexion.status} - ${conexion.statusText}`);
        alert("error al borrar el producto");
    }
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}


export const conexiones = {
    listarProductos, agregarProducto, buscarTarjeta, borrarProducto
}


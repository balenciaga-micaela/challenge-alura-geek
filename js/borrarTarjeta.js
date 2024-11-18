import { conexiones } from "./conexiones.js";

const botonBorrar = document.querySelector("[data-borrar]");
const formulario = document.querySelector("[data-formulario]");


async function eliminarProducto(evento) {  
    //Evita que se recargue la pagina
    evento.preventDefault();
    //Trae los valores de los inputs
    const titulo = document.querySelector("[data-titulo]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    //Espera a que se ejecute la funcion listarProductos de conexiones
    const productos = await conexiones.listarProductos(titulo,descripcion,imagen)
    

    //Almacena y filtra productos que coincidan exactamente con todos los campos
    const productosCoincidentes = productos.filter(producto => {
        return (
            producto.titulo === titulo &&
            producto.descripcion === descripcion &&
            producto.imagen === imagen
        );
    });

    //Muestra productos coincidentes. 
    //Para cada producto de la lista, busca el id. 
    //Ejecuta funcion borrarProductos segun id. 
    //Maneja el error
    if (productosCoincidentes.length > 0) {
        console.log("Productos encontrados:", productosCoincidentes);
        
        for (const producto of productosCoincidentes){
            
        try{
            const idProducto = producto.id; 
            const respuesta = await conexiones.borrarProducto(idProducto);
        }catch(error){
            console.log("Error al borrar el producto")
        }
    }
    //Si la lista de productos que coinciden es 0, emite mensaje en la consola
    } else {
        console.log("No se encontraron productos que coincidan con los criterios.");
    }
    formulario.reset();
}

//funcion eliminarProducto se ejecuta al hacer click en el boton borrar

botonBorrar.addEventListener("click", eliminarProducto);














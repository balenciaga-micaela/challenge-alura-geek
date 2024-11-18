import { conexiones } from "./conexiones.js";

const contenedorProductos = document.querySelector("[data-lista]");

//funcion que crea una tarjeta con los datos del producto

function crearTarjeta(titulo,descripcion,imagen) {
    const tarjeta = document.createElement("li");
    
    tarjeta.className = "tarjetas_item";
    tarjeta.innerHTML = `
        <img class="imagen_producto" width="100%" src="${imagen}" alt="">
        <div class="tarjetas_item-info">
            <h3 class="tarjeta_titulo">${titulo}</h3>
            <p class="precio">${descripcion}</p>
        </div>
        <button type="button" class="boton__borrar" data-boton-borrar></button>
    `;
    // Agrega un evento asociado al boton borrar para borrar el producto a través de identificación del producto por sus datos únicos
    const botonBorrar = tarjeta.querySelector("[data-boton-borrar]");
    botonBorrar.addEventListener("click", async () => {
        try {
            const productos = await conexiones.listarProductos();
            const productoABorrar = productos.find(
                producto =>
                    producto.titulo === titulo &&
                    producto.descripcion === descripcion &&
                    producto.imagen === imagen
            );
    //Si el producto a borrar existe, se elimina del DOM. Si no, se muestra un mensaje de error en consola
            if (productoABorrar) {
                await conexiones.borrarProducto(productoABorrar.id);
                tarjeta.remove(); 
                console.log("Producto eliminado con éxito.");
            } else {
                console.log("No se encontró el producto a eliminar.");
            }
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    });

    return tarjeta;
    
}
//Función que lista los productos en el contenedor de productos
async function listarProductos(titulo,descripcion,imagen) {
    try {
  const listaAPI = await conexiones.listarProductos() 
   listaAPI.forEach(tarjeta => contenedorProductos.appendChild(crearTarjeta(tarjeta.titulo, tarjeta.descripcion, tarjeta.imagen)));

}catch{
    contenedorProductos.innerHTML = '<h2 class="mensaje__titulo">Ha ocurrido un error</h2>';
    console.error("Error al listar productos:", error);
}

} 

listarProductos();



export const exportarTarjeta = {crearTarjeta}
export const exportarLista = {listarProductos}

import { conexiones } from "./conexiones.js";

const formulario = document.querySelector("[data-formulario]");


//Funcion para agregar productos creando su respectiva tarjeta agregando un elemento li html y sus componentes  
async function agregarProducto(evento) {
//Trae los valores de los inputs  
    const titulo = document.querySelector("[data-titulo]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    evento.preventDefault();
//Espera a que se ejecute la funcion agregarProducto de conexiones.js
//Crea un nuevo elemento li con la clase tarjetas_item y le agrega los valores de los inputs
    try {
        await conexiones.agregarProducto(titulo, descripcion, imagen);

        const nuevaTarjeta = document.createElement("li");
        nuevaTarjeta.className = "tarjetas_item";
        nuevaTarjeta.innerHTML = `
            <img class="imagen_producto" width="100%" src="${imagen}" alt="">
            <div class="tarjetas_item-info">
                <h3>${titulo}</h3>
                <p class="precio">${descripcion}</p>
            </div>
            <button type="button" class="boton__borrar" data-boton-borrar></button>
        `;
        productoAgregado.appendChild(nuevaTarjeta);

        formulario.reset();
//Manejo del error, crea un mensaje de error en consola
    } catch (error) {
        console.error("Error al agregar el producto:", error);
    }
}

//Evento para agregar productos, ejecuta la funcion agregarProducto
formulario.addEventListener("submit", agregarProducto);







import { conexiones } from "./conexiones.js";
import {exportarTarjeta} from "./crearTarjeta.js";

//funcion para filtrar segun la palabra que hayan ingresado en el input
async function filtrarTarjeta(evento) {  
    evento.preventDefault();

    const dataBusqueda = document.querySelector("[data-busqueda]").value.toLowerCase();
    if (!dataBusqueda) return;

    const tarjetas = await conexiones.buscarTarjeta(dataBusqueda);
    
    const lista = document.querySelector("[data-lista]");
    lista.innerHTML = ""; //borra todas las tarjetas de la lista

    tarjetas
        .filter(tarjeta => {
            // Filtra si el título o la descripción (número) contiene la palabra ingresada en el input. Convierte las mayusculas a minusculas y los numeros a string.
            return tarjeta.titulo.toLowerCase().includes(dataBusqueda) || tarjeta.descripcion.toString().includes(dataBusqueda);
        })
        //Añade solo las tarjetas que coinciden
        .forEach(tarjeta => {
            const tarjetaElemento = exportarTarjeta.crearTarjeta(tarjeta.titulo, tarjeta.descripcion, tarjeta.imagen);
            lista.appendChild(tarjetaElemento);  // Añadir solo las tarjetas que coinciden.
        });

    if (lista.children.length === 0) {
        lista.innerHTML = '<h2>No se encontraron productos</h2>';
    }
}


//funcion filtrarTarjeta se ejecuta al hacer click en el boton buscar o presionar enter en el input
const boton = document.querySelector("[data-boton-busqueda]")
boton.addEventListener("click", evento => filtrarTarjeta(evento))
const enter = document.querySelector("[data-busqueda]")
enter.addEventListener("keypress", evento => {
    if (evento.key === "Enter") {
        filtrarTarjeta(evento); 
    }
})


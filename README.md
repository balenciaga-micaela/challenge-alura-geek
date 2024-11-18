# Alura Geek

Alura Geek es una tienda en línea para geeks donde puedes encontrar productos como **Funko Pop!**, **Lego**, **tazas geek** y **remeras geek**.

## Descripción

Este proyecto utiliza **JSON Server** para simular una API REST.
El sitio cuenta con una interfaz simple, donde los usuarios pueden agregar nuevos productos a la tienda, buscar productos específicos por nombre o descripción y borrar productos previamente agregados.

## Tecnologías utilizadas

- **HTML**
- **CSS**
- **JavaScript**
- **JSON Server** (para simular una API REST)

## Instalación

1. **Clona el repositorio** en tu máquina local:

   ```bash
   git clone https://github.com/balenciaga-micaela/challenge-alura-geek.git
   

## Características

- **Agregar productos**: Los usuarios pueden agregar nuevos productos mediante un formulario que captura el título, descripción y la imagen del producto.
- **Buscar productos**: Los usuarios pueden buscar productos por título o descripción.
- **Eliminar productos**: Los usuarios pueden eliminar productos de la tienda al clickear la imágen de tacho de basura situada en el margen inferior derecho de cada tarjeta de producto.
- **Eliminar productos**: Los usuarios también pueden eliminar productos de la tienda al ingresar los mismos detalles de un producto previamente agregado.
- **Responsive**: El diseño se adapta a diferentes tamaños de pantalla mediante el uso de media queries.


## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu_usuario/alura-geek.git

2. Instala las dependencias del proyecto:

Asegúrate de tener Node.js y npm instalados en tu sistema.

Ejecuta el siguiente comando para instalar las dependencias:

npm install

3. Inicia el servidor de desarrollo:

Para iniciar JSON Server y simular la API, ejecuta:

npm install json-server

npx json-server --watch db.json --port 3001

4. Abre el proyecto en tu editor de código preferido (por ejemplo, Visual Studio Code).

5. Abre el archivo index.html en tu navegador para ver la aplicación en funcionamiento.

## Estructura del proyecto

Estructura del Proyecto
Archivos principales:
- **index.html**: El archivo HTML que define la estructura de la página, con la inclusión de formularios, productos y la búsqueda.
- **css/style.css**: Los estilos principales de la página.
- **css/media_queries.css**: Estilos responsivos para asegurar una buena visualización en dispositivos de diferentes tamaños.
- **js/conexiones.js**: Contiene las funciones que interactúan con la API para obtener, agregar, buscar y eliminar productos.
- **js/crearTarjeta.js**: Contiene la función para crear la tarjeta HTML que representa a cada producto en la lista.
- **js/agregarTarjeta.js**: Gestiona la funcionalidad para agregar un nuevo producto a la tienda.
- **js/buscarTarjeta.js**: Maneja la búsqueda de productos según el texto ingresado en el campo de búsqueda.
- **js/borrarTarjeta.js**: Permite eliminar productos de la tienda a partir de los criterios dados en el formulario.
- **bd.json**: Archivo que simula la base de datos con los productos disponibles en la tienda.

## Desarrollado por Micaela Balenciaga para Alura Latam.

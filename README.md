# Amazonas  🙌

<img width="35%" align="right" style="margin-right:5%" alt="logo" src="https://res.cloudinary.com/silviajcn/image/upload/v1641583841/SPRING-3/logo-footer_zysgvs.png" />

## 📌 ¿Qué es Amazonas? 
Amazonas es una página de comercio electrónico. La página obtendrá la ubicación por país del usuario. El usuario podrá navegar en la página, en donde encontrará los productos que vende la página, al hacer click en las imágenes del home se le mostrarán los productos de la categoría seleccionada, podrá realizar búsquedas por categoría de productos en el buscador ubicado en la barra de navegación. Podrá agregar productos al carrito, aumentar la cantidad de un mismo producto, así como disminuir la cantidad o eliminar. La página permite dejar comentarios, además, el usuario que desee vender productos en la página de Amazon, podrá registrarlos en la sección Vender producto.

Para la compra en la pagina el usuario debe iniciar sesión, para ello, tiene la opción de hacerlo con Google, Facebook o puede registrarse con correo y contraseña.

## Puede visitar la tienda aquí: https://prueba-tecnica-3.web.app/ 


    
# 💎 Amazonas Proyecto

Para la creación del proyecto se utilizaron las siguientes herramientas de desarrollo:

* ```react```
* ```react-router-dom```
* ```redux```
* ```react-redux```
* ```redux-thunk```
* ```firebase```
* ```formik```
* ```yup```
* ```styled-components```
* ```@mui/material```
* ```@mui/icons-material```
* ```bootstrap```
* ```react-bootstrap```
* ```react-icons```
* ```react-elastic-carousel```

## 🔥 Descarga del proyecto e Instalación

* Clonar el repositorio
* Abrir el proyecto en Visual Studio Code (o editor de confianza)
* Abrir la terminal del editor
* Correr el comando ```npm install``` para instalar correctamente las dependencias del proyecto
* Para levantar el servidor local se debe correr el comando ```npm start```
* Se debe tener en cuenta que para la utilización de Firebase, se deben cambiar los datos de la constante firebaseConfig con datos de una cuenta personal de Firebase. Esta constante se encuentra en la siguiente direccion: src > firebase > firebaseConfig.js > firebaseConfig (leer nota 1).
* De igual modo, se debe cambiar la configuracion dentro de la constante fileUpload con datos personales de Cloudinary. Esta constante se encuentra en la siguiente direccion: src > helpers > FileUpload.js > fileUpload (leer nota 2).

Nota 1 : para cambiar estos datos es necesario contar con una cuenta en Firebase, crear un nuevo proyecto, y en la opcion de Configuracion del proyecto, encontrara la opcion de aplicaciones web, al selecionar esta ocpion optendra la configuracion del SDK del proyecto, en el SDK encontrara su confirguracion personal de la constante firebaseConfig.

Nota 2: para cambiar estos datos es necesario contar con una cuenta de developer en Cloudinary, obtener la url de la api de cloudinary (a esta url se le debe agregar al final lo siguiente: /upload), ir a la seccion settings, luego a la seccion Upload, y en el apartado de Upload presets, agregar un nuevo Udloap preset, en este paso es necesario darle el nombre que se desee, cambiar el Signing Mode a Unsigned, darle un nombre a la carpeta donde se subiran las imagenes y guardar dicha configuracion. Hacer los cambios respectivos dentro del proyecto con estos datos.

## 🔍 Vistas 

* Home



* Menu seleccionado



* Carrito



## 🌟 Autor

* **Silvia C. Navarro**  - [@silviajcn](https://github.com/silviajcn)

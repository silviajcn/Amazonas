# 🌍 Amazonas

<img width="35%" align="right" style="margin-right:5%" alt="logo" src="https://res.cloudinary.com/silviajcn/image/upload/v1641583841/SPRING-3/logo-footer_zysgvs.png" />

## 📌 ¿Qué es Amazonas? 
Amazonas es una página de comercio electrónico. La página obtendrá la ubicación por país del usuario. El usuario podrá navegar en la página, en donde encontrará los productos que vende la página, al hacer click en las imágenes del home se le mostrarán los productos de la categoría seleccionada, podrá realizar búsquedas por categoría de productos en el buscador ubicado en la barra de navegación. Podrá agregar productos al carrito, aumentar la cantidad de un mismo producto, así como disminuir la cantidad o eliminar el producto del carrito. La página permite dejar comentarios, además, el usuario que desee vender productos en la página de Amazon, podrá registrarlos en la sección Vender producto.

Para la compra en la pagina el usuario debe iniciar sesión, para ello, tiene la opción de hacerlo con Google, Facebook o puede registrarse con correo y contraseña.

## Puede visitar Amazonas aquí: https://spring3-a9826.web.app/

![home](https://user-images.githubusercontent.com/88461234/150698098-c27325cb-0ec5-40cb-915d-a3d4feeca2f7.png)

    
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

* Lista de productos

![list](https://user-images.githubusercontent.com/88461234/150698393-d042a2fd-f748-4720-a42d-4e11371cd247.png)

* Busquedas

![search](https://user-images.githubusercontent.com/88461234/150698404-becee03e-3144-4555-bd66-710f1c3c4076.png)

* Detalles del producto seleccionado

![product](https://user-images.githubusercontent.com/88461234/150698427-07a91775-41d8-4c61-b78e-f3e305a164e7.png)

* Carrito de compras

![carritoo](https://user-images.githubusercontent.com/88461234/150698444-cfd25405-37de-4336-b780-66837eea2640.png)

* Comentarios

![coments](https://user-images.githubusercontent.com/88461234/150698468-622f12c6-38c8-4162-8f5f-2ce22f0eb883.png)



## 🌟 Autor

* **Silvia C. Navarro**  - [@silviajcn](https://github.com/silviajcn)

![logoo](https://user-images.githubusercontent.com/88461234/150699439-457e6941-d9cc-482b-81d9-b6a7249ec642.png)



 <a name="inicio">

# Proyecto de HACK THE OCEAN

[Link](https://hack-the-ocean.azurewebsites.net/) al proyecto ya desplegado \("puede que no funcione la conexion a la Base de datos por problemas con la conexion a la misma")
___

## Índice de contenidos
* [Diseño de la pagina](#p1)
* [Diseño de la pagina](#p2)
* [Información de las Animaciones](#p7)
* [ Vista de la Pagina de home](#p3)
* [Vista de la Pagina de mas información](#p4)
* [Vista de la pagina de ayuda](#p5)
* [Como Compilar la React app](#p6)

___

 ## FrontEnd 

 <a name="p1">

 #### Diseño de la pagina:
 El diseño de la pagina web primero inicio con una [maquetación en figma](https://www.figma.com/file/QCMdeMuRiVy8juv74V11ov/Untitled?node-id=80%3A73)

<br>----[Inicio^](#inicio)

 <a name="p2">

 ### Diseño de la pagina:
 Esta pagina web esta echa en react asi que cada parte de ella es un componente, por lo que esta dividida en diferentes carpetas y en cada carpeta con algún componente tiene su archivo `.js` y su respectivo archivo `.css`
<br>----[Inicio^](#inicio)

 
 <a name="p7">

 ### Información de las Animaciones
 las animaciones que se usaron son practicas ya que tienen sus funciones 
 * La animación del botón de menu hace que se despliege y se pueda usar
 * La función de los imput funciona para que el usuario se sienta mas cómodo al momento de escribir o de presionar algun boton <br>
 puede que sean pocas animaciones pero tienen sus funcionalidades 

<br>----[Inicio^](#inicio)


 <a name="p3">

 ### Pagina de home 

![Imagen de la vista de Home](https://github.com/JVespid/hakaton/blob/master/img/home.png)
<br>----[Inicio^](#inicio)

 <a name="p4">

 ### Pagina de mas Información 

![Imagen de la vista de Home](https://github.com/JVespid/hakaton/blob/master/img/info.png)
<br>----[Inicio^](#inicio)

 
 <a name="p5">

 ### Pagina de ayuda

![Imagen de la vista de Home](https://github.com/JVespid/hakaton/blob/master/img/ayuda.png)
<br>----[Inicio^](#inicio)


 <a name="p6">

 ### Como Compilar la React app
 para poder desplegar la pagina en `localhost` <br>
 * Primero hay que ejecutar el comando de `npm i` para instalar las dependencias
 * Luego de eso hay que iniciar el servidor con el comando `npm start`, 
 * Pero si se hace alguna modification en cualquier cosa y se quiere pasar a producción, hay que hacer el comando `npm run build` y luego copiar la carpeta <b> build </b> a la carpeta de [server](https://github.com/JVespid/hakaton/tree/master/server), remplazando la carpeta build ya existente
<br>----[Inicio^](#inicio)


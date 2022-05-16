
# Proyecto de HACK THE OCEAN

[Link](http://20.25.69.138:3000) al proyecto ya desplegado \("puede que no funcione por problemas con el servidor")

___

### Como desplegar la pagina en LocalHost 

1. Primero Debemos de importar la [base de datos](https://github.com/JVespid/hakaton/#BD) y para ello hay 2 formas, 1 crearla desde 0 con alguna interfaz gráfica o usar el código proporcionado arriba <br>

1,1. Para poder usar la base de datos en Local Host es necesario que el <b> usuario sea root y no tenga contraseña <b><br>
 
2. Luego de esto hay que hacer un `npm i`  dentro de la carpeta de servidor, para luego escribir el comando de `npm start`
>
3. Luego de eso hay que abrir el navegador y poner el url `http:\\localhost:3000` <br>
>
4. Después de eso la pagina ya estaría en linea de forma <b>[LocalHost](https://github.com/JVespid/hakaton/#LocalHost)</b>


 * Pero si se hace alguna modification en cualquier archivo del [FrontEnd](https://github.com/JVespid/hakaton/tree/master/client) y se quiere pasar a producción, hay que hacer el comando `npm run build` entando en el directorio de la carpeta [client](https://github.com/JVespid/hakaton/tree/master/client) y luego copiar la carpeta <b> build </b> a esta misma carpeta, remplazando la ya existente 
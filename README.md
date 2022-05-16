
# Proyecto de HACK THE OCEAN

[Link](http://20.25.69.138:3000) al proyecto ya desplegado \("puede que no funcione por problemas con el servidor")

___
## Índice de contenidos
* [Planteamiento de la problemática](#problemática)
* [Propuesta de solución](#Propuesta)
* [Solución](#solución)
* [FrontEnd](#FrontEnd)
* [BackEnd](#BackEnd)
* [Servidor](#Servidor)
* [Base de datos](#BD) 
* [Como desplegar la pagina en LocalHost](#LocalHost) <br>

___

<a name="problemática"></a>
## Planteamiento de la problemática 

<p> 
En este proyecto se elaboro una propuesta de solución que satisface la problemática ambiental, de la mala divulgación <br>
de la información, pues esta problemática tiene el problema de que muchas veces la información del ¿como ayudar?, <br>
¿donde ayudar? y etc, no esta al fácil acceso, incluso personas que participan activamente en campañas de limpieza, <br>
no se enteran de dichos eventos y esto provoca que el interés por hacer un cambio decaiga, puesto a que los humanos <br>
al ser seres sociales, todo aquello donde participa poca gente es menos atractivo que otro donde allá menos 
</p>

<a name="Propuesta"></a>
## Propuesta de solución 
<p>
Visto la problemática, ha llegado la hora de plantear una solución, al inicio pensamos ¿que podríamos hacer para que <br>
esta problemática de la mala divulgación de la información pueda ser solucionada? y la conclusion a la que llegamos <br>
fue una aplicación web donde los usuarios puedan dejar su información de contacto para que por medio de ella podamos<br>
enviar la información sobre otras campañas de limpieza, o hasta incluso otros tipos de campañas pra ayudar a otras <br>
causas, para ser mas concretos una <b> Landing Page </b> que obtendrán la información de contacto de los usuarios, para poder <br>
contactarlas y brindarles todo tipo de información
</p>

___

<a name="Solución"></a>
## Solución:

si bien nuestra solución no es la mejor diseñada, cumple con el propósito de obtener información del usuario para luego<br>
almacenarla en una bases de datos, para luego poder utilizarla donde se necesite para poder solucionar el problema. <br>


<a name="FrontEnd"></a>
> ### FrontEnd 
> En esta parte fue utilizado la librería de react js, con las instalaciones de react-router-dom para las rutas y <br>
> Axios para la parte de enviar y recibir datos desde un servidor de express js
> El front end esta dividido en 3 secciones las cuales son:
> * Home
> * Mas Información
> * Ayuda <br>
>
> -Donde <b> home </b> se encarga de mostrar una vista general de la problemática con información estadística <br>
> -Donde <b> Mas Información </b> se encarga de de proporcionar los principales problemas y sus soluciones <br>
> -Donde <b> Ayuda </b> se encarga de hacer que el usuario proporcione la información de contacto incluso de poder hacer una donación para ayudar a la causa de salvar el océano <br>
>
> #### Diseño de la pagina:
> A qui esta el [Link](https://github.com/JVespid/hakaton/tree/master/client) para poder ir a ver el diseño de la pagina en el readme <br>
> .

<a name="BackEnd"></a>
> ### BackEnd
> En esta parte se utilizo Express JS para crear el servidor y también se utilizaron las dependencias de Mysql y de cors <br>
> En esta parte solo se configuro el despliegue del servidor con el build de react para poder abrir el servidor en el <br>
puerto 3000
> 
<a name="Servidor"></a>
> ### Servidor 
> \(si esta leyendo esto, la pagina web no esta disponible para verla ahora mismo, pues estamos teniendo problemas para<br> 
que la pagina se mantenga abierta, pues se cierra a momentos, no hya mensaje de error ni nada pero si quiere puede <br>
[ejecutar el servidor en LocalHost](#LocalHost) para poder probarlo) <br>
> 
>Se utilizo el servidor de Azure para poder desplegar la pagina, utilizamos una maquina virtual donde se ejecutan <br>
>los archivos  de la carpeta [servidor](https://github.com/JVespid/hakaton/tree/master/server) 
> 
<a name="BD"></a>
> ### Base de datos
> 
> 
>

<a name="LocalHost"></a>
> ### Como desplegar la pagina en LocalHost 
> 
> 
>

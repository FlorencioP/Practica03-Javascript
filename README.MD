-Formulario de Registro
Esta es la presentación del formulario, para que no haya espacio sin utilizar si lo agrando, los requerimientos de cada campo se encuentran dentro de los inputs.
![1](/READMEIMG/1.png?raw=true "Title")

Si se Intenta enviar el formulario aun con campos obligatorios vacíos, el formulario advierte al usuario sobre esto: 
![2](/READMEIMG/2.png?raw=true "Title")
Así mismo, si los datos se encuentran mal ingresados el formulario también mostrará una advertencia y no permitirá él envió del formulario:
![3](/READMEIMG/3.png?raw=true "Title") 
Cada vez que un campo se llene, dicho campo comprueba ese mismo momento la validez de los datos, se serlo, las advertencias se eliminan.
![4](/READMEIMG/4.png?raw=true "Title")
Una vez completado se envía el formulario aparece la siguiente página PHP
![5](/READMEIMG/5.png?raw=true "Title") 
Códigos de las validaciones:
Validar que ningún campo se encuentre vació, usando una bandera y booleanos:
![6](/READMEIMG/6.png?raw=true "Title")
![7](/READMEIMG/7.png?raw=true "Title")
Función Para validar la Cedula Recreando el mismo método como se lo realizaría a mano:
![8](/READMEIMG/8.png?raw=true "Title")
![9](/READMEIMG/9.png?raw=true "Title")
Función Para permitir solo el ingreso de letras por medio de “onkeyup”
![10](/READMEIMG/10.png?raw=true "Title")
Función Para permitir solo el ingreso de Numeros por medio de “onkeyup”
![11](/READMEIMG/11.png?raw=true "Title")
Función Para permitir solo el ingreso de la fecha por medio de “onkeyup”
![12](/READMEIMG/12.png?raw=true "Title")
Función Para validar El ingreso de los 2 nombres del usuario usando funciones para manejar strings y por medio de “onchange”
 ![13](/READMEIMG/13.png?raw=true "Title")
Función Para validar El ingreso de los 2 Apellidos del usuario usando funciones para manejar strings y por medio de “onchange”
 ![14](/READMEIMG/14.png?raw=true "Title")
Función para validar el teléfono asegurándose que tenga el tamaño adecuado
 ![15](/READMEIMG/15.png?raw=true "Title")
Función para validar la vecha comparando sus datos:
 ![16](/READMEIMG/16.png?raw=true "Title")



Función Para validar el mail así mismo comparando los datos ingresados por lo que deberían ser los validos:
 ![17](/READMEIMG/17.png?raw=true "Title")
Funcion Para validar la contraseña usando varias banderas, comparadores e IFs 
 ![18](/READMEIMG/18.png?raw=true "Title")
![19](/READMEIMG/19.png?raw=true "Title")
 
-Galería de fotos 
Esta es la presentación inicial de la Galería, Con los Botones de navegación bloqueados
 ![20](/READMEIMG/20.png?raw=true "Title")
Cuando se pulsa el botón inicial se asigna un vector con números random en él, los cuales serán utilizados para cargar la galería, también se desbloquea el botón siguiente pero no el de anterior por que en si no hay a donde volver 
 ![21](/READMEIMG/21.png?raw=true "Title")
Al pulsar el botón siguiente se producirá una animación de transición y como el vector ya no se encontrara en su limite inferior se habilitara el botón “Anterior”
 ![22](/READMEIMG/22.png?raw=true "Title")
 ![23](/READMEIMG/23.png?raw=true "Title")
 
Al pulsar el botón anterior se producirá nuevamente la animación y se volverá a la imagen anterior 
 ![24](/READMEIMG/24.png?raw=true "Title")
 ![25](/READMEIMG/25.png?raw=true "Title")


Al llegar al límite de 5 imágenes el botón siguiente se bloqueará:
 ![26](/READMEIMG/1.png?raw=true "Title")
Al pulsar iniciar se vuelve a generar una lista de imágenes aleatorias y vuelve al principio:
 ![27](/READMEIMG/27.png?raw=true "Title")
Funciones:
Función Producida al presionar el botón indicar:
 ![28](/READMEIMG/28.png?raw=true "Title")



Función del botón Siguiente (Esta función contiene otra función en ella que es la que genera que se desplaza la imagen)
 ![29](/READMEIMG/29.png?raw=true "Title")
Función del botón anterior que cumple con la misma lógica que el de Siguiente
 ![30](/READMEIMG/30.png?raw=true "Title")
-Calculadora
Esta es la presentación de la calculadora:
 ![31](/READMEIMG/31.png?raw=true "Title")
Cada uno de los botones funciona como debería, C es para limpiar la pantalla
Un ejemplo de su funcionamiento:
 ![32](/READMEIMG/32.png?raw=true "Title")
 ![33](/READMEIMG/33.png?raw=true "Title")
Eso sería básicamente todo
Funcion Eval() Aplicada:
 ![34](/READMEIMG/34.png?raw=true "Title")





Validaciones de la Paginas:
-Formulario
HTML
 ![33](/READMEIMG/35.png?raw=true "Title")
CSS
 ![34](/READMEIMG/36.png?raw=true "Title")

-Galería
HTML
 ![35](/READMEIMG/35.png?raw=true "Title")
CSS
 ![36](/READMEIMG/36.png?raw=true "Title")

-Calculadora
 HTML
 ![37](/READMEIMG/37.png?raw=true "Title")
CSS
  ![38](/READMEIMG/38.png?raw=true "Title")


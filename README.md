

instalar-proyectos-existentes-de-laraevel

Muchas veces no comienzas un proyecto desde cero, sino que debes clonar e instalar uno ya existente, y esto puede parecer atemorizante, pero en realidad sólo tienes que seguir una serie de pasos bastante sencillos y estándares, cómo te mostraremos en este tutorial, de esta forma puedes evadir muchos de los problemas comunes al realizar esta tarea.

Servidor web

Lo primero que debes tener en cuenta es que Laravel es un framework para PHP, por lo cual debes contar con un servidor web, en nuestra pagina de Instalación y configuración de entornos puedes encontrar muchos tutoriales donde te enseñamos a instalar servidores de desarrollo en tu maquina local (Windows, Linux o Mac). Si eres un usuario avanzado o con experiencia trabajando con PHP, te recomendamos también darle un vistazo a nuestra serie de Vagrant y Homestead

Es recomendable, indiferentemente del servidor que estés usando, que configures adicionalmente un virtualhost en lugar de trabajar con el directorio local (localhost/tuproyecto).

    El término virtualhost se refiere a hacer funcionar más de un sitio web (tales como www.company1.com y www.company2.com) en una sola máquina.

Esto te puede ahorrar muchos problemas referentes al uso de rutas y path’s en tu proyecto. Para crear un virtualhost puedes seguir este

    Creando Virtual Hosts con Apache en Windows para WAMP o XAMPP
    Cómo crear Virtual Hosts con Apache para Linux y Mac

Clonando un nuevo proyecto

Si el proyecto que deseas instalar proviene de un repositorio de git como GitHub puedes seguir este tutorial donde te enseñamos cómo hacer Clone y Fork con git y GitHub. Puedes encontrar más información sobre este sistema de control de versiones en nuestra serie Aprende Git.
Permisos de escritura

Según la documentación oficial de Laravel

    Después de instalar Laravel, tal vez debas configurar algunos permisos, Los directorios entre storage y la carpeta bootstrap/cache deben tener permisos de escritura por el servidor web.

Asegúrate de configurar esto correctamente usando
sudo chmod -R 755 storage
Instalando dependencias con Composer

Lo primero que debes hacer luego de descargar un proyecto existente a tu maquina local y después de haber configurado tu virtualhost, es instalar las dependencias del proyecto con Composer.

    Para más información visita el nuestra serie sobre Composer, el gestor de dependencias de PHP.

Esto lo puedes hacer usando el siguiente comando en la consola, dentro de la carpeta raíz del proyecto:
$ composer install

De esta forma se instalarán todas las dependencias necesarias para el proyecto que fueron definidas en el archivo composer.json durante el desarrollo.
Archivo de configuración de Laravel

Cada nuevo proyecto con Laravel, por defecto tiene un archivo .env con los datos de configuración necesarios para el mismo, cuando utilizamos un sistema de control de versiones como git, este archivo se excluye del repositorio por medidas de seguridad .

    Para más información visita Configuración de Git en proyectos de Laravel

Sin embargo  existe un archivo llamado .env.example que es un ejemplo de como crear un el archivo de configuración, podemos copiar este archivo desde la consola con:
$ cp .env.example .env

De esta forma ya tenemos el archivo de configuración de nuestro proyecto.
Creando un nuevo API key

Por medidas de seguridad cada proyecto de Laravel cuenta con una clave única que se crea en el archivo .env al iniciar el proyecto. En caso de que el desarrollador no te haya proporcionado están información, puedes generar una nueva API key desde la consola usando:
$ php artisan key:generate
Base de datos y migraciones

Por lo general las bases de datos en los proyectos de Laravel se crean haciendo uso de las migraciones.

    En este tutorial no vamos a explicar este proceso pero te recomendamos el vídeo tutorial: Creando Migraciones en Laravel 5

Si el proyecto que estas instalando tiene definida una base de datos para su funcionamiento, por ejemplo MySql, debes primero crearla en tu servidor local.

Desde la consola (usando MySql) podrías hacer algo similar a esto
mysql -uroot -psecret

    root es tu usuario de base de datos y secret tu contraseña de MySql

Con esto habrás ingresado a la consola de MySql y desde ahí creas la base de datos con:
mysql> CREATE DATABASE tu_base_de_datos;

Posteriormente debes agregar las credenciales al archivo .env
DB_HOST=localhost
DB_DATABASE=tu_base_de_datos
DB_USERNAME=root
DB_PASSWORD=

Finalmente estarás habilitado para ejecutar la migración desde la consola usando artisan
$ php artisan migrate 

Si ademas el proyecto cuenta con seeders que requieras ejecutar puedes usar el siguiente flag
$ php artisan migrate --seed

    Ver Seeders y el componente Faker en Laravel 5.

Assets

Laravel cuenta con elixir, una herramienta para configurar los assets de cada proyecto, su uso es opcional, y no aplica para todos los proyectos, asegúrate de verificar con el desarrollador si es necesario en el proyecto que intentas instalar.

Esta herramienta hace uso de gulp.

    Si no sabes de que se trata, puedes leer este post sobre Manejo de assets con elixir y gulp en Laravel 5.1

En este caso deberás seguir dos pasos mas antes de poder visualizar tu proyecto.

Primero ejecutar
$ sudo npm install

Esto instalará todas las herramientas necesarias, posteriormente debes instalar las dependencias utilizando
bower install
Puesta en marcha

Finalmente después de revisar cada una de estas configuraciones y haber ejecutado todos los comandos necesarios, puedes ingresar a la url de tu proyecto y no deberías tener ningún problema para verlo en funcionamiento.

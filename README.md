# BIOS-Starter-Dough
Este proyecto base servira para empezar a desarrollar cualquier proyecto de angular, desde el front se sortearan todas las librerias, fuentes, css normalizado que todo proyecto deberia tener, a continuacion le dare los pasos a seguir para instalar correctamente todo el proyecto base con sus correspondientes dependencias:

# Requisitos
* Instalar Xampp (opcional)
* Instalacion global de Node.js
* Instalacion global de Bower.io
* Instalacion global de Yeoman.io
* Instalacion global de Gulp.io
* Instalacion global de http-server(Recomendada)

**Note:** la instalacion del http-server es opcional dado que esto es una opcion para iniciar el proyecto desde el propio servidor de node.js

## Decargar proyecto
```bash
https://bitbucket.org/biosdev/bios-starter-dough
```

## 1. Configuracion
Una vez descargado el proyecto, abrimos la ventana de comandos `cmd` y nos dirigimos a la ruta donde esta alojado nuestro proyecto base, conseguido esto ejecutamos los siguientes comandos:

```bash
bower install
```
- Instala todas las dependencias bower

```bash
npm install
```
- Instala todas las dependencias npm
* Http-server (opcional)
```bash
npm install -g http-server
```
**Note:** Si quiere iniciar el proyecto mediante el servidor de node, nos deberiamos de ir de nuevo a la ruta donde tenemos nuestro proyecto y ejecutamos el siguiente comando
```bash
http-server -p 8000 o el puerto que se desee
```

## 2. Inicializar
```bash
gulp
```
- Se iniciara el proyecto y abrira una venta en el navegador

## 3. Construir version de produccion
```bash
gulp build
```
- Se creara la carpeta build en nuestro proyecto la cual es la version de produccion
- esto va a procesar las siguientes tareas:
* Se limpiara la carpeta build
* Compilara archivos .css y .js
* Copiar y optimizar imagenes
* Minificara y copiara todos los archivos HTML en $ templateCache
* Mostrara el tamano de la carpeta de compilacion

## 4. Iniciar servidor (Sin las tareas por default)
```bash
gulp server
```

## 5. Iniciar servidor web en la carpeta de compilacion
```bash
gulp server-build
```

## 7. Instalar globalmente ng-docs
```bash
npm install -g yo generator-ngdoc
```
- Ejecutando este comando se instalara globalmente ng-docs

## 8. Instalar localmente el docs de ng-doc
```bash
yo ngdoc
```
- Una vez instalado globalmente el generador de ng-docs debemos irnos a la ruta de nuestro proyecto y ejecutar el comando `yo ngdoc` 

## 9. Inicializar ng-docs
```bash
gulp docs:serve
```
**Note:** para activar la dependecia de ng-docs es necesario ejecutar una nueva ventana `cmd` e irnos a la ruta de nuetro proyecto y entrar a la carpeta docs hecho esto ejecutaremos el comando anterior.

* El archivo creado en esa ruta modificar las rutas include: 'src/**/*.js', en nuestro caso include: 'controllers/**/*.js',
   docs/gulp/dgeni.js

## Contactenos
- Copyright (C) 2017 BIOS
- [http://bios.org.co/es-es/](http://bios.org.co/es-es/)
- Liberado bajo la licencia MIT
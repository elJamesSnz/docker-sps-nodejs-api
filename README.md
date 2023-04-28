# Pokemon API en Node.js con Docker

Este repositorio contiene un microservicio desarrollado en Node.js dentro de un contenedor Docker.
El microservicio facilita una API REST para que sea consumida con clientes REST como Postman.

## Atecedentes

Tener instalado lo siguiente:

- Node.js (https://nodejs.org/es) como entorno de ejecución
- Docker (https://www.docker.com/products/docker-desktop/) como plataforma de creación y ejecución de contenedores

## Primeros pasos

### Clonar repositorio

- git clone https://github.com/elJamesSnz/docker-sps-nodejs-api.git

### Moverse al directorio del proyecto

cd docker-sps-nodejs-api

### Construir la imagen de Docker

docker build -t nodejs-sps

Se podrá ver la imagen de Docker en la aplicación


### Ejecutar contenedor Docker

docker run -p 3000:8080 -d --name nodejs-sps-container nodejs-sps

## Probar microservicio

### Probar microservicio con cliente REST Postman

Probar peticiones API con las rutas posibles a utilizar: 
-GET /api/ability/: 
-GET /api/pokemon/:
-GET /api/locationArea/:

*Donde ':' es el id o nombre deseado
*El puerto en localhost es el 3000, por lo que una URL se vería así: http://localhost:3000/api/pokemon/1

## Resultados

Visualizar JSON solicitado en el body de Postman


# Diagramas

## Diagramas de secuencia y clases

Para describir el funcionamiento de la app, así como los atributos y métodos de cada modelo.

![DiagramaSecuenciayClases](https://user-images.githubusercontent.com/72090281/235266577-57528db9-0f12-4367-bbb1-f24161e910d8.jpg)


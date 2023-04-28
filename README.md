# Pokemon API en Node.js con Docker

Este repositorio contiene un microservicio desarrollado en Node.js dentro de un contenedor Docker.
El microservicio facilita una API REST para que sea consumida con clientes REST como Postman.

## Atecedentes

Tener instalado lo siguiente:

- Node.js (https://nodejs.org/es) como entorno de ejecución
- Docker (https://www.docker.com/products/docker-desktop/) como plataforma de creación y ejecución de contenedores

## Primeros pasos

### Clonar repositorio

git clone https://github.com/elJamesSnz/docker-sps-nodejs-api.git
cd docker-sps-nodejs-api

### Construir la imagen de Docker

docker build -t nodejs-sps

Se podrá ver la imagen de Docker en la aplicación


### Ejecutar contenedor Docker

docker run -p 3000:8080 -d --name nodejs-sps-container nodejs-sps


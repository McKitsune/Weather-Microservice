# Weather Microservice

Este es un microservicio desarrollado en **NestJS** que permite obtener información del clima en función de la ciudad proporcionada. Utiliza una API de terceros para obtener los datos meteorológicos y ofrece varias rutas para consultar y manipular la información del clima.

## Estructura del Proyecto

La estructura del proyecto sigue la arquitectura de NestJS, con módulos, controladores y servicios. La funcionalidad principal se encuentra en el módulo `weather`, que contiene la lógica de obtención de datos del clima.

```plaintext
weather-microservice/
┣ dist/                   # Archivos compilados
┣ node_modules/           # Dependencias del proyecto
┣ src/                    # Código fuente del proyecto
┃ ┣ weather/              # Módulo de clima con lógica de negocio
┃ ┣ app.controller.ts     # Controlador principal
┃ ┣ app.module.ts         # Módulo raíz del microservicio
┃ ┣ app.service.ts        # Servicio principal
┃ ┗ main.ts               # Punto de entrada de la aplicación
┣ test/                   # Pruebas de la aplicación
┣ .eslintrc.js            # Configuración de ESLint
┣ .gitignore              # Configuración de Git ignore
┣ .prettierrc             # Configuración de Prettier
┣ nest-cli.json           # Configuración de NestJS CLI
┣ package-lock.json       # Archivo de bloqueo de dependencias
┣ package.json            # Dependencias y scripts del proyecto
┣ README.md               # Documentación del proyecto
┣ tsconfig.build.json     # Configuración de TypeScript para construcción
┗ tsconfig.json           # Configuración general de TypeScript
````


# Instalación

Para instalar y ejecutar el microservicio, sigue estos pasos:

| Paso                                                | Comando                                                                                     |
|-----------------------------------------------------|---------------------------------------------------------------------------------------------|
| Clona el repositorio y navega a la carpeta del proyecto. | `git clone https://gitlab.com/TuUsuario/weather-microservice.git` <br> `cd weather-microservice` |
| Instala las dependencias.                           | `npm install`                                                                              |
| Configura las variables de entorno en un archivo `.env` (por ejemplo, API keys para el proveedor del clima). |                                                                                             |
| Compila y ejecuta el proyecto en modo desarrollo.   | `npm run start:dev`                                                                        |

El microservicio estará disponible en `http://localhost:3000`.

## Uso

El microservicio ofrece varias rutas para consultar el clima de distintas ciudades. Aquí tienes una tabla con las rutas y sus funciones:

| Ruta                     | Método | Descripción                                                                                           |
|--------------------------|--------|-------------------------------------------------------------------------------------------------------|
| `/weather/:city`         | GET    | Obtiene la información del clima actual para una ciudad específica proporcionada en la ruta.          |
| `/weather/:city/forecast`| GET    | Obtiene el pronóstico extendido del clima para una ciudad específica proporcionada en la ruta.        |
| `/weather`               | POST   | Configura la ciudad predeterminada para obtener el clima sin necesidad de especificarla cada vez.     |
| `/weather/default`       | GET    | Obtiene el clima de la ciudad predeterminada configurada previamente en el microservicio.            |

### Ejemplo de Uso

Para obtener el clima de una ciudad específica:

``bash
GET http://localhost:3000/weather/London

Esto devolverá un objeto JSON con la información meteorológica de Londres.

Respuesta Esperada
json

{
  "city": "London",
  "temperature": 15,
  "humidity": 80,
  "description": "Parcialmente nublado"
}


Pruebas
Para ejecutar las pruebas, utiliza el siguiente comando:

bash
npm run test

Esto ejecutará las pruebas definidas en la carpeta test para asegurar que todas las funcionalidades del microservicio funcionen correctamente.

Tecnologías Utilizadas
NestJS: Framework principal para construir el microservicio.
Axios: Cliente HTTP para realizar solicitudes a una API de clima.
TypeScript: Lenguaje de programación utilizado para un código más mantenible y escalable.
Despliegue
Este microservicio puede ser fácilmente desplegado en cualquier entorno compatible con Node.js y ofrece una API robusta para obtener y administrar información meteorológica.``

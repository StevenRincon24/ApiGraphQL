# Taller Colaborativo GraphQL

Este repositorio alberga el código del backend GraphQL utilizado en un contexto de gestión de equipos deportivos de fútbol. Se encarga de manejar las solicitudes y operaciones relacionadas con los equipos deportivos, proporcionando una [interfaz unificada][front] para acceder y modificar datos en una base de datos MongoDB alojada en la nube a través de MongoDB Atlas.

## Consideraciones de uso

Para utilizar este proyecto, siga los siguientes pasos:

- Clonar este repositorio.
- Configurar las variables de entorno en un archivo .env.
- Ejecutar npm install para instalar las dependencias.
- Ejecutar npm start para iniciar el servidor (a partir de la variable de entorno PORT o por defecto PORT=4000).

## Dependencias principales

El proyecto utiliza las siguientes dependencias principales:

- "apollo-server-express": "^3.12.1",
- "dotenv": "^16.3.1",
- "express": "^4.18.2",
- "graphql": "^16.8.0",
- "mongoose": "^7.5.0",
- "nodemon": "^3.0.1"

## Funcionamiento General

- **Configuración Inicial:** El servidor Express se configura en el archivo index.js, donde se establecen configuraciones iniciales y se cargan variables de entorno desde un archivo .env (opcional).

- **Conexión a la Base de Datos:** Se establece una conexión a la base de datos MongoDB a través de MongoDB Atlas en el archivo db.js utilizando la biblioteca Mongoose.

- **Esquema GraphQL:** El esquema GraphQL se define en typeDefs.js utilizando la biblioteca Apollo Server Express. Describe los tipos de datos (por ejemplo, "teams") y las operaciones disponibles (por ejemplo, consultas, mutaciones) en la API GraphQL. También especifica los campos y argumentos disponibles para cada tipo.

- **Resolvers GraphQL:** En resolvers.js, se implementan las funciones de resolución para cada campo y operación definida en el esquema GraphQL. Los resolvers son responsables de interactuar con la base de datos y devolver los datos solicitados por el cliente. Esto incluye operaciones para obtener equipos, crear, actualizar y eliminar equipos, entre otros.

- **Servidor Apollo:** Se crea una instancia de Apollo Server en index.js y se le proporciona el esquema GraphQL (typeDefs) y los resolvers (resolvers). El servidor Apollo se inicia y se conecta a Express usando apolloServer.applyMiddleware.

- **Gestión de Solicitudes HTTP:** Cuando el servidor Express recibe una solicitud HTTP, Apollo Server procesa la solicitud y utiliza los resolvers para obtener o modificar datos en la base de datos según lo solicitado por el cliente. Se encarga de validar las solicitudes GraphQL y genera respuestas JSON adecuadas.

- **Manejo de Errores:** El backend también maneja errores y envía respuestas de error adecuadas si se producen problemas durante el procesamiento de solicitudes.

- **Escucha en un Puerto:** El servidor Express escucha en un puerto específico (definido por la variable de entorno process.env.PORT o por defecto en el puerto 4000) y muestra un mensaje en la consola para indicar que está escuchando.

## Consideraciones finales

Este proyecto se creó con fines académicos para aplicar los conocimientos adquiridos sobre el uso de GraphQL y Apollo Client en el curso Electiva II.

Realizado por:

- Hovar Steven Rincón Vianchá
- Andrés Iván Sierra Espinel

[front]: https://github.com/StevenRincon24/FrontTeams
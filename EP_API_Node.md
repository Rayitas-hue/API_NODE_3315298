# 📁 Estructura profesionales de un API en Node.js
api-node
   
   |-src **Aqui vive todo el código real del proyecto**
       
      |-config **Configurarciones globales**
        |-database.js

      |-controllers **Controla las peticiones HTTP**
        |-auth.controller.js
        |-usuario.controller.js

      |-middlewares **Intermediarios de seguridad y validación**
        |- auth.middlewares.js
        |- validate.middlewares.js

      |-models **Respesenta las tablas de la base de datos**
        usuario.model.js

      |-router **Define las URL de la API**
        |-usuario.routes.js

      |-validators ** validar campos **
        |-auth.validator.js

      |-services **Lógica del negocio**
        |-auth.service.js
        |-usuario.service.js

      |-utils **Funciones reutilizables**
        |-bcrypt.js
        |-jwt.js
      
      |seeders **Datos pregrabados**
        |-superadmin.seed.js

      |-app.js **Configuraciones de la aplicación**

      |-server.js **Punto de arranque**

  |-.env **Variables de entorno**

  |-.gitignore

    ## Inicializar un proyecto
    ``npm init -y``

    instalar express ``npm install express``

    probar app.js en en terminal ejecutamos -> ``node app.js``
     en el navegador`` http://localhost:3000``
     terminar la ejecución ejecutas en el terminal-> ``ctrl+c``

     Instalamos otras dependencias en api.node
     npm install dotenv sequelize mysql2 pg pg-hstore

     Cambios en el package.josn
     ```
     "main": "Src/server.js",
    "scripts": {
      "start": "node src/server.js"
    }

    ```
    Se puede ejecutar con ``npm start``

    Modelo (Entidad usuario)
    ruta src/models/usuario.model.js

    Servicio(Lógica del negocio)
    ruta src/services/usuario.service.js

    Controlador
    ruta src/controllers/usuario.controller.js

    Rutas
    src/routes/usuario.routes.js

    Dependecias
    npm install bcryptjs jsonwebtoken cors helmet morgan express-validator express-rate-limit

    dependecias desarrollo
    npm install -D nodemon
    Permite hacer cambios sin parar el servicio

    "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
    },

    Ejecutar modo desarrollador con: npm run dev

    Configuración de seguridad
    en .env
    JWT_SECRET=mi_clave
    SUPERADMIN_EMAIL=superadmin@education.com
    SUPERADMIN_PASWORD=Admin_123*

    modificar usuario.model.
# GPT-BACK  

Proyecto Back End, en donde se utilizó GPT-3.5-TURBO en conjunto con NodeJS y Express para desarrollar una API REST basada en la plataforma de OpenAI.

### Instalación del proyecto
1. Clonar este repositorio.
2. Instalar las dependencias con el comando `npm install`.
3. Crear el archivo de variable de entorno con el comando `touch .env`.
4. Definir las variables de entorno del archivo `.env` con el mismo nombre de las variables de `.env.example`.
5. Crearse una cuenta en OpenAI y en la sección de API keys, crear una nueva clave secreta.
6. En el archivo .env colocar el número de puerto y la clave secreta de OpenAI. 

### Ejecución del proyecto
1. Ejecutar el comando `npm start`.
2. Ejecutando el endpoint `/api/ask` en el navegador tiene que devolver el objeto JSON: `{ "message": "Test get" }`.
3. En una aplicación para hacer solicitudes HTTP (por ejemeplo Postman), ejecutar el método `POST` al endpoint `/api/ask`, con un request body JSON con la solicitud o indicación que le deseamos hacer GPT-3.5. Un ejemplo puede ser: `{ "prompt": "cuéntame un chiste" }`.

### Archivos del proyecto
```
📦gpt-back/
 ├── 📂node_modules/
 ├── 📂src/
 │   ├── 📂config/
 │   │   └── 📄index.config.js
 │   ├── 📂controllers/
 │   │   └── 📄gpt.controller.js
 │   ├── 📂gpt/
 │   │   └── 📄index.gpt.js
 │   ├── 📂router/
 │   │   └── 📄gpt.router.js
 │   │   ├── 📄index.router.js
 │   ├── 📄app.js
 │   └── 📄index.js
 ├── 📄.env
 ├── 📄.env.example
 ├── 📄.gitignore
 ├── 📄package-lock.json
 ├── 📄package.json
 └── 📄README.md
```

### Dependencias utilizadas
- cors
- dotenv
- express
- morgan
- openai
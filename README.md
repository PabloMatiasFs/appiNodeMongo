# 🚀 API REST con Node.js, TypeScript y MongoDB

Una API REST moderna construida con Node.js, Express, TypeScript y MongoDB que incluye autenticación JWT y gestión de usuarios.

## 📋 Características

- ✅ **Autenticación JWT** - Sistema seguro de autenticación
- ✅ **TypeScript** - Código tipado y mantenible
- ✅ **TypeORM** - ORM para MongoDB
- ✅ **Express.js** - Framework web rápido y minimalista
- ✅ **MongoDB** - Base de datos NoSQL
- ✅ **bcryptjs** - Encriptación segura de contraseñas
- ✅ **Morgan** - Logging de requests HTTP
- ✅ **CORS** - Soporte para Cross-Origin Resource Sharing

## 🛠️ Tecnologías Utilizadas

- **Backend:** Node.js, Express.js, TypeScript
- **Base de Datos:** MongoDB
- **ORM:** TypeORM
- **Autenticación:** JWT (JSON Web Tokens)
- **Encriptación:** bcryptjs
- **Logging:** Morgan

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- MongoDB instalado y ejecutándose
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd appiNodeMongo
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```
   
   Editar el archivo `.env` con tus configuraciones:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_PORT=27017
   DB_NAME=myapp
   JWT_SECRET=tu_jwt_secret_super_seguro
   NODE_ENV=development
   ```

4. **Compilar TypeScript**
   ```bash
   npm run build
   ```

5. **Ejecutar el servidor**
   ```bash
   # Desarrollo (con hot reload)
   npm run dev
   
   # Producción
   npm start
   ```

## 🔧 Scripts Disponibles

- `npm run build` - Compila TypeScript a JavaScript
- `npm run dev` - Ejecuta en modo desarrollo con hot reload
- `npm start` - Ejecuta en modo producción

## 📚 Documentación de la API

### Base URL
```
http://localhost:5000
```

### Endpoints Disponibles

#### 🔐 Autenticación

**POST** `/login`
- **Descripción:** Autenticar usuario y obtener token JWT
- **Body:**
  ```json
  {
    "email": "usuario@ejemplo.com",
    "password": "contraseña123"
  }
  ```
- **Respuesta exitosa:**
  ```json
  {
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "60f7b3b3b3b3b3b3b3b3b3b3",
      "firstName": "Juan",
      "lastName": "Pérez",
      "email": "usuario@ejemplo.com"
    }
  }
  ```

#### 👥 Gestión de Usuarios

**GET** `/users`
- **Descripción:** Obtener todos los usuarios
- **Headers:** `Authorization: Bearer <token>`
- **Respuesta:**
  ```json
  {
    "success": true,
    "data": [
      {
        "id": "60f7b3b3b3b3b3b3b3b3b3b3",
        "firstName": "Juan",
        "lastName": "Pérez",
        "age": 25,
        "email": "usuario@ejemplo.com"
      }
    ]
  }
  ```

**POST** `/users`
- **Descripción:** Crear nuevo usuario
- **Body:**
  ```json
  {
    "firstName": "Juan",
    "lastName": "Pérez",
    "age": 25,
    "email": "usuario@ejemplo.com",
    "password": "contraseña123"
  }
  ```

**GET** `/users/:id`
- **Descripción:** Obtener usuario por ID
- **Headers:** `Authorization: Bearer <token>`

**PUT** `/users/:id`
- **Descripción:** Actualizar usuario
- **Headers:** `Authorization: Bearer <token>`
- **Body:** Campos a actualizar

**GET** `/users/age/:number`
- **Descripción:** Buscar usuarios por edad
- **Headers:** `Authorization: Bearer <token>`

**GET** `/users/name/:string`
- **Descripción:** Buscar usuarios por nombre
- **Headers:** `Authorization: Bearer <token>`

#### 🏠 Página de Inicio

**GET** `/`
- **Descripción:** Página de bienvenida
- **Respuesta:**
  ```json
  {
    "message": "Bienvenido a la API REST",
    "version": "1.0.0",
    "status": "running"
  }
  ```

## 🔒 Autenticación

La API utiliza JWT (JSON Web Tokens) para autenticación. Para acceder a endpoints protegidos:

1. Autentícate con `/login` para obtener un token
2. Incluye el token en el header `Authorization: Bearer <token>`

## 📁 Estructura del Proyecto

```
src/
├── controllers/     # Controladores de la API
├── entity/         # Entidades de TypeORM
├── routes/         # Definición de rutas
├── middleware/     # Middlewares personalizados
├── services/       # Lógica de negocio
├── config/         # Configuraciones
├── utils/          # Utilidades
└── index.ts        # Punto de entrada
```

## 🚨 Códigos de Estado HTTP

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## 🔧 Configuración de Desarrollo

### Variables de Entorno

| Variable | Descripción | Valor por Defecto |
|----------|-------------|-------------------|
| `PORT` | Puerto del servidor | `5000` |
| `DB_HOST` | Host de MongoDB | `localhost` |
| `DB_PORT` | Puerto de MongoDB | `27017` |
| `DB_NAME` | Nombre de la base de datos | `myapp` |
| `JWT_SECRET` | Secreto para JWT | Requerido |
| `NODE_ENV` | Entorno de ejecución | `development` |

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

- **Tu Nombre** - [@tu-usuario](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- TypeORM por el excelente ORM
- Express.js por el framework web
- MongoDB por la base de datos NoSQL

---

⭐ Si este proyecto te ha sido útil, ¡dale una estrella al repositorio!
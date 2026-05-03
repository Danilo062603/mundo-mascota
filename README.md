# 🐶 Mundo Mascota Web

Una aplicación web moderna para la compra de productos para mascotas y agendamiento de citas veterinarias.

---

## 📖 Tabla de contenidos

- [Descripción](#descripción)
- [Funcionalidades](#funcionalidades)
- [Stack Tecnológico](#stack-tecnológico)
- [Arquitectura](#arquitectura)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas y Endpoints](#rutas-y-endpoints)
- [Entidades Principales](#entidades-principales)
- [Cómo Ejecutar](#cómo-ejecutar)
- [Estado del Proyecto](#estado-del-proyecto)
- [Autores](#autores)

---

## 📌 Descripción

**Mundo Mascota** es una plataforma integral que centraliza servicios esenciales para el cuidado de mascotas:

✅ Catálogo completo de productos  
✅ Sistema de compras (en fase de simulación)  
✅ Agendamiento de citas veterinarias  
✅ Confirmación automática de citas  
✅ Interfaz 100% responsive  

---

## ⚙️ Funcionalidades Principales

| Funcionalidad | Descripción | Estado |
|---|---|---|
| 🛒 Productos | Catálogo con filtros y búsqueda | ✅ Implementado |
| 💳 Compras | Sistema simulado | 🔄 En desarrollo |
| 📅 Citas | Reserva de citas veterinarias | ✅ Implementado |
| ✔️ Confirmación | Validación de citas | ✅ Implementado |
| 📱 Responsive | Adaptado a todos los dispositivos | ✅ Implementado |

---

## 🛠️ Stack Tecnológico

### **Frontend** (Actual)
- ✓ HTML5 (Semántico)
- ✓ CSS3 (Flexbox y Grid)
- ✓ JavaScript (Vanilla)

### **Backend** (Planeado)
- ⏳ Node.js + Express.js
- ⏳ Validación de datos
- ⏳ API REST

### **Base de Datos** (Planeado)
- ⏳ MySQL
- ⏳ Gestión de usuarios
- ⏳ Historial de compras y citas

---

## 🧠 Arquitectura

- **Patrón:** MVC (Modelo - Vista - Controlador)
- **Estilo:** Cliente - Servidor
- **Comunicación:** API REST (planeada)

---

## 📁 Estructura del Proyecto

```
mundo-mascota-web/
│
├── models/              # Definición de entidades
├── views/               # Archivos HTML
├── controllers/         # Lógica de negocio
├── public/              # Estilos e imágenes
│   ├── css/
│   ├── js/
│   └── img/
├── index.html           # Página principal
└── README.md            # Este archivo
```

---

## 🖥️ Vistas Implementadas

| Vista | Descripción |
|---|---|
| 🏠 Home | Página principal con bienvenida |
| 🛍️ Productos | Listado completo de productos |
| 📝 Agendar Cita | Formulario para reservar citas |
| ✅ Confirmación | Resumen de cita agendada |

---

## 🔗 Rutas y Endpoints

| Vista | Ruta | Método | Endpoint | Descripción |
|---|---|---|---|---|
| Productos | `/productos` | GET | `/api/productos` | Obtener lista de productos |
| Detalle | `/productos/:id` | GET | `/api/productos/:id` | Obtener un producto |
| Crear Cita | `/citas` | POST | `/api/citas` | Registrar nueva cita |
| Listar Citas | `/citas` | GET | `/api/citas` | Obtener citas |
| Editar Cita | `/citas/:id` | PUT | `/api/citas/:id` | Actualizar cita |
| Cancelar | `/citas/:id` | DELETE | `/api/citas/:id` | Eliminar cita |

---

## 🧾 Entidades Principales

### **Producto**
```json
{
  "id": "string (UUID)",
  "nombre": "string (requerido)",
  "precio": "number (> 0)",
  "descripcion": "string (opcional)",
  "categoria": "string",
  "stock": "number"
}
```

### **Cita Veterinaria**
```json
{
  "id": "string (UUID)",
  "nombre": "string (requerido)",
  "mascota": "string (requerido)",
  "fecha": "date (requerido)",
  "servicio": "string (requerido)",
  "telefono": "string (requerido)",
  "email": "string (requerido)"
}
```

---

## ▶️ Cómo Ejecutar

### **Opción 1: Directamente en el navegador**
```bash
git clone https://github.com/Danilo062603/mundo-mascota.git
cd mundo-mascota
# Abre index.html en tu navegador
```

### **Opción 2: Con servidor local**
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# Accede a: http://localhost:8000
```

---

## 📊 Estado del Proyecto

```
🟡 Fase 1: Frontend sin Backend (EN DESARROLLO)
├── ✅ Diseño de interfaz
├── ✅ Estructura HTML
├── ✅ Estilos CSS
├── 🔄 Interactividad JavaScript
└── ⏳ Integración con Backend

🟠 Fase 2: Backend (PLANEADO)
├── ⏳ Servidor Express.js
├── ⏳ Base de datos MySQL
├── ⏳ Autenticación de usuarios
└── ⏳ API REST completa
```

---

## 👨‍💻 Autores

| Nombre | Rol |
|---|---|
| **Danilo Ramírez** | Desarrollador |
| **Julián Ramírez** | Desarrollador |
| **Luis David Correa** | Desarrollador |
| **Carlos Andrés Arroyave** | Desarrollador |

---

## 📚 Información Académica

- **Curso:** IF2003 - Programación Web
- **Institución:** Institución Universitaria de Envigado

---

## 📝 Notas

> Este proyecto corresponde al **avance del curso**, enfocado en:
> - Diseño de interfaz
> - Prototipado
> - Definición de arquitectura
> 
> El **backend será implementado** en fases posteriores.

---

**Última actualización:** 2026-04-18 14:30:21

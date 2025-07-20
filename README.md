# 📝 Clase guiada: TODO APP (Lista de tareas)

Este es un ejercicio guiado del curso de React donde construiremos paso a paso una **aplicación de lista de tareas**.

La app incluye:

- Gestión de tareas (añadir, eliminar, completar)
- Marcar tareas como favoritas ⭐
- Navegación con pestañas (`todos`, `favorites`, `newTodo`)
- Footer con opción para resetear todas las tareas
- Estilos con CSS para cada componente

---

## 🧑‍💻 Instrucciones para iniciar el proyecto

1. **Clona el repositorio del ejercicio en tu ordenador en la carpeta que desees:**

```bash
git clone https://github.com/Eleven-Code-School/react-todo-app
cd react-todo-app
```
IMPORTANTE Cámbiate a la rama `starter-code` para empezar desde el código base.

Si no cambias de rama, estarás trabajando sobre la rama `main` que ya tiene el código final.

2. **Elimina la carpeta `.git` para desvincularte del repositorio original:**
Tienes que eliminar la carpeta `.git` estando dentro del proyecto clonado y **en la rama `starter-code`**. Esto es importante para que puedas iniciar tu propio repositorio sin conflictos.

```bash
rm -rf .git (no uses este comando, te recomiendo eliminar la carpeta manualmente desde vscode o tu explorador de archivos)
```

   Esto eliminará el historial de commits y la conexión con el repositorio original.
```
    Ahora, puedes modificar este Readme si lo deseas.
```

3. **Crea tu propio repositorio en GitHub.**

   - Accede a [https://github.com](https://github.com)
   - Crea un nuevo repositorio vacío, por ejemplo: `react-todo-app`
   - No marques ninguna opción de inicialización (ni README ni .gitignore)

4. **Inicia un nuevo repositorio git en local y vincúlalo con el tuyo:**

```bash
git init
git remote add origin [EL ENLACE A TU REPOSITORIO]
```

5. **Crea la rama `develop` y empieza desde ahí:**

```bash
git add .
git commit -m "Inicio del proyecto TODO App"
git push -u origin main
# Crea la rama develop y cámbiate a ella
git checkout -b develop
git push -u origin develop
```

---

## 📚 Explicación de la Clase

En esta clase estamos reforzando los conceptos vistos hasta ahora en el curso:

### ✅ Temas trabajados:

- **Renderizado condicional** → Para mostrar formularios o listas dependiendo de la tab activa.
- **Renderizado de listas** → Mapeo de tareas en componentes dinámicos.
- **Eventos** → `onClick`, `onChange`, `onSubmit`.
- **Estado (`useState`)** → Para controlar tareas, favoritos y pestañas.
- **CSS Modules** → Aislamiento de estilos por componente.
- **Patrón de diseño HOC (Higher Order Component)** → Para reutilizar lógica de pestañas. Y donde todo el estado de la aplicación se encuentra en el componente `App` que es el padre de todos los componentes y distribuye las props necesarias a cada uno.
- **Estructura de carpetas limpia** → Separación en componentes reutilizables.
- **Buenas prácticas de Git** → Trabajo por ramas (`develop`) y funcionando con Github Flow y Git Flow.

### 🎯 Objetivo

El objetivo es que practiques:
- Manipulación del estado y eventos en React
- Componentización clara y ordenada
- Flujo de trabajo real con Git y GitHub
- Refactorización usando objetos (`TabTypes`) y arrays dinámicos

---

## 🛠️ Scripts útiles

Instala las dependencias y levanta el servidor:

```bash
npm install
npm run dev
```

---

¿Listo para programar? ¡Empieza a desarrollar nuevas funcionalidades desde las ramas de `feature/` correspondientes?!

Adelante Samurái 👨‍💻

## 📝 Notas finales

Recuerda que este ejercicio es una guía para que practiques y refuerces tus conocimientos. Puedes extender la funcionalidad de la aplicación como desees, añadiendo nuevas características o mejorando el diseño.

¡Diviértete programando y aprendiendo React! 🚀

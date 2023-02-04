# Video 08 - Ejercicio

**Paso 1: Instalar node y npm**

En primer lugar vamos a desbloquear el entorno para poder trabajar con React. Por ello la primera parte del ejercicio va a ser instalar la última versión LTS de Node y NPM desde su página web oficial:

[https://nodejs.org/en](https://nodejs.org/en/)

Cuando hayas terminado recuerda ejecutar por consola **node -v** y **npm -v** para revisar que ambos comandos te funcionan

**Paso 2: Proyecto React**

Crea una estructura de un proyecto base haciendo uso de CRA (create react app)

```jsx
npx create-react-app mi-primer-proyecto-react
```

Cuando el comando haya terminado de instalar recuerda levantar el proyecto ejecutando **npm start** dentro de la carpeta del proyecto, deberás ver el logo de react en la url [http://localhost:3000](http://localhost:3000) 

![react](/docs/assets/react.png)

Sube el proyecto generado por create react app a tu Github

**Paso 3: Repaso operadores**

Indica qué devolverán las siguientes ejecuciones:

```jsx
// OPERADOR ||
console.log(false || {});
console.log("string" || true);
console.log([] || 100);
console.log(null || "Prueba");
console.log("" || true);
console.log(undefined || false);

// Operador &&
console.log(false && {});
console.log("string" && true);
console.log([] && 100);
console.log(null && "Prueba");
console.log("" && true);
console.log(undefined && false);

// Operador ??
console.log(false ?? {});
console.log("string" ?? true);
console.log([] ?? 100);
console.log(null ?? "Prueba");
console.log("" ?? true);
console.log(undefined ?? false);
```

Como puedes probar todas en la consola, deberás indicar el valor que devuelven y además una pequeña explicación de por qué da esa respuesta en cada caso.

Deja las respuestas dentro del mismo repositorio que el proyecto react. Puedes subir un JS o un fichero txt, lo que prefieras.

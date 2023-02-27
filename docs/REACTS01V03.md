# Operadores JS: ||, && y ??

**Operador AND**

El operador (`&&`) se utiliza para evaluar dos expresiones y retornar el valor de la primera expresión si es falsa, o el valor de la segunda expresión si la primera es verdadera. 

Por ejemplo:

```jsx
let isLoggedIn = true;
let user = isLoggedIn && "John Doe";
console.log(user); // "John Doe"

isLoggedIn = false;
user = isLoggedIn && "John Doe";
console.log(user); // false
```

**Operador OR**

El operador (`||`) se utiliza para evaluar dos expresiones y retornar el valor de la primera expresión si es verdadera, o el valor de la segunda expresión si la primera es falsa.

Por ejemplo:

```jsx
let errorMessage = null;
let message = errorMessage || "No hay errores";
console.log(message); // "No hay errores"

errorMessage = "Ha ocurrido un error";
message = errorMessage || "No hay errores";
console.log(message); // "Ha ocurrido un error"
```

**Nullish Coalescing**

El operador "null coalescing" (`??`) es una característica de JavaScript que permite evaluar una expresión y devolver un valor alternativo si la expresión es `null` o `undefined`. 

La sintaxis es la siguiente:

```jsx
expression1 ?? expression2
```

Si `expression1` es `null` o `undefined`, se devolverá `expression2`. Si `expression1` tiene un valor diferente a `null` o `undefined`, se devolverá `expression1`.

Aquí tienes algunos ejemplos de cómo usar el operador "null coalescing" en JavaScript:

```jsx
let name = "John";
let displayName = name ?? "Desconocido";
console.log(displayName); // "John"

let age;
let displayAge = age ?? 25;
console.log(displayAge); // 25
```

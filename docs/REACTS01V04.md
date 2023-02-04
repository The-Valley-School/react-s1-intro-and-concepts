# Video 04 - Operadores 2: ternarios y optional chaining

**Optional Chaining**

El "optional chaining" (encadenado opcional) es una característica de JavaScript que permite acceder a una propiedad de un objeto sin tener que preocuparse por si el objeto o alguno de sus padres es `null` o `undefined`. La sintaxis es la siguiente:

```jsx

object?.property
```

El signo de interrogación antes de la flecha (**`.`**) indica que la propiedad sólo se accederá si el objeto existe y no es `null` o `undefined`.

Aquí tienes algunos ejemplos de cómo usar el "optional chaining" en JavaScript:

```jsx
let user = { name: "John", age: 30 };
console.log(user?.name); // "John"

let address = user?.address?.street;
console.log(address); // undefined
```

En el primer ejemplo, se accede a la propiedad `name` del objeto `user`, que existe y tiene un valor.

En el segundo ejemplo, se intenta acceder a la propiedad `street` de la propiedad `address` del objeto `user`. Como `address` no existe, se devolverá `undefined` sin causar un error.

**Ternarios**

El operador ternario es una forma condicional de evaluar expresiones en JavaScript. Es una alternativa a la estructura de control `if-else` y se escribe como `condition ? expression1 : expression2`.

La sintaxis del operador ternario funciona de la siguiente manera:

- Si `condition` es `true`, se evalúa `expression1` y el resultado es el valor de la expresión completa.
- Si `condition` es `false`, se evalúa `expression2` y el resultado es el valor de la expresión completa.

Aquí tienes algunos ejemplos de cómo usar el operador ternario en JavaScript:

```jsx
// Determinar el mayor de dos números
let x = 10;
let y = 20;
let max = x > y ? x : y;
console.log(max); // 20

// Devolver un mensaje diferente según si una variable es verdadera o falsa
let isEmailVerified = true;
let message = isEmailVerified ? "Email is verified" : "Email is not verified";
console.log(message); // "Email is verified"

// Asignar un valor a una variable según una condición
let status = "active";
let color = status === "active" ? "green" : "red";
console.log(color); // "green"
```

# Repaso arrays: map y filter

**map**

map es un método que transforma cada elemento de un array y devuelve un nuevo array con los elementos transformados. Por ejemplo, si tienes un array de números y quieres obtener un nuevo array con los mismos números multiplicados por 2, puedes usar el método `map`
 para hacerlo.

Aquí tienes un ejemplo:

```jsx
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

**filter**

filter es un método que filtra los elementos de un array según una condición dada y devuelve un nuevo array con los elementos que cumplen esa condición. Por ejemplo, si tienes un array de números y quieres obtener un nuevo array con solo los números pares, puedes usar el método `filter` para hacerlo. 

Aquí tienes un ejemplo:

```jsx
let words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let fiveLettersWords = words.filter(function(word) {
  return word.length === 5;
});
console.log(fiveLettersWords); // ['apple']
```

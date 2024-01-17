# React lists
En esta clase hemos aprendido cómo crear listas en React.

Cuando tenemos un array de elementos, podemos crear una lista de los mismos usando el método map().

Ejemplo:
```jsx
function NumberList() {
    const numbers = [1, 2, 3, 4, 5];

    const listItems = numbers.map((number, index) =>
        <li key={index}>{number}</li> // cada elemento necesita una key única. En este caso usamos el índice del array, pero cuando sea posible es mejor usar un identificador único de cada elemento (por ejemplo, el id de la base de datos).
    );

    return (
        <ul>{listItems}</ul>
    );
}
```

# Video 07 - Instalación de CRA y primer proyecto

En este video hablaremos sobre la herramienta de consola Create React App. Aquí podrás encontrar la documentación oficial de Create React App (CRA):

[https://es.reactjs.org/docs/create-a-new-react-app.html](https://es.reactjs.org/docs/create-a-new-react-app.html)

Este es el comando que usaremos para ejecutar CRA y crear un proyecto React:

`npx create-react-app my-app`

Recuerda: No instales CRA de forma global, ya que esto te dejará en tu ordenador una versión “congelada” de Create React App:

~~`npm i create-react-app --global`~~

Es mejor usar siempre la última disponible haciendo uso del comando indicando anteriormente. Por ello, si ya habías instalado CRA globalmente, lo puedes desinstalar con este comando:

`npm uninstall create-react-app --global`

**A continuación te dejamos el esquema de carpetas que te genera Create React App:**

- README.md → Fichero con información del proyecto
- node_modules → Librerías descargadas de NPM
- package.json → Dependencias y comandos de NPM
- .gitignore → Fichero para git, indica qué cosas debe ignorar
- /public
    - favicon.ico → Icono de la web (se muestra en la pestaña del navegador)
    - index.html → Documento principal de nuestra SPA
    - logo192.png → Icono que se usa al guardar la web como favorito en el navegador
    - logo512.png → Otro icono que se usa al guardar la web como favorito en el navegador
    - manifest.json → Info para el navegador, permite añadir la web a la pantalla de inicio
    - robots.txt → Info para los buscadores (google, bing… etc)
- /src
    - App.css → Estilos de nuestro componente principal
    - App.js → Componente principal App
    - App.test.js → Fichero de test para el componente App.js
    - index.css → Estilos globales
    - index.js → Fichero JS que arrancará React
    - logo.svg → Logo usado en el componente App.js (se puede borrar)
    - reportWebVitals.js → Permite medir el performance de nuestra web
    - setupTests.js → Config para los tests

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/react-s1-intro-and-concepts>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --main-color-text: #6a6e73;
  --header-color-text: #222;
  --border-color: #c9ced4;
  --link-color-text: #467fbf;
  --bg-color: #f0f2f5;
  --icons-accent-color: #749fcf;
}
body {
  min-width: 260px;
  background: var(--bg-color);
  font-size: 10px;
}
#app {
  font-family: 'Archivo Narrow', Arial, Helvetica, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-color-text);
}

h1,
h2,
h3 {
  color: var(--header-color-text);
}
h1 {
  font-size: 3em;
}
h2,
h3 {
  font-size: 2.2em;
}
ul {
  padding: 0;
  list-style: none;
}
button {
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}
@media screen and (max-width: 960px) {
  body {
    font-size: 8px;
  }
  h1 {
    font-size: 2.5em;
  }
}
</style>

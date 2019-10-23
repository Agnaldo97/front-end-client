<template>
  <div id="app">
    <div id="nav">

    </div>
    
      <router-view/>

  </div>
</template>

<style>
body {
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 0;
  height: 100vh;
  background-color: #004186
}

h1 {
  font-size: 1.5em;
}

svg {
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
.home {
  height: 88vh;
}
</style>


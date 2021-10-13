<template>
  <div id="app">
    <img alt="Vue logo" src="https://www.naturellementfrancais.com/medias/images/meteo.png" width="800">
    <div>
      <router-link to="/cities">
        <button class="button">Go to Cities</button>
      </router-link><!--Lien route contenu composant CitiesList-->
      <router-view></router-view> <!--Navigation route(s)-->
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button {
  background-color: aliceblue;

}
.button:hover {
  background-color: #2d654e;
  color: #ffffff
 }

</style>

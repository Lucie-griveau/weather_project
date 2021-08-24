<template>
  <div class="hello">
    <h1>Bienvenue à {{ name }}</h1>
    <h2>Aujourd'hui, la météo annonce: {{ weather }}</h2>
    <p>La température au sol est actuellement de: {{ temperature }} °C</p>
    <p>Date de dernière mise à jour: {{ updatedAt.toLocaleString() }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data (){
    return {
      name: 'Grenoble', // nom de la ville
      weather: 'Peu nuageux', // descriptif météo
      temperature: 20.55, // température en °C
      updatedAt: new Date() // date de dernière mise à jour
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

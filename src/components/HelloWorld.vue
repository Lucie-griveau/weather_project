<template>
  <div class="hello">
    <City 
    :name="name"
    :weather="weather"
    :temperature="temperature"
    :updatedAt="updatedAt"
    ></City>
  </div>
</template>

<script>
import City from './City.vue'

export default {
  name: 'HelloWorld',
  components: {
    City
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

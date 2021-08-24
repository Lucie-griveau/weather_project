<template>
  <div class="city">
    <h1>Bienvenue à {{ name }}</h1>
    <h2>Aujourd'hui, la météo annonce: {{ weather }}</h2>
    <p>La température au sol est actuellement de: {{ temperature }} °C</p>
    <p>Date de dernière mise à jour: {{ updatedAt.toLocaleString() }}</p>
  </div>
</template>

<script>
export default {
  name: "City",
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

<style scoped>

</style>
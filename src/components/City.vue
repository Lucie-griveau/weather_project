<template>
  <div class="city">
    <h1>Bienvenue à {{ name }}</h1>
    <h2>Aujourd'hui, la météo annonce {{ weather.toLowerCase() }}</h2>
    <p>La température au sol est actuellement de {{ temperature }} °C</p>
    <p>Date de dernière mise à jour: {{ updatedAt }}</p>
  </div>
</template>

<script>
export default {
    name: "City",
    props: {
        name: String,
        weather: String,
        temperature: Number,
        updatedAt: String,
    },
}
</script>

<style scoped>

</style>
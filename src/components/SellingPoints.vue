<template>
  <ul>
    <li v-for="point in points" :key="point.id">
      <font-awesome-icon :icon="['fas', 'check']" />
      <span>{{ point }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SellingPoints',
  data() {
    return {
      points: [
        'Meer dan 800 workouts',
        'Afvallen, fit worden, yoga en veel meer',
        "1000+ recepten en kookvideo's",
        "Voedingsschema's in functie van je doel",
        'Digitale begeleiding aangepast aan jouw vooruitgang',
        'MyFitchannel om je vooruitgang bij te houden'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  margin: 3.2em 0;
  color: var(--header-color-text);
}
li {
  margin: 1em 0;
  padding-left: 1.9em;
  position: relative;
  font-size: 1.6em;
}
svg {
  position: absolute;
  left: 0;
  top: 3px;
  color: var(--icons-accent-color);
}
</style>

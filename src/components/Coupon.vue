<template>
  <form action="">
    <div class="form">
      <font-awesome-icon :icon="['fas', 'tag']" />
      <input
        type="text"
        inputmode="numeric"
        placeholder="Kortingscode (optioneel)"
        v-model.number="coupon"
      />
      <button type="submit">Verzilver</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Coupon',
  props: {
    msg: String
  },
  data() {
    return {
      coupon: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  position: relative; /* for button & icon position */
}
input {
  box-sizing: border-box;
  padding-left: 2.5em;
  padding-right: 95px; /* fixed button width */
  width: 100%;
  height: 3.2em; /* = submit height */
  border: 1px solid var(--border-color);
  border-radius: 11px;
  font-size: 1.4em;
}
::placeholder {
  font-size: 1em;
  color: var(--border-color);
}
button {
  height: 3.2em; /* = input height */
  width: 95px; /* fixed to input padding-right */
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  font-size: 1.4em;
  text-align: center;
}

svg {
  width: 1.6em !important;
  height: 1.6em;
  margin-top: -0.8em;
  position: absolute;
  left: 12px;
  top: 50%;
  color: var(--border-color);
}
</style>

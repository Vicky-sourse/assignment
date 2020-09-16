<template>
  <div>
    <section
      :class="{
        popular: plan.stickerVal == 'populair',
        discount: plan.stickerVal == '30% voordeliger'
      }"
    >
      <div class="plan-content">
        <h2>
          <strong v-html="plan.price"></strong>
          <span v-html="plan.period"></span>
          <p>{{ plan.terms }}</p>
        </h2>
        <div class="sticker" v-if="plan.sticker">
          <font-awesome-icon
            v-if="plan.stickerVal == 'populair'"
            :icon="['fas', 'star']"
          />
          <font-awesome-icon
            v-if="plan.stickerVal == '30% voordeliger'"
            :icon="['fas', 'percentage']"
          />
          <span>{{ plan.stickerVal }}</span>
        </div>
        <button>Start {{ plan.button }}</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PricingPlan',
  props: {
    plan: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  margin-bottom: 1em;
  padding: 5%;
  border: 1px solid var(--border-color);
  border-radius: 10px;
}
.plan-content {
  position: relative; /* for absolute position of .sticker */
}
h2 {
  margin-top: 0;
}
h2 span {
  font-size: 0.7em; /* inherits from H2 2.2*/
  font-weight: normal;
  color: var(--main-color-text);
}
h2 p {
  margin: 0.5em 0;
  font-size: 0.8em; /* inherits from H2 2.2*/
  font-weight: normal;
}
button {
  width: 100%;
  height: 3em;
  font-size: 1.4em;
  border-radius: 11px;
  border: none;
  color: #fff;
  background-image: linear-gradient(to right, #ffa749, #e9721a);
}
.popular {
  position: relative; /* for absolute position of ::after */
  background: #f0f2f5;
  overflow: hidden;
}
.popular::after {
  width: 200px;
  height: 200px;
  position: absolute;
  content: '';
  bottom: -119px;
  left: -88px;
  transform: rotate(82deg);
  background-image: url(/img/bg-bubbles-popular.68e6fc3b.png);
  background-size: contain;
}
.sticker {
  display: flex; /* vertical-align child icon */
  align-items: center;
  padding: 0 1em 0 0.6em;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  border-radius: 11px;
  font-size: 1.4em;
}
svg {
  width: 1.3em !important;
  height: 1.8em;
  margin-right: 0.5em;
}
.discount svg {
  width: 0.75em !important;
}
.popular button {
  background-image: linear-gradient(to right, #00b9d2, #236ab4);
}
.discount button {
  background-image: linear-gradient(to right, #9149e6, #601cb0);
}
.popular .sticker {
  background-color: #236ab4;
  text-transform: capitalize;
}
.discount .sticker {
  background-color: #601cb0;
}
</style>

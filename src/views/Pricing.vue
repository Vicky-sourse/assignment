<template>
  <div class="wrapper">
    <main>
      <header>
        <h1 class="home">Kies je abonnement</h1>
        <p>
          Ter verificate van je naam en bankrekening vragen wij je om 1 cent te
          betalen via iDeal. <br />Alleen dan kun je gebruikmaken van de actie.
        </p>
      </header>
      <section class="col col-left">
        <div v-for="plan in plans" v-bind:key="plan.id">
          <PricingPlan :plan="plan" />
        </div>
      </section>
      <section class="col col-right">
        <Coupon />
        <SellingPoints />
      </section>
    </main>
    <FAQ />
  </div>
</template>

<script>
// @ is an alias to /src
import PricingPlan from '@/components/PricingPlan.vue'
import Coupon from '@/components/Coupon.vue'
import SellingPoints from '@/components/SellingPoints.vue'
import FAQ from '@/components/FAQ.vue'

export default {
  name: 'Pricing',
  components: {
    PricingPlan,
    Coupon,
    SellingPoints,
    FAQ
  },
  data() {
    return {
      plans: [
        {
          price: '&#8364 0,01',
          period: ' ' + '/ eenmalig, daarna &#8364 14,99 per maand',
          terms: 'Maadelijks opzegbaar',
          button: 'proefmaand',
          sticker: false
        },
        {
          price: '&#8364 11,99',
          period: ' ' + '/ per maand',
          terms: '6 maanden abonnement',
          button: 'als fanatiekeling',
          sticker: true,
          stickerVal: 'populair'
        },
        {
          price: '&#8364 9,99',
          period: ' ' + '/ per maand',
          terms: '12 maanden abonnement',
          button: 'als expert',
          sticker: true,
          stickerVal: '30% voordeliger'
        }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  width: 70%;
  max-width: 960px;
  margin: 50px auto;
}
main {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  background: #fff;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  box-shadow: 2px 9px 20px -5px rgba(201, 206, 212, 0.87);
}
main::after {
  width: 180px;
  height: 173px;
  content: '';
  position: absolute;
  top: -60px;
  right: -85px;
  background-image: url(../assets/bg-bubbles-main.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom left;
}
header {
  box-sizing: border-box;
  padding: 0 3.8%;
  width: 100%;
  text-align: center;
}
h1 {
  margin: 1.2em 0 0.5em;
}
.col {
  box-sizing: border-box;
  width: 50%;
  padding: 2% 3.8%;
}
header p {
  font-size: 1.6em;
}
@media screen and (min-width: 1000px) {
  .col-left {
    padding-right: 5%;
  }
  .col-right {
    padding-left: 5%;
  }
}
@media screen and (max-width: 960px) {
  .wrapper {
    width: 100%;
  }
  main {
    display: block;
  }
  .col {
    width: 100%;
  }
}
</style>

<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from '../components/Footer.vue';
import FooterComponent from '../components/Footer.vue';
import {store} from "../main"
import axios from "axios";
export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      logo: 'logo_secondary.svg',
      classSVG: 'header_svg_undohome',
      classNav: 'header_nav_undohome',
      userOrders: []
    };
  },
  methods: {
    async getting_orders() {
      let response = await axios.post("/orders", {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password
      })
      console.log("получение")
      console.log(response)
      this.userOrders = response.data.orders
      console.log(this.userOrders)
    }
  }
}
</script>
<template>
  <header-component :logo="logo"  :classSVG="classSVG" :classNav="classNav"></header-component>
  <main>
    <section class="account">
      <div class="account_container">
        <div class="account_nav">
          <button @click="getting_orders">История заказов</button>
          <button>Личные данные</button>
          <button>Выйти</button>
        </div>
      </div>

    </section>
  </main>
  <footer-component></footer-component>
</template>
<style scoped>
.account_container {
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
}
button {
  width: 228px;
  text-align: center;
  padding: 15px 0;
  border: none;
  background-color: #FFFFFF;
}
.account_nav {
  border-bottom: 1px solid #939393;
  border-top: 1px solid #939393;
  text-align: center;
}
.account {
  padding: 144px 0 0 0;
}
</style>
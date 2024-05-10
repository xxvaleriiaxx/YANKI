<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from '../components/Footer.vue';
import Order from '../components/Order.vue';
import PersonalData from '../components/PersonalData.vue'
import {store} from "../main"
import axios from "axios";
import router from "../router";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    Order,
    PersonalData
  },
  data() {
    return {
      logo: 'logo_secondary.svg',
      classSVG: 'header_svg_undohome',
      classNav: 'header_nav_undohome',
      userOrders: [],
      personalData: {
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: ""
      },
      orderActive: false,
      personalActive: false,
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
      this.orderActive = true
      this.personalActive = false
    },
    async getting_personalData() {
      let response = await axios.post("/personalData", {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password
      })
      console.log("получение")
      console.log(response)
      this.orderActive = false
      this.personalActive = true
      this.personalData.email = response.data.email
      this.personalData.firstName = response.data.data.firstName
      this.personalData.lastName = response.data.data.lastName
      this.personalData.phoneNumber = response.data.data.phoneNumber
      this.personalData.address = response.data.data.address
      console.log(this.personalData)
    },
    async update_personalData() {
      console.log(this.personalData.lastName)
      let response = await axios.post("/update_personal_data", {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        personalData: this.personalData
      })
      console.log("получение")
      console.log(response)
      this.$store.commit('getting_data_user', {
        email: response.data,
        password: this.$store.state.user.password
      })
    },
    exit() {
      this.$store.commit('getting_data_user', {
        email: "",
        password: ""
      })
      this.$router.push({
        name: 'home',
      })
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
          <button @click="getting_orders" :class="{'account_nav_active': orderActive}">История заказов</button>
          <button @click="getting_personalData" :class="{'account_nav_active': personalActive}">Личные данные</button>
          <button @click="exit">Выйти</button>
        </div>
        <div class="account_orders" v-if="orderActive">
          <Order v-for="order in userOrders" :order="order"></Order>
        </div>
        <div class="personal_data" v-if="personalActive">
          <personal-data :personalData="personalData" v-on:update_personalData="update_personalData"></personal-data>
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
.account_orders {
  margin-top: 20px;
}
.account_nav_active {
  color: #FFFFFF;
  background-color: #E0BEA2;
}
</style>
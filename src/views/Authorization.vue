<template>
  <div class="authorization_popup">
    <div class="authorization_popup_container">
      <h1 class="authorization_title">Авторизация</h1>
      <form class="authorization_form" @submit.prevent="gettingData">
        <input type="text" placeholder="Ваш e-mail" v-model="email">
        <input type="text" placeholder="Ваш пароль" v-model="password">
        <button class="authorization_form_button">Войти</button>
      </form>
      <div class="authorization_cross">
        <img src="../assets/cross.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    classNav: String,
    classSVG: String,
    logo: String
  },
  data() {
    return {
      email: "",
      password: "",
      user_data: {}
    }
  },
  methods: {
    async gettingData() {
      console.log(this.email, this.password)
      let response = await axios.post("/users", {
        email: this.email,
        password: this.password
      })
      this.user_data = response.data
      console.log(this.user_data)
      this.getting_data()
    },
    getting_data() {
      this.$store.commit('getting_data', this.user_data)
      console.log("Vuex")
      console.log(this.$store.state.user)
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="authorization_popup">
    <div class="authorization_popup_container">
      <h1 class="authorization_title">Авторизация</h1>
      <form class="authorization_form" @submit.prevent="gettingData">
        <input type="text" placeholder="Ваш e-mail" v-model="email">
        <input type="text" placeholder="Ваш пароль" v-model="password">
        <div class="error" v-if="error">Неверная почта или пароль</div>
        <button class="authorization_form_button">Войти</button>
      </form>
      <a @click="$router.back()" class="authorization_cross">
        <img src="../assets/cross.svg" alt="">
      </a>
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
      user_data: {},
      error: false
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
      if (this.user_data) {
        this.getting_data()
        this.$router.back()
      }
      else {
        this.error = true
      }
      console.log(this.user_data)

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
.authorization_cross {
  cursor: pointer;
}
.error {
  color: #FF0000;
}
.authorization_popup {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  text-align: center;

  transform: translate(-50%, -50%);

}

.authorization_popup {
  background: rgba(0,0,0,0.3);
}
.authorization_popup_container {
  width: 600px;
  height: 382px;
  background-color: #fff;
  padding: 50px 100px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.authorization_title {
  font-size: 20px;
  padding-bottom: 20px;
}
input {
  font-size: 16px;
  color: rgba(35,35,35,0.8);
  padding: 16px 19px;
  width: 100%;
  border: 1px solid #252525;
  margin: 10px 0;
}
.authorization_form_button {
  width: 100%;
  background-color: #E0BEA2;
  color: #FFFFFF;
  text-transform: uppercase;
  font-size: 16px;
  padding: 16px 0;
  border: none;
  margin-top: 10px;
}
.authorization_cross {
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
}
</style>
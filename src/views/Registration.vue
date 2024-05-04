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
    async sendingData() {
      console.log(this.email, this.password)
      let response = await axios.post("/registration", {
        email: this.email,
        password: this.password
      })
      this.user_data = response.data
      this.getting_data_user()
      this.$router.go(-2)
      console.log(this.user_data)

    },
    getting_data_user() {
      this.$store.commit('getting_data_user', {
        email: this.user_data.email,
        password: this.user_data.password
      })
      console.log("Vuex")
      console.log(this.$store.state.user)
    }
  }
}
</script>
<template>
  <div class="registration_popup">
    <div class="registration_popup_container">
      <h1 class="registration_title">Регистрация</h1>
      <form class="registration_form" @submit.prevent="sendingData">
        <input type="text" placeholder="Ваш e-mail" v-model="email">
        <input type="text" placeholder="Ваш пароль" v-model="password">
        <div class="error" v-if="error">Неверная почта или пароль</div>
        <button class="registration_form_button">Зарегистрироваться</button>
      </form>
      <a @click="$router.back()" class="registration_cross">
        <img src="../assets/cross.svg" alt="">
      </a>
    </div>
  </div>
</template>
<style scoped>
.registration_cross {
  cursor: pointer;
}
.error {
  color: #FF0000;
}
.registration_popup {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  text-align: center;

  transform: translate(-50%, -50%);

}

.registration_popup {
  background: rgba(0,0,0,0.3);
}
.registration_popup_container {
  width: 600px;
  height: 410px;
  background-color: #fff;
  padding: 50px 100px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.registration_title {
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
.registration_form_button {
  width: 100%;
  background-color: #E0BEA2;
  color: #FFFFFF;
  text-transform: uppercase;
  font-size: 16px;
  padding: 16px 0;
  border: none;
  margin-top: 10px;
  margin-bottom: 50px;
}
.registration_cross {
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
}
.registration_form_box_text {
  font-size: 16px;
  color: #000000;
  text-decoration: #000000;
  font-weight: 500;
  line-height: 18px;
  border-bottom: 1px solid #000000;
}
.registration_form_box {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
</style>
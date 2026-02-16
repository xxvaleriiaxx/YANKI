<script>
import axios from "axios";

export default {
  data() {
    return {
      personalData: {}
    }
  },
  methods: {
  },
  props: {
    personalData: Object
  }
}
</script>
<template>
  <div class="personal_data">
    <div class="personal_data_container">
      <form class="personal_data_form" @submit.prevent="$emit('update_personalData')">
        <h2>Персональные данные:</h2>
        <div class="personal_data_form_box_up">
          <input type="text" placeholder="Имя" v-model="personalData.firstName">
          <input type="text" placeholder="Фамилия" v-model="personalData.lastName">
          <input type="email" placeholder="E-mail" v-model="personalData.email">
          <input type="tel" placeholder="Номер телефона" v-model="personalData.phoneNumber">
        </div>
        <h2>Адресс доставки:</h2>
        <div class="personal_data_form_box_down">
          <input placeholder="Город, улица, дом, квартира" v-model="personalData.address">
        </div>
        <button class="personal_data_button">Обновить информацию</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.personal_data_container {
  max-width: 1170px;
  padding: 0 15px;
}
.personal_data_form_box_up > input:not(:last-child) {
  margin-right: 20px;
}
h2 {
  padding: 20px 0;
  font-size: 16px;
}
.personal_data_form_box_up {
  display: flex;
  justify-content: space-between;
}
.personal_data_form_box_up > input {
  width: 100%;
}
.personal_data_form_box_down > input{
  width: 100%;
}
input {
  padding: 16px 0 15px 19px;
  font-size: 16px;
  color: #8d8d8d;
  border: 1px solid #939393;
}
.personal_data_button {
  margin-top: 20px;
  width: 100%;
  color: #FFFFFF;
  font-size: 16px;
  padding: 16px 0 17px;
  background-color: #E0BEA2;
  border: none;
  text-transform: uppercase;
}

@media screen and (max-width: 900px) {
  .personal_data_form_box_up {
    display: grid;
    grid-template-columns: 49% 49%;
  }

  .personal_data_form_box_up > input {
    margin: 0 0 15px 0;
  }
}

@media  screen and (max-width: 500px) {
  .personal_data_form_box_up {
    display: block;
  }
}
</style>
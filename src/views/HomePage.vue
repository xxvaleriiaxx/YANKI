<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from '../components/Footer.vue';
import {store} from "../main"
export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      logo: 'logo.svg',
      classSVG: 'header_svg_home',
      classNav: 'header_nav_home'

    };
  },
  methods: {
    getting_data_user() {
      this.$store.commit('getting_data_user')
      console.log(this.$store.state.user)
    }
  }
};
</script>
<template>
  <header-component :logo="logo"  :classSVG="classSVG" :classNav="classNav"></header-component>
  <main>
    <section class="main">
      <div class="main_container">
        <h1 class="main_title">Новая коллекция</h1>
        <hr/>
        <router-link :to="{ name: 'catalog' }" class="main_group">
          <div class="main_text">Смотреть Новинки</div>
          <div class="main_group_image">
            <img src="../assets/main_arrow.svg" alt="">
          </div>
        </router-link>
      </div>
    </section>
    <section class="categories">
      <div class="categories_container">
        <h2 class="categories_title">Категории</h2>
        <div class="categories_cards_box">
          <router-link :to="{ name: 'catalog' }" class="categories_card">
            <h3 class="categories_card_title">Куртки</h3>
            <img class="categories_card_image" src="../assets/categories_card1.png" alt="">
          </router-link>
          <router-link :to="{ name: 'catalog' }" class="categories_card">
            <h3 class="categories_card_title">Пальто</h3>
            <img class="categories_card_image" src="../assets/categories_card2.png" alt="">
          </router-link>
          <router-link :to="{ name: 'catalog' }" class="categories_card">
            <h3 class="categories_card_title">Шубы</h3>
            <img class="categories_card_image" src="../assets/categories_card3.png" alt="">
          </router-link>
          <router-link :to="{ name: 'catalog' }" class="categories_card">
            <h3 class="categories_card_title">Дубленки</h3>
            <img class="categories_card_image" src="../assets/categories_card4.png" alt="">
          </router-link>
        </div>
      </div>

    </section>
    <section class="mailing">
      <div class="mailing_container">
        <h2 class="mailing_title">Узнайте  первым о новинках</h2>
        <form @submit.prevent="">
          <input type="text" placeholder="Ваш e-mail*" class="mailing_form_input">
          <button class="mailing_form_button">Подписаться</button>
        </form>
        <p class="mailing_text">Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.</p>
      </div>
    </section>
  </main>
  <footer-component></footer-component>
</template>

<style>
@font-face {
  font-family: 'Raleway-YANKI';
  src: url('../fonts/Raleway-ExtraLight.woff2') format('woff2'),
  url('../fonts/Raleway-ExtraLight.woff') format('woff');
  font-weight: 200;
  font-style: normal;
}
@font-face {
  font-family: 'Raleway-YANKI';
  src: url('../fonts/Raleway-Light.woff2') format('woff2'),
  url('../fonts/Raleway-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'Raleway-YANKI';
  src: url('../fonts/Raleway-Bold.woff2') format('woff2'),
  url('../fonts/Raleway-Bold.woff') format('woff');
  font-weight: 800;
  font-style: normal;
}

body {
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
  font-family: Raleway-YANKI;
  font-weight: 300;
  color: #000;
  font-feature-settings: 'lnum' 1;
}

.main {
  background: url("../assets/bg_main1.png") top left no-repeat, url("../assets/bg_main2.png") top center no-repeat, url("../assets/bg_main3.png") top right no-repeat;
  background-size: 33.4% 100%, 33.4% 100%, 33.4% 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
}

.main_title {
  font-size: 46px;
  color: #FFF;
}

.main_text {
  text-transform: uppercase;
  color: #FFF;
}

.main_group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main_container  > hr {
  max-width: 120px;
  margin: 20px auto;
}

.main_container {
  padding: 0 30px;
  align-items: center;
  margin: auto 0;
}

.categories_card {
  position: relative;
  max-height: 450px;
  max-width: 274px;
}

.categories_title {
  font-size: 36px;
  padding: 100px 0 50px 0;
}

.categories_card_title {
  font-size: 20px;
  position: absolute;
  bottom: 0;
  padding: 9px 0;
  color: #FFF;
  background: rgba(224, 190, 162, 0.75);
  width: 100%;
  text-align: center;
}
.categories_card_image {
  width: 274px;
  height: 450px;
}
.categories_cards_box {
  display: flex;
  justify-content: space-between;
}

.categories_container {
  max-width: 1140px;
  padding: 30px;
  margin: 0 auto;
}

.categories {
  padding-bottom: 100px;
}

.mailing_container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
.mailing_form_input {
  width: 100%;
  text-align: center;
  font-size: 16px;
  padding: 15px 0;
  color: rgba(37,37,37,0.5);
  font-weight: 200;
  margin-bottom: 20px;
}

.mailing_title {
  font-size: 36px;
  padding: 0 0 50px 0;
}

.mailing_form_button {
  text-transform: uppercase;
  width: 100%;
  padding: 16px 0;
  background-color: #E0BEA2;
  border: none;
  color: #FFFFFF;
  font-size: 16px;
}

.mailing_text {
  font-size: 16px;
  font-weight: 200;
  padding-top: 20px;
}

.mailing {
  padding-bottom: 100px;
}

.main_group_image {
  margin-bottom: 4px;
}

hr {
  color: #FFFFFF;
}

.header_svg_home {
  fill: #FFF;
}

.header_nav_home {
  color: #FFF;
}
</style>
<style scoped>

</style>
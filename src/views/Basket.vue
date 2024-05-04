<script>
import HeaderComponent from "../components/Header.vue";
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
      basket: []
    };
  },
  methods: {
    async getting_basket() {
      let response = await axios.post("/basket", {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password
      })
      this.basket = response.data.basket
      console.log(this.basket)
      this.$store.commit('getting_data_user', {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        basket: this.basket
      })
      console.log("Vuex")
      console.log(this.$store.state.user)
    },
    async delete_product(index) {
      let response = await axios.post("/delete", {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        index_product: index
      })
      console.log(this.$store.state.user.email, this.$store.state.user.password)
      this.basket = response.data.basket
      console.log(this.basket)
      this.$store.commit('getting_data_user', {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        basket: this.basket
      })
      console.log("Vuex")
      console.log(this.$store.state.user)
    }
  },
  mounted() {
    this.getting_basket()
  }
};
</script>
<template>
  <header-component :logo="logo"  :classSVG="classSVG" :classNav="classNav"></header-component>
  <main>
    <section class="basket">
      <div class="basket_container">
        <h1 class="basket_title">Ваша корзина</h1>
        <div class="basket_cards">
          <div class="basket_card" v-for="(product, index) in basket">
            <div class="basket_card_box_main">
              <img :src="product.image" alt="" class="basket_card_box_image">
              <div class="basket_card_box_texts">
                <div class="basket_card_box_article">арт. {{product.article}}</div>
                <div class="basket_card_box_title">{{product.title}}</div>
              </div>
            </div>
            <div class="basket_card_color" :style="{'background-color': product.color}"></div>
            <div class="basket_card_size">
              <select>

              </select>
            </div>
            <div class="basket_card_count_box">
              <div class="basket_card_count_minus">-</div>
              <div class="basket_card_count">{{product.count}}</div>
              <div class="basket_card_count_plus">+</div>
            </div>
            <div class="basket_card_box_main">
              <div class="basket_card_price">{{product.price}} руб</div>
              <button class="basket_card_delete" @click="delete_product(index)"></button>
            </div>
          </div>
        </div>
      </div>

    </section>
  </main>
  <footer-component></footer-component>
</template>
<style scoped>
.basket_card_box_image {
  width: 90px;
  height: 110px;
}
.basket_card_box_article {
  color: #E0BEA2;
  font-size: 14px;
  padding-bottom: 20px;
}
.basket_card_color {
  width: 30px;
  height: 30px;
  border: 1px solid #000000;
  border-radius: 100%;
}
.basket_card_price {
  font-size: 16px;
  font-weight: 800;
  padding-right: 30px;
}
.basket_card_box_texts {
  padding-left: 10px;
}
.basket_card_box_main {
  display: flex;
}
.basket_card_delete {
  background-image: url("../assets/delete.svg");
  height: 25px;
  width: 25px;
  border: none;
  background-color: #FFFFFF;
}
.basket_card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #a7a5a5;
}
.basket_container {
  max-width: 1170px;
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
}
.basket {
  padding-top: 144px;
}
.basket_card_count_box {
  display: flex;
  align-items: center;
}
.basket_card_count {
  padding: 0 10px;
  font-size: 16px;
}
.basket_card_count_minus, .basket_card_count_plus {
  font-size: 30px;
  color: #E0BEA2;
}
.basket_card_count_minus {
  padding-bottom: 2px;
}
.basket_card_count_box, .basket_card_size {
  border: 1px solid #939393;
  height: 50px;
}
.basket_card_count_box {
  padding: 16px;
}
.basket_card_size {
  padding: 16px 16px 16px 30px;
}
.basket_title {
  font-size: 20px;
  padding-bottom: 20px;
}
</style>
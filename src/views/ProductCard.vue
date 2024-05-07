<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from '../components/Footer.vue';
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
      product_: {},
      products: [
        {
          title: "Кремовое пальто",
          price: "6300 руб",
          sizes: ["XS", "S", "M"],
          colors: ["#FFFFFF", "#6F83A4", "#F1DDAA"],
          image_main: "product_card1.png",
          images: ["product_card2.png", "product_card3.png", "product_card4.png"],
          description: "Кремовое пальто"
        }
      ],
      descriptionText: false,
      structureText: false
    }
  },
  methods: {
    description_text() {
        this.descriptionText = !this.descriptionText
    },
    getting_product() {
      this.product_ = this.$store.state.product_card
    }
  },
  mounted() {
    this.getting_product()
  }
}
</script>
<template>
  <header-component :logo="logo" :classSVG="classSVG" :classNav="classNav"></header-component>
  <main>
    <div class="product_container">
      <div class="product_card">
        <div class="product_card_images">
          <div class="product_card_images_left">
            <div class="product_card_left_image_box" v-for="image in products[0].images">
              <img :src="'/src/assets/' + image" alt="" class="product_card_left_image">
            </div>
          </div>
          <div class="product_card_image_main">
            <img :src="'/src/assets/' + products[0].image_main" alt="">
          </div>
        </div>
        <div class="product_card_texts">
          <div class="product_card_title">{{product_.title}}</div>
          <div class="product_card_price">{{product_.price}} руб</div>
          <div class="product_card_colors">
            <div class="product_card_color" v-for="color in product_.colors" :style="{'background-color': color}"></div>
          </div>
          <select size="1" class="product_card_select_size">
            <option selected>Выберите размер</option>
            <option value="1" v-for="size in product_.sizes">{{size}}</option>
          </select>
          <div class="product_card_buttons">
            <button class="product_card_button_basket">В корзину</button>
            <button class="product_card_button_favorites">
              <img src="../assets/favourites.svg" alt="">
              <span>В избранное</span>
            </button>
          </div>
          <!--/*:style="{ 'font-size': '16px' }"*/ -->
          <div class="product_card_other">
            <div class="product_card_other_description">
              <button class="product_card_other_description_button other_button" @click="descriptionText=!descriptionText">Обмеры и описание</button>
              <div class="product_card_other_description_text" v-if="descriptionText" :class="{'appearance_text_on': descriptionText}">{{products[0].description}}</div>
            </div>
            <div class="product_card_other_structure">
              <button class="product_card_other_structure_button other_button" @click="structureText=!structureText">Состав</button>
              <div class="product_card_other_structure_text" v-if="structureText" :class="{'appearance_text_on': structureText}">
                Состав: 50% Шерсть, 50% Полиэстер <br/>
                Подкладка: 100% Полиэстер<br/>
                Утеплитель: 90% Пух, 10% Перо
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer-component></footer-component>
</template>

<style scoped>
.product_container {
  max-width: 1170px;
  padding: 144px 15px ;
  margin: 0 auto;
}

.product_card_left_image {
  width: 100px;
  height: 100px;
}
.product_card_images {
  display: flex;
}
.product_card_left_image_box {
  padding-bottom: 10px;
  padding-right: 10px;
}
.product_card {
  display: flex;
  justify-content: space-between;
}
.product_card_title {
  font-size: 20px;
  padding-bottom: 20px;
}
.product_card_price {
  font-size: 19px;
  font-weight: 1000;
  font-family: Calibri;
  padding-bottom: 20px;
}
.product_card_color {
  width: 21px;
  height: 21px;
  background-color: #FFF;
  border-radius: 100%;
  border: 1px solid #000;
  margin-right: 7px;
}
.product_card_colors {
  display: flex;
  padding-bottom: 20px;
}
.product_card_select_size {
  width: 100%;
  padding: 15px 16px 15px 19px;
}
.product_card_texts {
  max-width: 530px;
  width: 100%;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: hidden;
  background: url("../assets/select_arrow.svg") no-repeat;
  background-position: 95% 50%;
  font-size: 16px;
  border: none;
  outline: 1px solid #252525;
}
.product_card_button_basket {
  color: #FFFFFF;
  background-color: #E0BEA2;
  border: none;
}
.product_card_button_basket, .product_card_button_favorites {
  font-size: 16px;
  max-width: 255px;
  width: 100%;
  padding: 16px 0;
  text-transform: uppercase;
}
.product_card_button_favorites {
  border: 1px solid #252525;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.product_card_button_favorites > span {
  padding-left: 10px;
}
.product_card_buttons {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}
.other_button {
  border: none;
  background-color: #FFFFFF;
}
.product_card_other_description, .product_card_other_structure {
  border-bottom: 1px solid #a7a5a5;
  padding-top: 20px;
  padding-bottom: 10px;
}
.appearance_text_on {
  font-size: 14px;
  animation: 0.3s 0s 1 appearance_text_on normal both running linear;
}
@keyframes appearance_text_on {
  0% {
    font-size: 0;
    opacity: .5;
  }
}
</style>
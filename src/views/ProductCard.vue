<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from '../components/Footer.vue';
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
      product_: {},
      descriptionText: false,
      structureText: false,
      size_: "M",
      index_favourite: -1,
      flag_favourite: false,
      color_var: "",
      color_var_text: ""
    }
  },
  methods: {
    description_text() {
        this.descriptionText = !this.descriptionText
    },
    set_size() {
      this.size_ = this.product_.sizes[0];
    },
    getting_product() {
      this.product_ = this.$store.state.product_card
      this.index_favourite = this.$store.state.index_favourite
      if (this.index_favourite != -1 && this.index_favourite != undefined) {
        this.flag_favourite = true
      }
      console.log(this.product_)
      console.log(this.flag_favourite)
      console.log(this.$store.state.index_favourite)
    },
    getting_color(color_variant, color_variant_text) {
      this.color_var = color_variant
      this.color_var_text = color_variant_text
      console.log(this.color_var)
      if (this.color_var == undefined) {
        this.color_var_text = this.product_.colors[0].color_text
        this.color_var = this.product_.colors[0].color
      }
      console.log(this.color_var)
    },
    async addToBasket() {
      console.log(this.$store.state.user.email)
      if (this.$store.state.user.email) {
        let response = await axios.post('/addBasket', {
          email: this.$store.state.user.email,
          password: this.$store.state.user.password,
          product: this.product_,
          size: this.size_,
          color: this.color_var
        })
        console.log(response)
      }
      else {
        this.$router.push({
          name: 'authorization',
        })
      }
    },
    async update_favourite() {
      if (this.$store.state.user.email) {
        console.log(this.index_favourite)
        if (this.flag_favourite == true) {
          console.log(this.flag_favourite)
          let response = await axios.post('/deleteFavourite', {
            email: this.$store.state.user.email,
            password: this.$store.state.user.password,
            favourite_index: this.index_favourite
          })
          this.index_favourite = -1
          this.flag_favourite = false
          response = await axios.post("/favourites", {
            email: this.$store.state.user.email,
            password: this.$store.state.user.password
          })
          this.favourites = response.data.favourites
          this.$store.commit('getting_data_user', {
            email: this.$store.state.user.email,
            password: this.$store.state.user.password,
            basket: this.$store.state.user.basket,
            favourites: this.favourites
          })
        }
        else {
            console.log(this.flag_favourite)
            console.log(1)
            let response = await axios.post('/addFavourite', {
              email: this.$store.state.user.email,
              password: this.$store.state.user.password,
              favourite: this.product_
            })
            console.log(response)
            this.index_favourite = this.$store.state.user.favourites.length -1
            this.flag_favourite = true
            response = await axios.post("/favourites", {
            email: this.$store.state.user.email,
            password: this.$store.state.user.password
            })
            this.favourites = response.data.favourites
            this.$store.commit('getting_data_user', {
            email: this.$store.state.user.email,
            password: this.$store.state.user.password,
            basket: this.$store.state.user.basket,
            favourites: this.favourites
          })
        }
      }
      else {
        this.$router.push({
          name: 'authorization',
        })
      }
    }
  },
  mounted() {
    this.getting_product()
    this.set_size()
    this.getting_color()
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
            <div class="product_card_left_image_box" v-for="image in product_.images">
              <img :src="image" alt="" class="product_card_left_image">
            </div>
          </div>
          <div class="product_card_image_main">
            <img :src="product_.img" alt="">
          </div>
        </div>
        <div class="product_card_texts">
          <div class="product_card_title">{{product_.title}}</div>
          <div class="product_card_price">{{product_.price}} руб</div>
          <div class="product_card_colors">
            <div class="product_card_color" v-for="color in product_.colors" :style="{'background-color': color.color}" @click="getting_color(color.color)"></div>
          </div>
          <div class="product_card_colortext">Выбранный цвет: {{color_var_text}}</div>
          <select size="1" class="product_card_select_size" v-model="size_">
            <option selected value="Не выбрано">Выберите размер</option>
            <option v-for="size in product_.sizes" :value="size">{{size}}</option>
          </select>
          <div class="product_card_buttons">
            <button class="product_card_button_basket" @click="addToBasket">В корзину</button>
            <button class="product_card_button_favorites" @click="update_favourite">
              <img src="../assets/favourites.svg" alt="" v-if="!flag_favourite">
              <img src="../assets/like_favourites.png" alt="" v-if="flag_favourite" class="product_card_like_active">
              <span>В избранное</span>
            </button>
          </div>
          <!--/*:style="{ 'font-size': '16px' }"*/ -->
          <div class="product_card_other">
            <div class="product_card_other_description">
              <div class="product_card_other_description_box" @click="descriptionText=!descriptionText">
                <button class="product_card_other_description_button other_button">Обмеры и описание</button>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'reverse_arrow': descriptionText}">
                  <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill="#E0BEA2"/>
                </svg>
              </div>
              <div class="product_card_other_description_text" v-if="descriptionText" :class="{'appearance_text_on': descriptionText}">{{product_.description}}</div>
            </div>
            <div class="product_card_other_structure">
              <div class="product_card_other_description_box" @click="structureText=!structureText">
                <button class="product_card_other_structure_button other_button">Состав</button>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'reverse_arrow': structureText}">
                  <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill="#E0BEA2"/>
                </svg>
              </div>
              <div class="product_card_other_structure_text" v-if="structureText" :class="{'appearance_text_on': structureText}">
                {{product_.structure}}
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
.product_card_colortext {
  padding-bottom: 20px;
}
.product_card_other_description_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.reverse_arrow {
  transform: rotate(180deg);
}

.product_container {
  max-width: 1170px;
  padding: 144px 15px ;
  margin: 0 auto;
}

.product_card_left_image {
  max-width: 100px;
  max-height: 140px;
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
  font-family: Raleway-YANKI;
  padding-bottom: 20px;
}
.product_card_color {
  width: 21px;
  height: 21px;
  background-color: #FFF;
  border-radius: 100%;
  border: 1px solid #000;
  margin-right: 7px;
  cursor: pointer;
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
.product_card_image_main > img{
  max-width: 450px;
}

.product_card_like_active {
  width: 17px;
  height: 17px;
}
@keyframes appearance_text_on {
  0% {
    font-size: 0;
    opacity: .5;
  }
}

@media all and (max-width: 1140px) {
  .product_card_image_main > img{
    width: 348px;
  }

  .product_card_button_basket {
    margin-right: 10px;
  }

  .product_card_texts {
    margin-left: 20px;
  }

  .product_card_left_image {
    max-width: 87px;
  }
}

@media all and (max-width: 900px) {
  .product_card {
    flex-direction: column;
    align-items: center;
  }

  .product_card_image_main > img {
    width: 100%;
    max-width: none;
  }

  .product_card_texts {
    margin-top: 30px;
    margin-left: 0;
  }

  .product_container {
    padding-bottom: 80px;
  }

  .product_container {
    padding-top: 100px;
  }
}

@media screen and (max-width: 650px) {
  .product_container {
    padding-top: 70px;
  }
}

@media all and (max-width: 500px) {
  .product_card_images {
    flex-direction: column-reverse;
  }

  .product_card_images_left {
    display: flex;
  }

  .product_card_left_image_box {
    max-width: 20%;
    margin-top: 5px;
  }

  .product_card_left_image {
    width: 100%;
  }
}

@media screen and (max-width: 400px) {
  .product_card_button_basket, .product_card_button_favorites {
    font-size: 14px;
  }

  .product_card_title, .product_card_price {
    padding-bottom: 15px;
  }

  .product_card_colortext {
    font-size: 14px;
  }

  .product_card_price {
    font-size: 14px;
  }

  .product_card_title {
    font-size: 18px;
  }

  .product_card_colors {
    padding-bottom: 39px;
  }

  .product_card_select_size {
    padding: 12px 19px;
  }

  .product_card_button_basket, .product_card_button_favorites{
    padding: 12px 0;
  }

  .product_card_image_main {
    object-fit: cover;
  }
}
</style>
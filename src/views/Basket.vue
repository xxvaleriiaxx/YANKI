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
      basket: [],
      total: 0,
      personalData: {
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: ""
      },
      delivery: "",
      payment: ""
    };
  },
  methods: {
    async getting_basket() {
      let response = await axios.post("/basket", {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password
      })
      this.total = 0
      console.log("получение")
      console.log(response)
      this.basket = response.data.basket
      console.log(this.basket)
      this.$store.commit('getting_data_user', {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        basket: this.basket
      })
      console.log("Vuex")
      console.log(this.$store.state.user)
      for (let i = 0; i < this.basket.length; i++) {
        this.total += Number(this.basket[i].price) * Number(this.basket[i].count)
      }
    },
    async sending_product_count(count, index) {
      if (Number(this.basket[index].count) + Number(count) > 0) {
        let response = await axios.post("/count_product", {
          email: this.$store.state.user.email,
          password: this.$store.state.user.password,
          index_product: index,
          count: count
        })
        this.total = 0
        this.basket = response.data.basket
        console.log("Актуал")
        console.log(this.basket)
        console.log(this.basket.length)
        this.$store.commit('getting_data_user', {
          email: this.$store.state.user.email,
          password: this.$store.state.user.password,
          basket: this.basket
        })
        console.log("Vuex")
        console.log(this.$store.state.user)
        for (let i = 0; i < this.basket.length; i++) {
          this.total += Number(this.basket[i].price) * Number(this.basket[i].count)
        }
      }
    },
    async delete_product(index) {
      let response = await axios.post("/delete", {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        index_product: index
      })
      this.total = 0
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
      for (let i = 0; i < this.basket.length; i++) {
        this.total += Number(this.basket[i].price) * Number(this.basket[i].count)
      }
    },
    async getting_personalData() {
      let response = await axios.post("/personalData", {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
      })
      this.personalData.email = response.data.email
      this.personalData.firstName = response.data.data.firstName
      this.personalData.lastName = response.data.data.lastName
      this.personalData.phoneNumber = response.data.data.phoneNumber
      this.personalData.address = response.data.data.address
      console.log(this.personalData)
    },
    async registration_order() {
      let response = await axios.post("/registration_order", {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        total: this.total,
        delivery: this.delivery,
        payment: this.payment,
        basket: this.basket,
        personalData: this.personalData
      })
    }
  },
  mounted() {
    this.getting_basket()
    this.getting_personalData()
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
              <div class="basket_card_box_title">{{product.title}}</div>
            </div>
            <div class="basket_card_color" :style="{'background-color': product.color}"></div>
            <div class="basket_card_size">{{product.size}}</div>
            <div class="basket_card_count_box">
              <div class="basket_card_count_minus" @click="sending_product_count(-1, index)">-</div>
              <div class="basket_card_count">{{product.count}}</div>
              <div class="basket_card_count_plus" @click="sending_product_count(1, index)">+</div>
            </div>
            <div class="basket_card_box_main">
              <div class="basket_card_price">{{product.price*product.count}} руб</div>
              <button class="basket_card_delete" @click="delete_product(index)"></button>
            </div>
          </div>
          <div class="basket_card_tablet" v-for="(product, index) in basket">
            <div class="basket_card_tablet_box">
              <div class="basket_card_image">
                <img :src="product.image" alt="" class="basket_card_box_image">
              </div>
              <div class="basket_card_texts">
                <div class="basket_card_texts_top">
                  <div class="basket_card_box_title">{{product.title}}</div>
                  <div class="basket_card_price">{{product.price*product.count}} руб</div>
                </div>
                <div class="basket_card_texts_bottom">
                  <div class="basket_card_color" :style="{'background-color': product.color}"></div>
                  <div class="basket_card_size">{{product.size}}</div>
                  <div class="basket_card_count_box">
                    <div class="basket_card_count_minus" @click="sending_product_count(-1, index)">-</div>
                    <div class="basket_card_count">{{product.count}}</div>
                    <div class="basket_card_count_plus" @click="sending_product_count(1, index)">+</div>
                  </div>
                  <button class="basket_card_delete" @click="delete_product(index)"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="basket_total">К оплате: <span>{{total}} руб</span></div>
      </div>

    </section>
    <section class="order_registration">
      <div class="order_registration_container">
        <h2 class="order_registration_title">Оформление заказа</h2>
        <form @submit.prevent="registration_order">
          <div class="order_registration_form">
            <div class="order_registration_col_left">
              <label>Персональыне данные:</label>
              <div class="dates_form">
                <div class="date_box">
                  <input placeholder="Ваше имя*" type="text" v-model="personalData.firstName">
                </div>
                <div class="date_box">
                  <input placeholder="Ваша фамилия*" type="text" v-model="personalData.lastName">
                </div>
                <div class="date_box">
                  <input placeholder="Ваш e-mail*" type="text" v-model="personalData.email">
                </div>
                <div class="date_box">
                  <input placeholder="Ваш телефон*" type="text" v-model="personalData.phoneNumber">
                </div>
              </div>
              <label>Способ доставки:</label>
              <div class="delivery_form">
                <div class="order_registration_form_box delivery_box">
                  <input value="СДЕК" type="radio" class="order_registration_radio" name="delivery" v-model="delivery">
                  <label>СДЕК</label>
                </div>
                <div class="order_registration_form_box delivery_box">
                  <input value="Boxberry" type="radio" class="order_registration_radio" name="delivery" v-model="delivery">
                  <label>Boxberry</label>
                </div>
                <div class="order_registration_form_box delivery_box">
                  <input value="Почта России" type="radio" class="order_registration_radio" name="delivery" v-model="delivery">
                  <label>Почта России</label>
                </div>
                <div class="order_registration_form_box delivery_box">
                  <input value="Курьерская доставка YANKI" type="radio" class="order_registration_radio" name="delivery" v-model="delivery">
                  <label>Курьерская доставка YANKI</label>
                </div>
              </div>
              <label>Адресс доставки:</label>
              <div class="order_registration_address">
                <input placeholder="Город, улица, дом, квартира*" type="text" v-model="personalData.address">
              </div>
              <label>Оплата:</label>
              <div class="payment_registration_form">
                <div class="order_registration_form_box payment_box">
                  <input value="Безналичными" type="radio" class="order_registration_radio" name="payment" v-model="payment">
                  <label>Денежным переводом Visa/Mastercard/МИР</label>
                </div>
                <div class="order_registration_form_box payment_box">
                  <input value="Наличными" type="radio" class="order_registration_radio" name="payment" v-model="payment">
                  <label>Наличными</label>
                </div>
              </div>
            </div>
            <div class="order_registration_col_right">
              <div class="order_registration_total">
                <div class="order_registration_total_text">ИТОГО:</div>
                <div class="order_registration_total_count">{{total}} руб</div>
              </div>
              <button class="order_registration_button">ОФОРМИТЬ ЗАКАЗ</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>
  <footer-component></footer-component>
</template>
<style scoped>
.basket_card_tablet {
  display: none;
}
.dates_form {
  display: grid;
  grid-template-columns: 50% 50%;
}

.date_box {
  margin-right: 15px;
}

.delivery_form {
  display: grid;
  grid-template-columns: 50% 50%;
}

.payment_registration_form {
  display: flex;
}

.payment_box:first-child {
  margin-right: 50px;
}
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
  width: 180px;
  text-align: right;
}
.basket_card_box_texts {
  padding-left: 10px;
}
.basket_card_box_main {
  display: flex;
  align-items: center;
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
  cursor: pointer;
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
  padding: 16px 20px;
}
.basket_title {
  font-size: 20px;
  padding-bottom: 20px;
}
.basket_total {
  padding-top: 30px;
  font-size: 16px;
  text-align: right;
  font-weight: 400;
}
.basket_total > span {
  font-size: 16px;
  font-weight: 1000;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: hidden;
  background: url("../assets/select_arrow.svg") no-repeat;
  background-position: 100% 50%;
  font-size: 16px;
  border: none;
  outline: none;
}
.basket_card_box_title {
  width: 220px;
  padding-left: 20px;
}

.order_registration_radio {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 18px;
  height: 18px;
  padding: 4px;
  background-clip: content-box;
  border: 2px solid #bbbbbb;
  background-color: #e7e6e7;
  border-radius: 50%;
  margin-right: 10px;
}
.order_registration_radio:checked {
  background-color: #E0BEA2;
}
.order_registration_col_left {
  width: 820px;
  margin-right: 20px;
}
.order_registration_container {
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
}
label {
  font-size: 16px;
  padding-bottom: 20px;
}
input[type="text"] {
  padding: 16px 0 15px 19px;
  color: #939393;
  border: 1px solid #939393;
  width: 100%;
  margin: 0 20px 20px 0;
}
.order_registration_title {
  font-size: 20px;
  padding-bottom: 30px;
}
.order_registration_form {
  display: flex;
  justify-content: space-between;
}
.order_registration_col_right {
  width: 300px;
}
.order_registration_button {
  width: 100%;
  padding: 16px 74px;
  color: #FFFFFF;
  background-color: #E0BEA2;
  border: none;
}
.order_registration_total_count {
  font-weight: 800;
}
.order_registration_total {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
}
.order_registration {
  margin: 70px 0 100px;
}

@media all and (max-width: 1140px) {
  .payment_registration_form {
    display: block;
  }

  .payment_box:first-child {
    margin-right: 0;
  }
}

@media all and (max-width: 900px) {
  .order_registration_button {
    padding: 16px 20px;
  }

  .delivery_form {
    display: block;
  }

  .dates_form {
    display: block;
  }

  .date_box {
    margin-right: 0;
  }

  .order_registration_col_right {
    min-width: 200px;
  }

  .basket_card {
    display: none;
  }

  .basket_card_tablet {
    display: block;
    margin-bottom: 20px;
  }

  .basket_card_tablet_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .basket_card_texts_top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .basket_card_texts_bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basket_card_texts {
    width: 100%;
    margin-left: 20px;
  }

  .basket_card_box_title {
    padding-left: 0;
  }

  .basket_card_price {
    padding-right: 0;
  }

  .basket_container {
    max-width: none;
  }

  .basket_card_texts_top, .basket_card_texts_bottom {
    width: 100%;
  }

  .basket_card_price, .basket_card_box_title {
    width: 100%;
  }

  .basket {
    padding-top: 100px;
  }
}

@media all and (max-width: 550px) {
  .order_registration_form {
    flex-direction: column;
  }

  .order_registration_col_left, .order_registration_col_right {
    width: 100%;
  }

  input[type="text"] {
    margin: 0 0 20px 0;
  }

  .basket {
    padding-top: 70px;
  }

  .basket_card_box_title, .basket_card_price {
    font-size: 14px;
  }

  .basket_card_count_box {
    padding: 12px 10px;
  }

  .basket_card_count {
    padding: 0 5px;
  }

  .basket_card_texts_top {
    align-items: center;
  }

  .order_registration_col_left > *, .order_registration_form_box > label {
    font-size: 14px;
  }

  .order_registration_title {
    font-size: 18px;
    padding-bottom: 15px;
  }

  .order_registration{
    margin-top: 50px;
  }

  .basket_card_texts_top {
    display: block;
  }

  .basket_card_price {
    text-align: left;
    margin-top: 10px;
  }

  .order_registration_form_box {
    display: flex;
  }
}
</style>
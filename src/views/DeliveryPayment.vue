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
    }
  }
}
</script>
<template>
  <header-component :logo="logo" :classSVG="classSVG" :classNav="classNav"></header-component>
  <main>
    <div class="delivery-payment_container">
      <h1 class="delivery-payment_title">Оплата и доставка</h1>
      <div class="delivery-payment_boxes">
          <div class="delivery-payment_box">
            <span class="delivery-payment_box_title"> Вы можете оплатить покупку одним из ниже перечисленных способов:</span>
            <ul>
              <li class="delivery-payment_point">наложенным платежом в отделении почты</li>
              <li class="delivery-payment_point">картой на сайте</li>
              <li class="delivery-payment_point">наличными курьеру</li>
            </ul>
          </div>
        <div class="delivery-payment_box">
          <span class="delivery-payment_box_title">Мы готовы предложить несколько вариантов доставки:</span>
          <ul>
            <li class="delivery-payment_point">отправка по всей России почтой</li>
            <li class="delivery-payment_point">доставка СДЕК/Boxberry</li>
            <li class="delivery-payment_point">курьерская доставка YANKI</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
  <footer-component></footer-component>
</template>

<style scoped>
body {
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
  font-family: Raleway-YANKI;
  font-weight: 300;
  color: #000;
}
ul {
  list-style-type: revert;
}
.delivery-payment_boxes {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
.delivery-payment_container {
  box-sizing: border-box;
  max-width: 1170px;
  padding: 144px 15px 0;
  margin: 0 auto;
}
li {
  margin-left: 20px;
}
.delivery-payment_title {
  padding-bottom: 20px;
  font-size: 20px;
}
.delivery-payment_box_title {
  padding-bottom: 10px;
}
footer {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
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
      conditions: [
        {
          image: "condition1.svg",
          text: "если заказ не был использован и сохранил товарный вид(в том числе не нарушены бирки, ярлыки, упаковочные материалы)"
        },
        {
          image: "condition2.svg",
          text: "возврат и обмен осуществляется в течение двух дней с момента получения заказа"
        },
        {
          image: "condition3.svg",
          text: "возврат и обмен товара возможен только при отправке по России"
        },
        {
          image: "condition4.svg",
          text: "бланк возврата присутствует в каждой посылке "
        },
        {
          image: "condition5.svg",
          text: "все расходы по обмену и возврату товара несет покупатель"
        },
        {
          image: "condition6.svg",
          text: "после получения возврата мы делаем перевод денежных средств на карту клиента"
        },
      ]
    }
  }
}
</script>
<template>
  <header-component :logo="logo" :classSVG="classSVG" :classNav="classNav"></header-component>
<main>
  <div class="exchange-refund_container">
    <h1 class="exchange-refund_title">Обмен и возврат</h1>
    <p class="exchange-refund_text">Если вам не подошел заказ, мы с удовольствием вам его обменяем или примем возврат</p>
    <p class="exchange-refund_text">Обмен и возврат возможен в случае :</p>
    <div class="exchange-refund_conditions row">
      <div class="exchange-refund_condition col" v-for="condition in conditions">
        <img :src=" 'src/assets/' + condition.image" alt=""/>
        <p class="exchange-refund_condition_text">{{condition.text}}</p>
      </div>
    </div>
  </div>
</main>
  <footer-component></footer-component>
</template>

<style scoped>
@font-face {
  font-family: "Raleway-Variable";
  font-style: normal;
  font-weight: 300;
  /* Браузер сначала попробует найти шрифт локально */
  src: local("Raleway-Var"),
    /* Если не получилось, загрузит woff2 */
  url("../fonts/Raleway-Variable.woff2") format("woff2"),
  url("../fonts/Raleway-Variable.woff") format("woff");
}

body {
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
  font-family: Raleway-Variable;
  font-weight: 300;
  color: #000;
}
.exchange-refund_condition {
  text-align: center;
}
.exchange-refund_condition_text {
  padding-top: 10px;
}
.exchange-refund_text {
  padding-bottom: 10px;
  font-size: 16px;
}
.exchange-refund_title {
  font-size: 20px;
  padding-bottom: 20px;
}
.exchange-refund_container  {
  max-width: 1140px;
  width: 100%;
  padding: 144px 15px 0;
  margin: 0 auto;
}
.exchange-refund_conditions {
  padding-top: 50px;
}
footer {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
<style>
.header_nav_undohome {
  color: #000;
}
.header_svg_undohome {
  fill: #E0BEA2;
}
</style>
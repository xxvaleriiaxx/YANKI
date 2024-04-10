<script>
export default {
  data() {

  },
  props: {
    product: Object
  }
}
</script>
<template>
  <div class="catalog_card col">
    <img class="catalog_card_img" src="../assets/catalog_card1.png" alt="">
    <div class="catalog_card_like">
      <a href="#"></a>
    </div>
    <div class="catalog_card_texts">
      <h2 class="catalog_card_title">{{{product.title}}}</h2>
      <div class="catalog_card_status" v-if="product.statusNew">new</div>
    </div>
    <div class="catalog_card_price">{{{product.price}}}</div>
    <div class="catalog_card_size">XXS XS S M L</div>
    <div class="catalog_card_colors">
      <div class="catalog_card_color"></div>
    </div>
  </div>
</template>
<style scoped>
.catalog_cards {
  max-width: 960px;
  width: 960px;
}
a {
  color: #000;
}
.catalog_card {
  width: 310px;
  position: relative;
  padding: 0;
  text-align: center;
}
.catalog_card_like {
  width: 40px;
  height: 40px;
  background: url("../assets/like.svg");
  position: absolute;
  right: 0;
  top: 0;
}
.catalog_card_title {
  color: #252525;
  font-size: 16px;
}
.catalog_card_status {
  color: #E0BEA2;
  font-size: 16px;
  position: absolute;
  right: -40px;
  top: -2px;
}
.catalog_card_price {
  font-size: 19px;
  font-weight: 1000;
  font-family: Calibri;
}
.catalog_card_texts {
  display: inline-block;
  position: relative;
  margin-top: 15px;
}
.catalog_card_size {
  opacity: 0.5;
}
.catalog_card_color {
  width: 14px;
  height: 14px;
  background-color: #FFF;
  border-radius: 100%;
  border: 1px solid #000;
}
</style>
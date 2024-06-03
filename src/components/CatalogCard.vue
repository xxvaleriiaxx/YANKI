<script>
export default {
  data() {
    return {
      product: {},
      favourite_active: true
    }
  },
  props: {
    product: Object,
    favourite_active: Boolean
  }
}
</script>
<template>
  <div class="catalog_card col">
    <div class="catalog_card_container" @click="$emit('opening_card')">
      <img class="catalog_card_img" :src="product.img" alt="">
      <div class="catalog_card_texts">
        <h2 class="catalog_card_title">{{product.title}}</h2>
        <div class="catalog_card_status" v-if="product.statusNew">new</div>
      </div>
      <div class="catalog_card_price">{{product.price}} руб</div>
      <div class="catalog_card_sizes">
        <div class="catalog_card_size" v-for="size in product.sizes">{{size}}</div>
      </div>
      <div class="catalog_card_colors">
        <div class="catalog_card_color" v-for="color in product.colors" :style="{'background-color': color.color}"></div>
      </div>
    </div>
    <div @click="$emit('update_favourite')" class="catalog_card_like" :class="{'catalog_card_like_active': favourite_active}" >
      <a href="#"></a>
    </div>
  </div>
</template>
<style scoped>
a {
  color: #000;
}
.catalog_card_sizes {
  display: flex;
  justify-content: center;
}
.catalog_card_size:not(:last-child) {
  padding-right: 5px;
}
.catalog_card {
  width: 310px;
  cursor: pointer;
  position: relative;
  margin: 15px 15px 15px 0;
  text-align: center;
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
  font-weight: 800;
  font-family: Raleway-YANKI;
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
.catalog_card_color:not(:last-child) {
  margin-right: 5px;
}
.catalog_card_colors {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}
.catalog_card_img {
  width: 310px;
  height: 400px;
}
.catalog_card_title {
  max-width: 220px;
}
</style>
<style>
.catalog_card_like {
  width: 40px;
  height: 40px;
  background: url("../assets/like.svg");
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
</style>
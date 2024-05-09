<script>
export default {
  data() {
    return {
      details: false,
      order: {}
    }
  },
  props: {
    order: Object
  }
}
</script>

<template>
  <div class="order">
    <div class="order_inactive" @click="details=!details">
      <div class="order_date">{{order.date}}</div>
      <div class="order_box">
        <div class="order_text">Статус:</div>
        <div class="order_text_bold">{{product.status}}</div>
      </div>
      <div class="order_box">
        <div class="order_text">Сумма заказа:</div>
        <div class="order_text_bold">{{product.total}}</div>
      </div>
    </div>
  </div>
  <div class="order_active" v-if="details">
    <div class="order_card_product" v-for="product in order.products">
      <div class="order_card_box_main">
        <img :src="product.image" alt="" class="order_card_box_image">
        <div class="order_card_box_title">{{product.title}}</div>
      </div>
      <div class="order_card_color" :style="{'background-color': product.color}"></div>
      <div class="order_card_size">Размер: {{product.size}}</div>
      <div class="order_card_count_box">
        <div class="order_card_count">Количество: {{product.count}}</div>
      </div>
      <div class="order_card_box_main">
        <div class="order_card_price">{{product.price*product.count}} руб</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.order_card_box_image {
  width: 95px;
}
.order_active > * {
  font-size: 16px;
}
.order_card_color {
  width: 30px;
  height: 30px;
  border: 1px solid #000000;
  border-radius: 100%;
}
.order_card_price {
  font-weight: 800;
}
</style>
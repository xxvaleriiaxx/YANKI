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
        <div class="order_text_bold">{{order.status}}</div>
      </div>
      <div class="order_box">
        <div class="order_text">Сумма заказа:</div>
        <div class="order_text_bold">{{order.total}} руб</div>
      </div>
      <div class="order_arrow">
        <img src="../assets/select_arrow.svg" :class="{'reverse_arrow': details}">
      </div>
    </div>
    <div class="order_active" v-if="details">
      <div class="order_card_product" v-for="product in order.products">
        <div class="order_card_box_main">
          <img :src="product.image" alt="" class="order_card_box_image">
          <div class="order_card_box_title">{{product.title}}</div>
        </div>
        <div class="order_card_color_box">
          <div class="order_card_color" :style="{'background-color': product.color}"></div>
        </div>
        <div class="order_card_size">Размер: {{product.size}}</div>
        <div class="order_card_count_box">
          <div class="order_card_count">Количество: {{product.count}}</div>
        </div>
        <div class="order_card_box_main">
          <div class="order_card_price">{{product.price*product.count}} руб</div>
        </div>
      </div>
      <div class="order_card_product_tablet" v-for="product in order.products">
        <div class="order_card_product_tablet_image">
          <img :src="product.image" alt="" class="order_card_box_image">
        </div>
        <div class="order_card_product_tablet_texts">
          <div class="order_card_product_tablet_texts_top">
            <div class="order_card_product_tablet_texts_top_title">{{product.title}}</div>
            <div class="order_card_price">{{product.price*product.count}} руб</div>
          </div>
          <div class="order_card_product_tablet_texts_bottom">
            <div class="order_card_color" :style="{'background-color': product.color}"></div>
            <div class="order_card_size">Размер: {{product.size}}</div>
            <div class="order_card_count">Количество: {{product.count}}</div>
            <div class="order_card_size_mobile">{{product.size}}</div>
            <div class="order_card_count_mobile">{{product.count}}</div>
          </div>
        </div>
      </div>
      <div class="order_card_personalData">
        <div class="order_card_personalData_box">
          <div>Имя Фамилия: {{order.data.firstName}} {{order.data.lastName}}</div>
          <div>E-mail: {{order.data.emailUser}}</div>
          <div>Номер телефона: {{order.data.phoneNumber}}</div>
        </div>
        <div class="order_card_personalData_box">
          <div>Способ доставки: {{order.data.delivery}}</div>
          <div>Способ оплаты: {{order.data.payment}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.order_card_product, .order_card_product_tablet {
  padding-bottom: 20px;
}
.order_card_box_image {
  width: 95px;
}
.order_active > * {
  font-size: 16px;
}
.order_card_color_box {
  border: 1px solid #8d8d8d;
  border-radius: 100%;
}
.order_card_color {
  width: 30px;
  height: 30px;
  margin: 3px;
  border-radius: 100%;
}
.order_card_price {
  font-weight: 800;
}
.order_text_bold {
  font-weight: 1000;
}
.order_inactive {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
}
.order_active {
  padding-bottom: 20px;
}
.order {
  border-bottom: 1px solid #939393;
}
.reverse_arrow {
  transform: rotate(180deg);
}
.order_card_product {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order_card_box_main {
  display: flex;
  align-items: center;
}
.order_card_box_title {
  padding-left: 10px;
}
.order_card_price {
  width: 180px;
  text-align: right;
}
.order_card_box_title {
  width: 250px;
}
.order_card_personalData_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
}

.order_card_product_tablet {
  display: none;
}

@media all and (max-width: 900px) {
  .order_card_product {
    display: none;
  }

  .order_card_product_tablet {
    display: flex;
  }

  .order_card_count_mobile, .order_card_size_mobile {
    display: none;
  }

  .order_card_product_tablet_texts {
    width: 100%;
    margin-left: 20px;
  }
  .order_card_product_tablet_texts_top, .order_card_product_tablet_texts_bottom {
    display: flex;
    justify-content: space-between;
  }

  .order_card_product_tablet_texts_top {
    margin-bottom: 15px;
  }

  .order_card_color {
    border: 1px solid #8d8d8d;
    border-radius: 100%;
  }

  .order_card_personalData_box {
    display: block;
  }

  .order_card_personalData_box > div{
    margin-bottom: 10px;
  }

  .order_inactive {
    padding-top: 15px;
  }
}

@media all and (max-width: 500px) {
  .order_card_size, .order_card_count {
    display: none;
  }

  .order_card_size_mobile, .order_card_count_mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    min-height: 40px;
    border: 1px solid #252525;
    padding: 0 15px;
  }

  .order_card_price {
    width: auto;
    margin-left: 5px;
  }
}

@media all and (max-width: 400px) {
  .order_card_product_tablet_texts_top {
    display: block;
  }

  .order_card_price {
    text-align: left;
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>
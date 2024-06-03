<template>
  <footer>
    <div class="footer_container">
      <div class="footer_boxes">
        <div class="footer_box">
          <h3 class="footer_box_title">Компания</h3>
          <div class="footer_box_point">О нас</div>
          <div class="footer_box_point"><router-link :to="{ name: 'contacts' }" class="footer_box_point_a">Контакты</router-link></div>
        </div>
        <div class="footer_box">
          <h3 class="footer_box_title">Полезное</h3>
          <div class="footer_box_point"><router-link :to="{ name: 'delivery&payment' }" class="footer_box_point_a">Оплата и доставка</router-link></div>
          <div class="footer_box_point"><router-link :to="{ name: 'exchange&refund' }" class="footer_box_point_a">Условия возврата</router-link></div>
          <div class="footer_box_point">Бонусная система</div>
        </div>
        <div class="footer_box">
          <h3 class="footer_box_title">Покупателю</h3>
          <div class="footer_box_point"><router-link :to="{ name: 'favourites'}" class="footer_box_point_a">Избранное</router-link></div>
          <div class="footer_box_point">Публичная оферта</div>
          <div class="footer_box_point">Политика конфиденциальности</div>
        </div>
        <div class="footer_box">
          <h3 class="footer_box_title">Контакты</h3>
          <div class="footer_box_point">+71234567890</div>
          <div class="footer_box_point">info@yanki.com</div>
        </div>
      </div>
      <div class="footer_text">© 2024 Yanki. All rights reserved</div>
    </div>
  </footer>
</template>

<script>

</script>

<style scoped>
.footer_box_title {
  font-size: 20px;
  text-transform: uppercase;
  padding-bottom: 20px;
}

.footer_box_point {
  font-size: 16px;
  font-weight: 300;
  color: #000000;
  padding-bottom: 15px;
}
.footer_box_point_a {
  padding: 0;
  color: #000000;
}

.footer_boxes {
  display: flex;
  justify-content: space-between;
}

.footer_container {
  max-width: 1140px;
  padding: 0 30px 0 ;
  margin: 0 auto;
}

.footer_text {
  font-size: 12px;
  color: #252525;
  font-weight: 600;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 10px;
}
</style>
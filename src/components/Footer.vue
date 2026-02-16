<template>
  <footer>
    <div class="footer_container">
      <div class="footer_boxes">
        <div class="footer_box">
          <div class="footer_title_group" @click="footer_open_first">
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer_arrow_left">
              <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill="#E0BEA2"/>
            </svg>
            <h3 class="footer_box_title">Компания</h3>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'reverse_arrow': footer_active_first}">
              <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill="#E0BEA2"/>
            </svg>
          </div>
          <div class="footer_box_elems" :class="{'footer_box_elems_active': footer_active_first}">
            <div class="footer_box_point">О нас</div>
            <div class="footer_box_point"><router-link :to="{ name: 'contacts' }" class="footer_box_point_a">Контакты</router-link></div>
          </div>
        </div>
        <div class="footer_box">
          <div class="footer_title_group" @click="footer_open_second">
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer_arrow_left">
              <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill="#E0BEA2"/>
            </svg>
            <h3 class="footer_box_title">Полезное</h3>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'reverse_arrow': footer_active_second}">
              <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill="#E0BEA2"/>
            </svg>
          </div>
          <div class="footer_box_elems" :class="{'footer_box_elems_active': footer_active_second}">
            <div class="footer_box_point"><router-link :to="{ name: 'delivery&payment' }" class="footer_box_point_a">Оплата и доставка</router-link></div>
            <div class="footer_box_point"><router-link :to="{ name: 'exchange&refund' }" class="footer_box_point_a">Условия возврата</router-link></div>
            <div class="footer_box_point">Бонусная система</div>
          </div>
        </div>
        <div class="footer_box">
          <div class="footer_title_group" @click="footer_open_third">
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer_arrow_left">
              <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill="#E0BEA2"/>
            </svg>
            <h3 class="footer_box_title">Покупателю</h3>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'reverse_arrow': footer_active_third}">
              <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill="#E0BEA2"/>
            </svg>
          </div>
          <div class="footer_box_elems" :class="{'footer_box_elems_active': footer_active_third}">
            <div class="footer_box_point"><router-link :to="{ name: 'favourites'}" class="footer_box_point_a">Избранное</router-link></div>
            <div class="footer_box_point">Публичная оферта</div>
            <div class="footer_box_point">Политика конфиденциальности</div>
          </div>
        </div>
        <div class="footer_box">
          <div class="footer_title_group" @click="footer_open_four">
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer_arrow_left">
              <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill="#E0BEA2"/>
            </svg>
            <h3 class="footer_box_title">Контакты</h3>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'reverse_arrow': footer_active_four}">
              <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill="#E0BEA2"/>
            </svg>
          </div>
          <div class="footer_box_elems" :class="{'footer_box_elems_active': footer_active_four}">
            <div class="footer_box_point">+71234567890</div>
            <div class="footer_box_point">info@yanki.com</div>
          </div>
        </div>
      </div>
      <div class="footer_text">© 2025 Yanki. All rights reserved</div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footer_active_first: false,
      footer_active_second: false,
      footer_active_third: false,
      footer_active_four: false,
    }
  },
  methods: {
    footer_open_first() {
      if (this.footer_active_first) {
        this.footer_active_first = false;
      }
      else {
        this.footer_active_first = true;
      }
    },
    footer_open_second() {
      if (this.footer_active_second) {
        this.footer_active_second = false;
      }
      else {
        this.footer_active_second = true;
      }
    },
    footer_open_third() {
      if (this.footer_active_third) {
        this.footer_active_third = false;
      }
      else {
        this.footer_active_third = true;
      }
    },
    footer_open_four() {
      if (this.footer_active_four) {
        this.footer_active_four = false;
      }
      else {
        this.footer_active_four = true;
      }
    }
  }
}
</script>

<style scoped>
.footer_title_group > svg {
  display: none;
}

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

@media all and (max-width: 900px) {
  .footer_boxes {
    display: grid;
    grid-template-columns: 50% 50%;
    text-align: center;
  }

  .footer_box {
    margin-bottom: 20px;
  }
}

@media all and (max-width: 500px) {
  .footer_title_group > svg {
    display: block;
  }

  .footer_boxes {
    display: block;
  }

  .footer_box_elems {
    display: none;
  }

  .footer_box_elems_active {
    display: block;
  }

  .footer_box_title {
    padding: 0;
  }

  .footer_box {
    border-bottom: 1px solid #252525;
  }

  .footer_title_group {
    display: grid;
    cursor: pointer;
    grid-template-columns: 14px auto 14px;
  }

  .footer_title_group > svg{
    width: 14px;
    height: 14px;
  }

  .footer_text {
    padding-top: 20px;
  }

  .footer_container {
    padding: 0 15px;
  }

  .footer_arrow_left {
    opacity: 0;
  }

  .reverse_arrow {
    transform: rotate(180deg);
  }

  .footer_box_title {
    font-size: 18px;
  }
}
</style>
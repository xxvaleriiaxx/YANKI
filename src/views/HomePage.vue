<script>

</script>
<template>
  <header>
    <div class="header_container">
      <div class="header_box_left">
        <div class="header_burger">
          <img src="../assets/header_burger.svg" alt="menu">
        </div>
        <nav>
          <ul>
            <li><a href="#" class="header_nav_a">NEW</a></li>
            <li><router-link :to="{ name: 'catalog' }" class="header_nav_a">Каталог</router-link></li>
            <li><a href="#" class="header_nav_a">О нас</a></li>
          </ul>
        </nav>
      </div>
      <div class="header_logo">
        <img src="../assets/logo.svg" alt="">
      </div>
      <div class="header_box_right">
        <div class="image_header">
          <img src="../assets/search.svg" alt="">
        </div>
        <div class="image_header">
          <img src="../assets/account.svg" alt="">
        </div>
        <div class="image_header">
          <img src="../assets/favourite.svg" alt="">
        </div>
        <div class="image_header">
          <img src="../assets/basket.svg" alt="">
        </div>
      </div>
    </div>

  </header>
  <main>
    <section class="main">
      <div class="main_container">
        <h1 class="main_title">Новая коллекция</h1>
        <hr/>
        <div class="main_group">
          <p class="main_text">Смотреть Новинки</p>
          <img src="../assets/main_arrow.svg" alt="">
        </div>
      </div>
    </section>
    <section class="categories">
      <div class="categories_container">
        <h2 class="categories_title">Категории</h2>
        <div class="categories_cards_box">
          <div class="categories_card">
            <h3 class="categories_card_title">Куртки</h3>
            <img class="categories_card_image" src="../assets/categories_card1.png" alt="">
          </div>
          <div class="categories_card">
            <h3 class="categories_card_title">Пальто</h3>
            <img class="categories_card_image" src="../assets/categories_card2.png" alt="">
          </div>
          <div class="categories_card">
            <h3 class="categories_card_title">Шубы</h3>
            <img class="categories_card_image" src="../assets/categories_card3.png" alt="">
          </div>
          <div class="categories_card">
            <h3 class="categories_card_title">Парки</h3>
            <img class="categories_card_image" src="../assets/categories_card4.png" alt="">
          </div>
        </div>
      </div>

    </section>
    <section class="mailing">
      <div class="mailing_container">
        <h2 class="mailing_title">Узнайте  первым о новинках</h2>
        <form action="">
          <input type="text" value="Ваш e-mail*" class="mailing_form_input">
          <button class="mailing_form_button">Подписаться</button>
        </form>
        <p class="mailing_text">Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.</p>
      </div>
    </section>
  </main>
  <footer>
    <div class="footer_container">
      <div class="footer_boxes">
        <div class="footer_box">
          <h3 class="footer_box_title">Компания</h3>
          <div class="footer_box_point">О нас</div>
          <div class="footer_box_point">Контакты</div>
        </div>
        <div class="footer_box">
          <h3 class="footer_box_title">Полезное</h3>
          <div class="footer_box_point">Оплата и доставка</div>
          <div class="footer_box_point">Условия возврата</div>
          <div class="footer_box_point">Бонусная система</div>
        </div>
        <div class="footer_box">
          <h3 class="footer_box_title">Покупателю</h3>
          <div class="footer_box_point">Избранное</div>
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

<style>
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

nav {
  max-width: 230px;
  width: 100%;
  align-self: center
}

ul {
  display: flex;
  list-style-type: none;
  width: 100%;
  justify-content: space-between;
}

li, a, router-link {
  text-decoration: none;
}

header {
  padding: 24px 30px;
  position: absolute;
  width: 100%;
}

.header_container {
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
}

.header_box_left {
  display: flex;
  justify-content: space-between;
  max-width: 380px;
  width: 100%;
}

.header_box_right {
  display: flex;
  max-width: 380px;
  width: 100%;
  justify-content: end;
  align-items: center;
}

.image_header:not(:last-child) {
  margin: 0 30px 0 0;
}

.header_burger {
  align-self: center
}

.header_nav_a {
  text-transform: uppercase;
  color: #FFF;
}

.main {
  background: url("../assets/bg_main1.png") top left no-repeat, url("../assets/bg_main2.png") top center no-repeat, url("../assets/bg_main3.png") top right no-repeat;
  background-size: 33.3% 100%, 33.3% 100%, 33.3% 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
}

.main_title {
  font-size: 46px;
  color: #FFF;
}

.main_text {
  text-transform: uppercase;
  color: #FFF;
}

.main_group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main_container  > hr {
  max-width: 120px;
  margin: 20px auto;
}

.main_container {
  padding: 0 30px;
  align-items: center;
  margin: auto 0;
}

.categories_card {
  position: relative;
  max-height: 450px;
  max-width: 274px;
}

.categories_title {
  font-size: 36px;
  padding: 100px 0 50px 0;
}

.categories_card_title {
  font-size: 20px;
  position: absolute;
  bottom: 0;
  padding: 9px 0;
  color: #FFF;
  background: rgba(224, 190, 162, 0.75);
  width: 100%;
  text-align: center;
}

.categories_cards_box {
  display: flex;
  justify-content: space-between;
}

.categories_container {
  max-width: 1140px;
  padding: 30px;
  margin: 0 auto;
}

.categories {
  padding-bottom: 100px;
}

.mailing_container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
.mailing_form_input {
  width: 100%;
  text-align: center;
  font-size: 16px;
  padding: 15px 0;
  color: rgba(37,37,37,0.5);
  font-weight: 200;
  margin-bottom: 20px;
}

.mailing_title {
  font-size: 36px;
  padding: 0 0 50px 0;
}

.mailing_form_button {
  text-transform: uppercase;
  width: 100%;
  padding: 16px 0;
  background-color: #E0BEA2;
  border: none;
  color: #FFFFFF;
  font-size: 16px;
}

.mailing_text {
  font-size: 16px;
  font-weight: 200;
  padding-top: 20px;
}

.mailing {
  padding-bottom: 100px;
}

.footer_box_title {
  font-size: 20px;
  text-transform: uppercase;
  padding-bottom: 20px;
}

.footer_box_point {
  font-size: 16px;
  font-weight: 100;
  color: #252525;
  padding-bottom: 10px;
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
}
</style>
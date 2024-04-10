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
</template>

<script>

</script>

<style scoped>
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
</style>
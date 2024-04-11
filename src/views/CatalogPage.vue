<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from '../components/Footer.vue'
import CatalogCard from "../components/CatalogCard.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    CatalogCard
  },
  data() {
    return {
      logo: 'logo_secondary.svg',
      classSVG: 'header_svg_undohome',
      classNav: 'header_nav_undohome',
      products: [
          {
            title: "Белая куртка",
            img: "",
            price: "2900 руб",
            sizes: ["XXS", "XS","S","M","L"],
            colors: ["#FFF", "#6F83A4",  "#F1DDAA"],
            statusNew: true
          },
        {
          title: "Синее пальто",
          img: "",
          price: "6300 руб",
          sizes: ["XS","M","L"],
          colors: ["#FFFFFF","#6F83A4","#F1DDAA"],
          statusNew: false
        },
        {
          title: "Бежевая шуба",
          img: "",
          price: "8400 руб",
          sizes: ["XS","S","L"],
          colors: ["#FFFFFF","#6F83A4","#F1DDAA"],
          statusNew: false
        },
        {
          title: "Синяя парка",
          img: "",
          price: "5800 руб",
          sizes: ["XXS", "XS","S","M","L"],
          colors: ["#FFFFFF","#6F83A4","#F1DDAA"],
          statusNew: true
        }
    ]
    };
  }
};
</script>
<template>
<header-component :logo="logo" :classSVG="classSVG" :classNav="classNav"></header-component>
<main>
  <div class="catalog_container">
      <div class="catalog_sidebar">
        <h1 class="catalog_title">Каталог</h1>
        <div class="catalog_sidebar_brands">
          <ul>
            <li><a class="catalog_brand">Пальто</a></li>
            <li><a>Кофты</a></li>
          </ul>
        </div>
      </div>
      <div class="catalog_main">
        <div class="catalog_filters">
          <select size="1" class="select_size">
            <option selected>Размер</option>
            <option value="1">XXS</option>
            <option value="2">XS</option>
            <option value="3">S</option>
            <option value="4">M</option>
            <option value="5">L</option>
          </select>
          <select size="1" class="select_color">
            <option selected>Цвет</option>
            <option value="1">XXS</option>
            <option value="2">XS</option>
            <option value="3">S</option>
            <option value="4">M</option>
            <option value="5">L</option>
          </select>
          <select size="1" class="select_price">
            <option selected>Цена</option>
            <option value="1">XXS</option>
            <option value="2">XS</option>
            <option value="3">S</option>
            <option value="4">M</option>
            <option value="5">L</option>
          </select>
          <select size="1" class="select_sort">
            <option selected>Сортировать по</option>
            <option value="1">XXS</option>
            <option value="2">XS</option>
            <option value="3">S</option>
            <option value="4">M</option>
            <option value="5">L</option>
          </select>
        </div>
        <div class="catalog_cards row row-cols-3">
          <div class="col" v-for="prod in products">
            <catalog-card :product="prod"></catalog-card>
          </div>
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
  main {
    padding-top: 144px;
  }
  ul {
    list-style-type: none;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    overflow: hidden;
    background: url("../assets/select_arrow.svg") no-repeat;
    background-position: 100% 50%;
    font-size: 16px;
    border: none;
    outline: none;
    padding: 5px;
    margin-right: 30px;
  }
  option {
    margin: 0 5px;
    padding: 3px 0;
    background-color: transparent;
    color: black;
    border: 1px #E0BEA2;
  }
  .select_size {
    max-width: 80px;
    width: 100%;
  }
  .select_price {
    max-width: 62px;
    width: 100%;
  }
  .select_color {
    max-width: 62px;
    width: 100%;
  }
  .select_sort {
    max-width: 145px;
    width: 100%;
  }
  .catalog_title {
    font-size: 20px;
    padding-bottom: 30px;
  }
  .catalog_brand {
    font-size: 16px;
    padding-bottom: 20px;
  }
  .catalog_container {
    max-width: 1170px;
    width: 100%;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .catalog_filters {
    max-width: 500px;
    width: 100%;
    display: flex;
    padding-bottom: 15px;
  }
  .catalog_sidebar {
    max-width: 150px;
    width: 100%;
  }
  .catalog_cards {
    padding-bottom: 100px;
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
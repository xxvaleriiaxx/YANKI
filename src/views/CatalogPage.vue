<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from '../components/Footer.vue'
import CatalogCard from "../components/CatalogCard.vue";
import {store} from "../main"
import axios from "axios";
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
      card_favourites: [],
      card_favourites_index: [],
      products: {},
      active_product: {},
      set_colors: [],
      set_category: [],
      set_category_active: [],
      sort_price: 1,
      sort_size: "Размер",
      sort_color: "Цвет",
      sort_category: "",
      open_categories_flag: false,
      open_filters_flag: false,
      sort_price_flag: true
    }
  },
  methods: {
    async getting_products() {
      this.card_favourites=[]
      this.card_favourites_index=[]
      console.log("Вызов:", this.sort_color, this.sort_size, this.sort_price, this.sort_category)
      let response = await axios.post("/catalog", {
        sort_price: this.sort_price,
        sort_color: this.sort_color,
        sort_size: this.sort_size,
        sort_category: this.sort_category
      })
      this.products = response.data
      console.log("Получение цветов")
      console.log(this.products.length)
      for (let i = 0; i < this.products.length; i++) {
        for (let j = 0; j < this.products[i].colors.length; j++) {
          if (this.set_colors.indexOf(this.products[i].colors[j].color_text) === -1) {
            this.set_colors.push(this.products[i].colors[j].color_text)
          }
        }
      }
      console.log(this.set_colors)
      if (this.set_category.length == 0) {
        for (let i = 0; i < this.products.length; i++) {
          if (this.set_category.indexOf(this.products[i].category) === -1) {
            this.set_category.push(this.products[i].category)
            this.set_category_active.push(false)
          }
        }
      }
      console.log(this.set_category)
      console.log(this.$store.state.user.favourites)
      if (this.$store.state.user.favourites) {
        console.log(1)
        for (let i = 0; i < this.$store.state.user.favourites.length; i ++) {
          for (let j = 0; j < this.products.length; j++) {
            if (String(this.$store.state.user.favourites[i]._id) == String(this.products[j]._id)) {
              this.card_favourites[j] = true
              this.card_favourites_index[j] = i
              console.log(String(this.$store.state.user.favourites[i]._id)  + " " + String(this.products[j]._id))
            }
            else {
              if (this.card_favourites[j] != true) {
                this.card_favourites[j] = false
                this.card_favourites_index[j] = -1
              }
            }
          }
        }
      }
      else {
        console.log(2)
        for (let i = 0; i < this.products.length; i++) {
          this.card_favourites[i] = false
        }
      }
      console.log(this.card_favourites)
    },
    opening_card(prod, index) {
      this.active_product = prod
      console.log(this.card_favourites_index)
      console.log(this.card_favourites_index[index])
      this.$store.commit('getting_product_card', this.active_product)
      this.$store.commit('getting_product_card_favourite', this.card_favourites_index[index])
      console.log(this.$store.state.index_favourite)
      this.$router.push({
        name: 'product',
      })
    },
    async update_favourite(prod, index) {
      console.log(this.card_favourites_index[index])
      if (this.card_favourites[index] == true) {
        let response = await axios.post('/deleteFavourite', {
          email: this.$store.state.user.email,
          password: this.$store.state.user.password,
          favourite_index: this.card_favourites_index[index]
        })
        this.card_favourites_index[index] = -1
        this.card_favourites[index] = false
        console.log(this.card_favourites)
        response = await axios.post("/favourites", {
          email: this.$store.state.user.email,
          password: this.$store.state.user.password
        })
        this.favourites = response.data.favourites
        this.$store.commit('getting_data_user', {
          email: this.$store.state.user.email,
          password: this.$store.state.user.password,
          basket: this.$store.state.user.basket,
          favourites: this.favourites
        })
      }
      else {
        if (this.$store.state.user.email) {
          console.log(1)
          let response = await axios.post('/addFavourite', {
            email: this.$store.state.user.email,
            password: this.$store.state.user.password,
            favourite: prod
          })
          console.log(response)
          this.card_favourites_index[index] = 0
          this.card_favourites[index] = true
          console.log(this.card_favourites)
          response = await axios.post("/favourites", {
            email: this.$store.state.user.email,
            password: this.$store.state.user.password
          })
          this.favourites = response.data.favourites
          this.$store.commit('getting_data_user', {
            email: this.$store.state.user.email,
            password: this.$store.state.user.password,
            basket: this.$store.state.user.basket,
            favourites: this.favourites
          })
        }
        else {
          this.$router.push({
            name: 'authorization',
          })
        }
      }

    },
    async sort_products() {
      console.log(this.sort_price, this.sort_category)
      console.log(this.sort_color, this.sort_size)
      await this.getting_products()
    },
    setting_sort_price(sort_price) {
      this.sort_price = sort_price
      this.sort_products()
      if (this.sort_price == 1) {
        this.sort_price_flag = true
      }
      else {
        this.sort_price_flag = false
      }
    },
    setting_sort_category(sort_category, index) {
      this.sort_category = sort_category
      if (this.set_category_active.indexOf(true) != -1) {
        this.set_category_active[this.set_category_active.indexOf(true)] = false
      }
      this.set_category_active[index] = true
      this.sort_products()
    },
    delete_filters() {
      this.sort_price = 1
      this.sort_size = "Размер"
      this.sort_color = "Цвет"
      this.sort_category = ""
      this.getting_products()
      if (this.set_category_active.indexOf(true) != -1) {
        this.set_category_active[this.set_category_active.indexOf(true)] = false
      }
      this.sort_price_flag = true
    },
    open_categories() {
      if (this.open_categories_flag) {
        this.open_categories_flag = false
      }
      else {
        this.open_categories_flag = true
      }
    },
    open_filters() {
      if (this.open_filters_flag) {
        this.open_filters_flag = false
      }
      else {
        this.open_filters_flag = true
      }
    }
  },
  mounted() {
    this.getting_products()
  }
};
</script>
<template>
<header-component :logo="logo" :classSVG="classSVG" :classNav="classNav"></header-component>
<main>
  <div class="catalog_container">
      <div class="catalog_sidebar">
        <h1 class="catalog_title catalog_title_desktop">Каталог</h1>
        <div class="catalog_title_box" @click="open_categories">
          <h1 class="catalog_title">Каталог</h1>
          <svg width="10" height="7" viewBox="0 0 10 7" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" :class="{'reverse_arrow': open_categories_flag}">
            <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill=""/>
          </svg>
        </div>
        <div class="catalog_sidebar_brands" :class="{'catalog_sidebar_brands_open': open_categories_flag}">
          <ul>
            <li class="catalog_brand" v-for="(category, index) in set_category" @click="setting_sort_category(category, index)" :class="{'catalog_brand_active': set_category_active[index]}">{{category}}</li>
          </ul>
        </div>
      </div>
      <div class="catalog_main">
        <div class="catalog_main_filters" @click="open_filters">
          <div class="catalog_main_filters_text">
            <div class="catalog_filters_text">Фильтры</div>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_372_321)">
                <path d="M8.75 8.75V12.5L6.25 13.75V8.75L2.5 3.125V1.875H12.5V3.125L8.75 8.75ZM4.0025 3.125L7.5 8.37125L10.9975 3.125H4.0025Z" fill="#E0BEA2"/>
              </g>
              <defs>
                <clipPath id="clip0_372_321">
                  <rect width="15" height="15" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <svg width="10" height="7" viewBox="0 0 10 7" fill="#E0BEA2" xmlns="http://www.w3.org/2000/svg" :class="{'reverse_arrow': open_filters_flag}">
            <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill=""/>
          </svg>
        </div>
        <div class="catalog_main_box" :class="{'catalog_filters_open': open_filters_flag}">
          <div class="catalog_filters">
            <select size="1" class="select_size" v-model="sort_size" @change="sort_products()">
              <option selected>Размер</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
            <select size="1" class="select_color" v-model="sort_color" @change="sort_products()">
              <option selected>Цвет</option>
              <option v-for="color in set_colors" :value="color">{{color}}</option>
            </select>
            <div class="filters_price">
              <input value="-1" type="radio" class="input_sort" name="sort" checked @click="setting_sort_price(1)" :class="{'input_sort_true': sort_price_flag}">
              <input value="1" type="radio" class="input_sort input_sort_rotate" name="sort" @click="setting_sort_price(-1)" :class="{'input_sort_true': !sort_price_flag}">
            </div>
            <span class="catalog_filters_delete" @click="delete_filters">Очистить фильтры</span>
          </div>
        </div>
        <div class="catalog_cards">
          <div class="catalog_card_box" v-for="(prod, index) in products">
            <catalog-card :product="prod" v-on:opening_card="opening_card(prod, index)" v-on:update_favourite="update_favourite(prod, index)" :favourite_active="card_favourites[index]"></catalog-card>
          </div>
        </div>
      </div>
  </div>
</main>
<footer-component></footer-component>
</template>
<style scoped>

.catalog_main_filters {
  display: none;
}

.catalog_title_box {
  display: none;
}

.catalog_cards {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}

.catalog_sidebar_brands {
  padding-bottom: 100px;
}
.input_sort {
  appearance: none;
  background: url("../assets/icon_sort.png") center center;
  background-size: 60% 60%;
  background-repeat: no-repeat;
  width: 17px;
  height: 34px;
  margin-right: 10px;
}
.input_sort_rotate {
  transform: rotate(180deg);
}
.input_sort_true{
  background-color: #f5f5f5;
  outline: 1px solid #bbbbbb;
  border-radius: 20px;
}
body {
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
  font-family: Raleway-YANKI;
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
    max-width: 130px;
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
    cursor: pointer;
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
    align-items: center;
  }
  .catalog_sidebar {
    max-width: 150px;
    width: 100%;
  }
  .catalog_cards {
    padding-bottom: 100px;
  }
  .catalog_main {
    width: 960px;
  }
  .catalog_brand_active {
    font-weight: 600;
  }
  .catalog_filters_delete {
    margin-left: 20px;
    line-height: 18px;
    cursor: pointer;
    border-bottom: 1px solid #939393;
  }

  @media all and (max-width: 900px) {
    .catalog_cards {
      grid-template-columns: 50% 50%;
    }
  }

@media all and (max-width: 680px) {
  .catalog_filters_delete {
    border: none;
  }

  .catalog_container {
    flex-direction: column;
  }

  .catalog_sidebar_brands {
    padding-bottom: 15px;
  }

  .catalog_title_box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 9px 15px 9px;
    width: 100%;
    background-color: #E0BEA2;
    cursor: pointer;
  }

  .catalog_arrow_tablet {
    display: block;
  }

  .catalog_title_desktop {
    display: none;
  }

  .catalog_title {
    padding: 0;
    margin-right: 5px;
    color: #ffffff;
  }

  .catalog_main {
    width: 100%;
  }

  .catalog_sidebar {
    max-width: none;
  }

  main {
    padding-top: 99px;
  }

  .catalog_sidebar_brands {
    display: none;
  }

  .catalog_sidebar_brands_open {
    display: block;
    text-align: center;
    background-color: #E0BEA2;
  }

  .catalog_brand {
    font-size: 18px;
    color: #ffffff;
    padding: 5px 0;
    margin: 0 20px;
  }

  .catalog_brand:not(:last-child) {
    border-bottom: 1px solid #717070;
  }

  .catalog_brand:first-child {
    padding-top: 10px;
  }

  .catalog_sidebar {
    margin-bottom: 15px;
  }
  
  .catalog_main_box {
    display: none;
  }
  
  .catalog_main_filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    padding-bottom: 7px;
    border-bottom: 1px solid #717070;
    margin-bottom: 15px;
  }

  .catalog_filters_text {
    margin-right: 5px;
    font-size: 20px;
  }

  .catalog_main_filters_text {
    display: flex;
    align-items: center;
  }

  .catalog_filters_open {
    display: block;
  }

  .catalog_filters {
    display: grid;
    grid-template-columns: 50% 50%;
    text-align: center;
    justify-items: center;
    width: 100%;
    max-width: 100%;
  }

  .catalog_filters_delete {
    margin: 0;
  }

  .select_size, .select_color {
    margin: 0 0 10px 0;
  }

  .catalog_main_filters {
    cursor: pointer;
  }

  .reverse_arrow {
    transform: rotate(180deg);
  }
}

@media all and (max-width: 500px) {
  .catalog_title {
    font-size: 18px;
  }

  .catalog_filters_text {
    font-size: 18px;
  }

  .catalog_cards {
    padding-bottom: 60px;
  }
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
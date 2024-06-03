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
      sort_category: ""
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
        <h1 class="catalog_title">Каталог</h1>
        <div class="catalog_sidebar_brands">
          <ul>
            <li class="catalog_brand" v-for="(category, index) in set_category" @click="setting_sort_category(category, index)" :class="{'catalog_brand_active': set_category_active[index]}">{{category}}</li>
          </ul>
        </div>
      </div>
      <div class="catalog_main">
        <div class="catalog_filters">
          <select size="1" class="select_size" v-model="sort_size" @change="sort_products()">
            <option selected>Размер</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>0
            <option value="L">L</option>
          </select>
          <select size="1" class="select_color" v-model="sort_color" @change="sort_products()">
            <option selected>Цвет</option>
            <option v-for="color in set_colors" :value="color">{{color}}</option>
          </select>
          <input value="-1" type="radio" class="input_sort" name="sort" checked @click="setting_sort_price(1)">
          <input value="1" type="radio" class="input_sort input_sort_rotate" name="sort" @click="setting_sort_price(-1)">
          <span class="catalog_filters_delete" @click="delete_filters">Очистить фильтры</span>
        </div>
        <div class="catalog_cards row row-cols-3">
          <div class="col" v-for="(prod, index) in products">
            <catalog-card :product="prod" v-on:opening_card="opening_card(prod, index)" v-on:update_favourite="update_favourite(prod, index)" :favourite_active="card_favourites[index]"></catalog-card>
          </div>
        </div>
      </div>
  </div>
</main>
<footer-component></footer-component>
</template>
<style scoped>
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
.input_sort:checked {
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
</style>
<style>
.header_nav_undohome {
  color: #000;
}
.header_svg_undohome {
  fill: #E0BEA2;
}
</style>
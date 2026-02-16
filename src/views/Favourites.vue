<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from '../components/Footer.vue';
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
      favourites: []
    };
  },
  methods: {
    async getting_favourites() {
      let response = await axios.post("/favourites", {
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
      console.log("Vuex")
      console.log(this.$store.state.user.favourites)
    },
    async update_favourite(index) {
      console.log(1)
      let response = await axios.post('/deleteFavourite', {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        favourite_index: index
      })
      console.log(response)
      await this.getting_favourites()
    },
    opening_card(favourite) {
      this.$store.commit('getting_product_card', favourite)
      this.$router.push({
        name: 'product',
      })
    },
  },
  mounted() {
    this.getting_favourites()
  }
};
</script>
<template>
  <header-component :logo="logo"  :classSVG="classSVG" :classNav="classNav"></header-component>
  <section class="favourites">
    <div class="favourites_container">
      <div class="favourites_cards">
        <div class="favourites_card" v-for="(favourite, index) in favourites">
          <catalog-card :product="favourite" :favourite_active="true" v-on:update_favourite="update_favourite(index)" v-on:opening_card="opening_card(favourite)"></catalog-card>
        </div>
      </div>
    </div>
  </section>
  <footer-component></footer-component>
</template>
<style scoped>
.favourites_cards {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
.favourites_container {
  max-width: 1170px;
  width: 100%;
  padding: 144px 15px 0 15px;
  margin: 0 auto;
}
.favourites_cards {
  padding-bottom: 100px;
}

@media screen and (max-width: 650px) {
  .favourites_cards {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .favourites_container {
    padding-top: 100px;
  }
}

@media screen and (max-width: 500px) {
  .favourites_container {
    padding-top: 70px;
  }
}
</style>
<style>
  .catalog_card_like_active {
    background: url("../assets/like_active.svg") no-repeat;
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
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
      console.log(this.$store.state.user)
    },
    async delete_product(index) {
      let response = await axios.post("/delete", {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        index_product: index
      })
      this.total = 0
      console.log(this.$store.state.user.email, this.$store.state.user.password)
      this.basket = response.data.basket
      console.log(this.basket)
      this.$store.commit('getting_data_user', {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        basket: this.basket
      })
      console.log("Vuex")
      console.log(this.$store.state.user)
      for (let i = 0; i < this.basket.length; i++) {
        this.total += Number(this.basket[i].price) * Number(this.basket[i].count)
      }
    }
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
      <div class="favourites_cards row row-cols-3">
        <div class="col" v-for="favourite in favourites">
          <catalog-card :product="favourite"></catalog-card>
        </div>
      </div>
    </div>
  </section>
  <footer-component></footer-component>
</template>
<style scoped>
.favourites_container {
  max-width: 1170px;
  width: 100%;
  padding: 144px 15px 0 15px;
  margin: 0 auto;
}
.favourites_cards {
  padding-bottom: 100px;
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
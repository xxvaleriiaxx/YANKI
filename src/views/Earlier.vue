<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from '../components/Footer.vue';
import {store} from "../main"
import axios from "axios";
export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      logo: 'logo_secondary.svg',
      classSVG: 'header_svg_undohome',
      classNav: 'header_nav_undohome',
      basket: []
    };
  },
  methods: {
    async getting_basket() {
      let response = await axios.post("/basket", {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password
      })
      this.basket = response.data.basket
      console.log(this.basket)
      this.$store.commit('getting_data_user', {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        basket: this.basket
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
    }
  },
  mounted() {
    this.getting_basket()
  }
};
</script>
<template>

</template>
<style scoped>

</style>
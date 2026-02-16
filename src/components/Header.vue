<template>
  <header>
    <div class="header_container">
      <div class="header_tablet_cross" @click="open_menu" :class="{'header_cross_active': menuActive}">
        <svg :class="classSVG" width="28" height="27" viewBox="0 0 28 27" fill="white" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" width="34" height="4" transform="rotate(45 3 0)"/>
          <rect y="24.0416" width="34" height="4" transform="rotate(-45 0 24.0416)"/>
        </svg>
      </div>
      <div class="header_container_none" :class="{'header_container_left_none': !menuActive}"></div>
      <div class="header_box_left">
        <nav>
          <ul>
            <li><a href="#" class="header_nav_a header_nav_desktop" :class="classNav" id="12">NEW</a></li>
            <li><router-link :to="{ name: 'catalog' }" class="header_nav_a header_nav_desktop" :class="classNav">Каталог</router-link></li>
            <li><a href="#" class="header_nav_a header_nav_desktop" :class="classNav">О нас</a></li>
          </ul>
        </nav>
      </div>
      <div class="header_logo">
        <router-link :to="{name: 'home'}" @click="takes_reload">
          <img :src="'src/assets/' + logo" alt="">
        </router-link>
      </div>
      <div class="header_container_none" :class="{'header_container_right_none': menuActive}"></div>
      <div class="header_burger" @click="open_menu" :class="{'header_burger_active': menuActive}">
        <svg :class="classSVG" class="header_burger_svg" width="34" height="24" viewBox="0 0 34 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <rect y="20" width="34" height="4"/>
          <rect y="10" width="26" height="4"/>
          <rect width="18" height="4"/>
        </svg>
      </div>
      <div class="header_burger_menu" :class="{'header_menu_active': menuActive}">
        <router-link :to="{name: 'home'}" @click="takes_reload"><div class="header_burger_elem">Главная</div></router-link>
        <router-link :to="{ name: 'catalog' }"><div class="header_burger_elem">Каталог</div></router-link>
        <router-link :to="{ name: 'favourites'}"><div class="header_burger_elem">Избранное</div></router-link>
        <router-link :to="{ name: 'basket'}"><div class="header_burger_elem">Корзина</div></router-link>
        <router-link :to="{ name: 'account'}" ><div class="header_burger_elem header_burger_elem_last">Аккаунт</div></router-link>
      </div>
      <div class="header_box_right">
        <div class="header_box_right_container">
          <router-link :to="{ name: 'account'}" class="image_header">
            <svg :class="classSVG" width="20" height="25" viewBox="0 0 20 25" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 25C0.5 22.4741 1.5034 20.0517 3.28946 18.2656C5.07552 16.4796 7.49794 15.4762 10.0238 15.4762C12.5497 15.4762 14.9721 16.4796 16.7582 18.2656C18.5442 20.0517 19.5476 22.4741 19.5476 25H17.1667C17.1667 23.1056 16.4141 21.2888 15.0746 19.9492C13.735 18.6097 11.9182 17.8571 10.0238 17.8571C8.1294 17.8571 6.31259 18.6097 4.97305 19.9492C3.6335 21.2888 2.88095 23.1056 2.88095 25H0.5ZM10.0238 14.2857C6.07738 14.2857 2.88095 11.0893 2.88095 7.14286C2.88095 3.19643 6.07738 0 10.0238 0C13.9702 0 17.1667 3.19643 17.1667 7.14286C17.1667 11.0893 13.9702 14.2857 10.0238 14.2857ZM10.0238 11.9048C12.6548 11.9048 14.7857 9.77381 14.7857 7.14286C14.7857 4.5119 12.6548 2.38095 10.0238 2.38095C7.39286 2.38095 5.2619 4.5119 5.2619 7.14286C5.2619 9.77381 7.39286 11.9048 10.0238 11.9048Z"/>
            </svg>

          </router-link>
          <router-link :to="{ name: 'favourites'}" class="image_header">
            <svg :class="classSVG" width="25" height="25" viewBox="0 0 25 25" fill="white" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_140)">
                <path d="M12.501 3.16119C15.4372 0.524988 19.9746 0.612487 22.8033 3.44618C25.6308 6.28113 25.7283 10.796 23.0983 13.741L12.4985 24.3558L1.90122 13.741C-0.728729 10.796 -0.62998 6.27363 2.19622 3.44618C5.02741 0.616237 9.55608 0.521238 12.501 3.16119ZM21.0334 5.2124C19.1584 3.33494 16.1335 3.25869 14.171 5.02115L12.5023 6.51863L10.8323 5.0224C8.86359 3.25744 5.8449 3.33494 3.96493 5.2149C2.10247 7.07737 2.00872 10.0586 3.72494 12.0285L12.4998 20.8171L21.2746 12.0298C22.9921 10.0586 22.8983 7.08112 21.0334 5.2124Z"/>
              </g>
              <defs>
                <clipPath id="clip0_1_140">
                  <rect width="25" height="25"/>
                </clipPath>
              </defs>
            </svg>

          </router-link>
          <router-link :to="{ name: 'basket'}" class="image_header">
            <svg :class="classSVG" width="25" height="25" viewBox="0 0 25 25" fill="white" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_143)">
                <path d="M3.81655 5.48063L0 1.66525L1.66525 0L5.48063 3.81655H23.4183C23.6017 3.81654 23.7826 3.85941 23.9466 3.94173C24.1105 4.02406 24.2529 4.14356 24.3624 4.2907C24.4719 4.43785 24.5456 4.60856 24.5774 4.78921C24.6092 4.96986 24.5984 5.15545 24.5457 5.33117L21.7213 14.746C21.6486 14.9886 21.4997 15.2012 21.2966 15.3524C21.0935 15.5035 20.847 15.5852 20.5938 15.5851H6.17027V17.9389H19.1157V20.2926H4.99341C4.68129 20.2926 4.38195 20.1686 4.16125 19.9479C3.94054 19.7272 3.81655 19.4278 3.81655 19.1157V5.48063ZM6.17027 6.17027V13.2314H19.7183L21.8366 6.17027H6.17027ZM5.58184 25C5.11366 25 4.66465 24.814 4.33359 24.483C4.00254 24.1519 3.81655 23.7029 3.81655 23.2347C3.81655 22.7665 4.00254 22.3175 4.33359 21.9865C4.66465 21.6554 5.11366 21.4694 5.58184 21.4694C6.05002 21.4694 6.49903 21.6554 6.83009 21.9865C7.16114 22.3175 7.34713 22.7665 7.34713 23.2347C7.34713 23.7029 7.16114 24.1519 6.83009 24.483C6.49903 24.814 6.05002 25 5.58184 25ZM19.7041 25C19.236 25 18.7869 24.814 18.4559 24.483C18.1248 24.1519 17.9388 23.7029 17.9388 23.2347C17.9388 22.7665 18.1248 22.3175 18.4559 21.9865C18.7869 21.6554 19.236 21.4694 19.7041 21.4694C20.1723 21.4694 20.6213 21.6554 20.9524 21.9865C21.2834 22.3175 21.4694 22.7665 21.4694 23.2347C21.4694 23.7029 21.2834 24.1519 20.9524 24.483C20.6213 24.814 20.1723 25 19.7041 25Z"/>
              </g>
              <defs>
                <clipPath id="clip0_1_143">
                  <rect width="25" height="25"/>
                </clipPath>
              </defs>
            </svg>
          </router-link>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3000";
export default {
  data() {
    return {
      menuActive: false
    }
  },
  props: {
    classNav: String,
    classSVG: String,
    logo: String
  },
  methods: {
    getting_data_user() {
      if (this.$store.state.user.email && this.$store.state.user.password) {
        return true
      }
      else {
        return false
      }
    },
    open_menu() {
      if (this.menuActive) {
        this.menuActive = false
      }
      else {
        this.menuActive = true
      }
    },
    takes_reload() {
      this.$store.state.take_reload = true
    }
  }
}
</script>
<style scoped>
.header_burger_menu, .header_tablet_cross {
  display: none;
}
.header_burger {
  transform: rotate(180deg);
  display: none;
}

nav {
  max-width: 275px;
  width: 100%;
  align-self: center;
  padding: 0 30px;
}

ul {
  display: flex;
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
}

header {
  padding: 24px 30px;
  position: absolute;
  width: 100%;
}

.header_container {
  max-width: 1170px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
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

@media all and (max-width: 900px) {
  header {
    padding: 12px 10px;
  }

  nav {
    padding: 0;
  }

  .header_box_right {
    max-width: 150px;
  }

  .header_box_left {
    max-width: 240px;
  }
}

@media all and (max-width: 650px) {
  .header_nav_desktop {
    display: none;
  }

  .header_box_right_container {
    display: none;
  }

  .header_burger {
    display: block;
    cursor: pointer;
  }

  .header_cross_active {
    display: block;
    cursor: pointer;
  }

  .header_burger_active {
    display: none;
  }

  .header_burger_menu {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background-color: #FFFFFF;
    text-align: center;
    padding-top: 80px;
  }

  .header_burger_elem {
    text-transform: uppercase;
    padding: 20px 0;
    border-top: 1px solid #252525;
    margin: 0 20px;
  }

  .header_burger_elem_last {
    border-bottom: 1px solid #252525;
  }

  .header_tablet_cross {
    width: 27px;
    height: 27px;
  }

  .header_container {
    align-items: center;
  }

  .header_menu_active {
    display: block;
  }

  .header_box_left {
    display: none;
  }

  .header_container_none {
    width: 27px;
    height: 27px;
    display: none;
  }

  .header_container_right_none {
    display: block;
  }

  .header_container_left_none {
    display: block;
  }

  .header_burger_svg {
    width: 27px;
  }

  .header_box_right {
    max-width: none;
    width: auto;
  }

  .header_box_right {
    display: none;
  }
}

@media all and (max-width: 500px) {
  .header_logo {
    width: 97px;
  }

  .header_logo > a > img {
    width: 100%;
  }

  main {
    padding-top: 50px;
  }
}
</style>
<style>
header {
  z-index: 1;
}

.header_nav_a {
  text-transform: uppercase;
  color: #FFF;
}
li:not(:last-child) {
  padding-right: 25px;
}
li, a {
  text-decoration: none;
}
</style>
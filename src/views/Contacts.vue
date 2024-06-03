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
    };
  }
}
</script>
<template>
  <header-component :logo="logo"  :classSVG="classSVG" :classNav="classNav"></header-component>
  <main>
    <section class="contacts">
        <div class="contacts_container">
          <h1 class="contacts_title">Связаться с нами</h1>
          <div class="contacts_boxes">
            <div class="contacts_box">
              <h2>В социальных сетях</h2>
              <div class="contacts_images">
                <div class="contacts_image">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                    <g fill="#e0bea2" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g></g>
                  </svg>
                </div>
                <div class="contacts_image">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                    <g fill="#e0bea2" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.69071,0 -23,10.3093 -23,23c0,12.6907 10.30929,23 23,23c12.69071,0 23,-10.3093 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60983,0 21,9.39017 21,21c0,11.60983 -9.39017,21 -21,21c-11.60983,0 -21,-9.39017 -21,-21c0,-11.60982 9.39017,-21 21,-21zM34.08789,14.03516c-0.684,0 -1.45256,0.15842 -2.35156,0.48242c-1.396,0.503 -17.81559,7.47458 -19.68359,8.26758c-1.068,0.454 -3.05664,1.2985 -3.05664,3.3125c0,1.335 0.78227,2.28984 2.32227,2.83984c0.828,0.295 2.79455,0.89108 3.93555,1.20508c0.484,0.133 0.99834,0.20117 1.52734,0.20117c1.035,0 2.07658,-0.25789 2.89258,-0.71289c-0.007,0.168 -0.00242,0.33781 0.01758,0.50781c0.123,1.05 0.77047,2.03758 1.73047,2.64258c0.628,0.396 5.75744,3.83291 6.52344,4.37891c1.076,0.769 2.2655,1.17578 3.4375,1.17578c2.24,0 2.99152,-2.31283 3.35352,-3.42383c0.525,-1.613 2.49089,-14.72997 2.71289,-17.04297c0.151,-1.585 -0.50958,-2.89019 -1.76758,-3.49219c-0.471,-0.227 -1.00875,-0.3418 -1.59375,-0.3418zM34.08789,16.03516c0.275,0 0.52052,0.04548 0.72852,0.14648c0.473,0.227 0.71363,0.73305 0.64063,1.49805c-0.242,2.523 -2.20309,15.32928 -2.62109,16.61328c-0.358,1.098 -0.73512,2.04297 -1.45313,2.04297c-0.718,0 -1.50239,-0.25169 -2.27539,-0.80469c-0.773,-0.552 -5.90614,-3.99436 -6.61914,-4.44336c-0.625,-0.394 -1.28647,-1.37617 -0.35547,-2.32617c0.767,-0.782 6.58503,-6.42878 7.08203,-6.92578c0.37,-0.371 0.19698,-0.81836 -0.16602,-0.81836c-0.125,0 -0.27469,0.05269 -0.42969,0.17969c-0.608,0.497 -9.08436,6.169 -9.81836,6.625c-0.486,0.302 -1.23853,0.51953 -2.01953,0.51953c-0.333,0 -0.67014,-0.03991 -0.99414,-0.12891c-1.128,-0.311 -3.03692,-0.89016 -3.79492,-1.16016c-0.729,-0.26 -0.99414,-0.50908 -0.99414,-0.95508c0,-0.634 0.89489,-1.07166 1.83789,-1.47266c0.996,-0.423 18.23012,-7.74156 19.57812,-8.22656c0.624,-0.226 1.19483,-0.36328 1.67383,-0.36328z"></path></g></g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="contacts_box">
              <h2>По телефону</h2>
              <div class="contacts_text">+71234567890</div>
            </div>
            <div class="contacts_box">
              <h2>По почте</h2>
              <div class="contacts_text">info@yanki.com</div>
            </div>
            <div class="contacts_box">
              <h2>Наш офис</h2>
              <div class="contacts_text">г. Москва, улица Декабристов, 12</div>
            </div>
          </div>
        </div>
    </section>
  </main>
  <footer-component></footer-component>
</template>
<style scoped>
.contacts_container {
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
}
.contacts_boxes {
  display: flex;
  justify-content: space-between;
}
.contacts_box > h2 {
  font-size: 16px;
  padding-bottom: 20px;
  margin: 0;
  color: #000000;
}
.contacts_box > div {
  font-size: 16px;
  font-weight: 300;
  color: #252525;
}
.contacts {
  padding-top: 144px;
}
.contacts_title {
  font-size: 20px;
  padding-bottom: 30px;
}
.contacts_image > svg {
  width: 25px;
  height: 25px;
}
.contacts_image:not(:last-child) {
  margin-right: 15px;
}
.contacts_images {
  display: flex;
}
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
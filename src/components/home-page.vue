<template>
  <myheader />
  <featureshome />
  <descrption-home />
  <descriptiontwohome />
  <counterhome />
  <customerperspective />
  <priceplan />
  <parallax-home />
  <weblog-home />
  <footer-home />
  <menutest />
</template>

<script>
import DescrptionHome from "./descrption-home.vue";
import featureshome from "./features-home.vue";
import myheader from "./my-header.vue";
import descriptiontwohome from './description-two-home.vue'
import counterhome from './counter-home.vue'
import customerperspective from './Customer-perspective.vue'
import priceplan from './price-plan.vue'
import ParallaxHome from './parallax-home.vue';
import WeblogHome from './weblog-home.vue';
import FooterHome from './footer-home.vue';
import menutest from './menu-test.vue'

export default {
  components: {
    myheader,
    featureshome,
    DescrptionHome,
    descriptiontwohome,
    counterhome,
    customerperspective,
    priceplan,
    ParallaxHome,
    WeblogHome,
    FooterHome,
    menutest
    
  },

};
</script>

<style>
</style>
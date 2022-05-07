<template>
    <contactuse :title="titleabout" :titlebreadcrumb="titlebreadcrumbabout" />
  <div class="page-about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="about">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="about-img">
                  <div class="img-wrapper-about">
                    <img src="https://s6.uupload.ir/files/welcome-top_hyv.jpg">
                    <a href="#" class="play">
                      <i class="fa fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 description-about">
                <h2> درباره شرکت ما </h2>
                <h3> ارائه دهنده خدمات طراحی و توسعه وب </h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است.
                </p>
                <div class="count-about">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                      <strong> 96 </strong>
                      <span class="title-count-about"> کاربر فعال </span>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                      <strong> 190 </strong>
                      <span class="title-count-about"> گروه فعال </span>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                      <strong> 12 </strong>
                      <span class="title-count-about"> کارمند فعال </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <parallax-home />
  <aboutbox />
  <customerperspective />
  <footerhome />
</template>

<script>
import { ref } from '@vue/reactivity'
import contactuse from './contact-use.vue'
import ParallaxHome from './parallax-home.vue'
import aboutbox from './about-box.vue'
import customerperspective from './Customer-perspective.vue'
import footerhome from './footer-home.vue'
export default {
  components:{ contactuse, ParallaxHome , aboutbox , customerperspective, footerhome},
setup(){
  const titleabout =ref('درباره ما')
  const titlebreadcrumbabout =ref('درباره ما')

  return {
    titlebreadcrumbabout,
    titleabout
  }
}
}
</script>

<style>

</style>
<template>
 <contactuse :title="title" :titlebreadcrumb="titlebreadcrumb"/>
  <div class="info-contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="contact-area">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="map-canvas">
                  <div class="box-err-map">
                    <div class="gm-err-container">
                      <div class="gm-err-content">
                        <div class="gm-err-icon">
                          <img
                            src="http://maps.gstatic.com/mapfiles/api-3/images/icon_error.png"
                            alt=""
                          />
                        </div>
                        <div class="gm-err-title">
                          Oops! Something went wrong.
                        </div>
                        <div class="gm-err-message">
                          This page didn't load Google Maps correctly. See the
                          JavaScript console for technical details.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="contact-item first-contact-item">
                  <div class="icon-contact">
                    <i class="fa fa-location-arrow"></i>
                  </div>
                  <div class="txt-contact">
                    <p>نشانی : تهران-یوسف اباد-کوچه بیستم-پلاک 47-واحد1</p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="icon-contact">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="txt-contact">
                    تلفن :
                    <a href="tel:+982123456789"> 021.23456789 </a>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="icon-contact">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div class="txt-contact">
                    ایمیل :
                    <a href="mailto:support@yourbrand.com">
                      support@yourbrand.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="contact-form">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <h5 class="title-cont-form">تماس با ما</h5>
                <div class="contact-text-form">
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                  <p>
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                    متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                  </p>
                </div>
              </div>
              <div class="col-lg-8 col-md-6 col-sm-12">
                <div class="contact-form-left">
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" placeholder="نام شما" />
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" placeholder=" ادرس ایمیل" />
                    </div>
                    <div class="col-lg-12">
                        <textarea placeholder="متن پیام"></textarea>
                    </div>
                    <div class="col-lg-12">
                        <button class="dark-btn-price"> ارسال پیام </button>
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
  <footer-home />
</template>

<script>
import FooterHome from './footer-home.vue';
import contactuse from './contact-use.vue'
import { ref } from '@vue/reactivity';
export default {
    components:{
        FooterHome,
        contactuse
    },
    setup(){
      const title = ref('تماس با ما')
      const titlebreadcrumb = ref('تماس با ما')

      return{
        title ,titlebreadcrumb
      }
    }
};
</script>

<style>
</style>
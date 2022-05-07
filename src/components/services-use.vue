<template>
  <contactuse :title="titleserv" :titlebreadcrumb="titlebreadcrumbserv" />
  <div class="page-services">
      <div class="container">
          <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                  <sevices-box :src="src1" :title="title"/>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                  <sevices-box :src="src2" :title="title" />
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <sevices-box :src="src3" :title="title" />
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <sevices-box :src="src4"  :title="title"/>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <sevices-box :src="src5" :title="title" />
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <sevices-box :src="src6" :title="title" />
              </div>
          </div>
      </div>
  </div>
  <parallax-home />
  <footer-home />
</template>

<script>
import { ref } from "@vue/reactivity";
import contactuse from './contact-use.vue'
import ParallaxHome from './parallax-home.vue';
import FooterHome from './footer-home.vue';
import SevicesBox from './sevices-box.vue';
export default {
    components:{ contactuse, ParallaxHome, FooterHome, SevicesBox },
  setup() {
    const titleserv = ref(" خدمات ما");
    const titlebreadcrumbserv = ref(" خدمات ما ");
    const src1 = ref('https://s6.uupload.ir/files/1_2_ex1y.jpg')
    const src2 = ref('https://s6.uupload.ir/files/2_2_os42.jpg')
    const src3 = ref('https://s6.uupload.ir/files/3_2_nww6.jpg')
    const src4 = ref('https://s6.uupload.ir/files/4_6h0s.jpg')
    const src5 = ref('https://s6.uupload.ir/files/5_6ufd.jpg')
    const src6 = ref('https://s6.uupload.ir/files/6_4ejo.jpg')
    const title = ref('عنوان ازمایشی')

    return {
      titleserv,
      titlebreadcrumbserv,
      src1,
      src2,src3,src4,src5,src6,title
    };
  },
};
</script>

<style>
</style>
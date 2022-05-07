<template>
  <contactuse :title="titleblog" :titlebreadcrumb="titlebreadcrumbblog" />
  <section class="section-blog">
      <div class="container">
          <div class="row">
              <div class="col-lg-8 col-md-12 col-sm-12">
                  <div class="row box-right-web">
                      <div class="col-lg-6 col-md-6 col-sm-12">
                          <sevicesbox :src="src1"  :title="title"/>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                          <sevicesbox :src="src2"  :title="title"/>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                          <sevicesbox :src="src3"  :title="title"/>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                          <sevicesbox :src="src4"  :title="title"/>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                          <sevicesbox :src="src5"  :title="title"/>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                          <sevicesbox :src="src6" :title="title"/>
                      </div>
                  </div>
                  <div class="nav-blog">
                      <ul class="pagination justify-content-center">
                          <li class="pagination-item">
                              <a href="#" class="pagi-link">
                                  <span> « </span>
                              </a>
                          </li>
                          <li class="pagination-item">
                              <a href="#" class="pagi-link"> 1 </a>
                          </li>
                          <li class="pagination-item">
                              <a href="#" class="pagi-link"> 2 </a>
                          </li>
                          <li class="pagination-item">
                              <a href="#" class="pagi-link"> 3 </a>
                          </li>
                               <li class="pagination-item">
                              <a href="#" class="pagi-link">
                                  <span> » </span>
                              </a>
                          </li>

                      </ul>
                  </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                  <sidebarweblog />
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import contactuse from "./contact-use.vue";
import { ref } from "@vue/reactivity";
import sevicesbox from './sevices-box.vue'
import sidebarweblog from './sidebar-weblog.vue'
export default {
  components: {
    contactuse,sevicesbox,sidebarweblog
  },
  setup() {
    const titleblog = ref(" وبلاگ ");
    const titlebreadcrumbblog = ref(" وبلاگ ");
    const src1 = ref('https://s6.uupload.ir/files/1_1_kix.jpg')
    const src2 = ref('https://s6.uupload.ir/files/2_1_nh3u.jpg')
    const src3 = ref('https://s6.uupload.ir/files/3_1_u2mm.jpg')
    const src4 = ref('https://s6.uupload.ir/files/4_1_glw6.jpg')
    const src5 = ref('https://s6.uupload.ir/files/3_2_vkrq.jpg')
    const src6 = ref('https://s6.uupload.ir/files/2_1_nh3u.jpg')
    const title = ref('13 فروردین')

    return {
      titlebreadcrumbblog,
      titleblog,
      src1 ,src2 ,src3 ,src4 ,src5 ,src6  , title
    };
  },
};
</script>

<style>
</style>
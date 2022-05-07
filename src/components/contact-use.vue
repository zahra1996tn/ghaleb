<template>
  <section class="section-contact">
    <div class="cover-contact">
      <div class="page-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1> {{ title }} </h1>
            </div>
            <div class="col-lg-12">
              <ol class="breadcrumb">
                <li>
                  <router-link to="/">
                    <a href="#" class="home">
                      <i class="fa fa-home"></i>
                    </a>
                  </router-link>
                </li>
                <li class="active"> {{ titlebreadcrumb }} </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:['title' ,'titlebreadcrumb']
}
</script>

<style>
</style>
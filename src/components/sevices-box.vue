<template>
  <div class="services-post">
    <div class="div-imgfix-service">
      <div class="box-img-serv">
        <img
          :src="src"
          class="img-fix-serv"
        />
      </div>
    </div>
    <div class="post-content-serv">
      <h3>{{ title }}</h3>
      <div class="text-content-serv">
        طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
        ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید.
      </div>
      <a href="#" class="dark-btn-price"> ادامه مطلب </a>
    </div>
  </div>
</template>

<script>
export default {
    props:['src', 'title']
};
</script>

<style>
</style>
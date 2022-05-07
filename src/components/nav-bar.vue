<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid box-nav">
              <img src="https://s6.uupload.ir/files/logo-blue_e4fo.png" />
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link to="/">
                      <a class="nav-link active" aria-current="page" href="#"
                        >خانه</a
                      >
                    </router-link>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#">
                      لندینگ پیج <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#features"> امکانات </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#customer"> مشتریان </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#priceplan">
                          تعرفه ها
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#weblog"> وبلاگ </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#">
                      صفحات <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <router-link to="/about">
                          <a class="dropdown-item" href="#"> درباره ما </a>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/services">
                          <a class="dropdown-item" href="#"> خدمات ما </a>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/question">
                          <a class="dropdown-item" href="#"> سوالات متداول </a>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/weblog">
                          <a class="dropdown-item" href="#"> وبلاگ </a>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact">
                      <a class="nav-link" href="#"> تماس با ما </a>
                    </router-link>
                  </li>
                </ul>

                <div class="box-btns-log-sign">
                  <button type="submit" class="btn-login">ورود کاربران</button>
                  <button type="submit" class="btn-signup">ثبت نام</button>
                </div>
              </div>
              <!-- responsive nav -->
              <a
                class="menu-trigger"
                data-toggle="collapse"
                href="#accordion"
                role="button"
                aria-expanded="false"
                aria-controls="accordion"
              >
                <i class="fa fa-navicon"></i>
              </a>
              <div class="collapse coll-respon" id="accordion">
                <ul class="nav">
                  <li>
                    <a href="#"> خانه </a>
                  </li>
                  <li class="subnav" id="headingOne">
                    <a
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      لندینگ پیج
                    </a>
                    <ul
                      id="collapseOne"
                      class="collapse active"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <li>
                        <a href="#"> امکانات </a>
                      </li>
                      <li>
                        <a href="#"> مشتریان </a>
                      </li>
                      <li>
                        <a href="#"> تعرفه ها </a>
                      </li>
                      <li>
                        <a href="#"> وبلاگ </a>
                      </li>
                    </ul>
                  </li>
                  <li class="subnav" id="headingtwo">
                    <a
                      data-toggle="collapse"
                      data-target="#collapsetwo"
                      aria-expanded="false"
                      aria-controls="collapsetwo"
                    >
                      صفحات
                    </a>
                    <ul
                      id="collapsetwo"
                      class="collapse active"
                      aria-labelledby="headingtwo"
                      data-parent="#accordion"
                    >
                      <li>
                        <a href="#"> درباره ما </a>
                      </li>
                      <li>
                        <a href="#"> خدمات ما </a>
                      </li>
                      <li>
                        <a href="#"> سوالات متداول </a>
                      </li>
                      <li>
                        <a href="#"> وبلاگ </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"> تماس با ما </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>
<template>
  <nav
    dir="rtl"
    class="navbar navbar-vertical fixed-right navbar-expand-md navbar-light bg-white"
    id="sidenav-main"
  >
    <div class="container-fluid">
      <!-- Toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#sidenav-collapse-main"
        aria-controls="sidenav-main"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Brand -->
      <a class="navbar-brand pt-0" href="./index.html">
        <img
          src="@/assets/img/brand/Logo_original.svg"
          class="navbar-brand-img"
          alt="..."
        />
      </a>

      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="sidenav-collapse-main">
        <!-- Collapse header -->
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="./index.html">
                <img src="@/assets/img/brand/blue.png" />
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#sidenav-collapse-main"
                aria-controls="sidenav-main"
                aria-expanded="false"
                aria-label="Toggle sidenav"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-4 mb-3 d-md-none">
          <div class="input-group input-group-rounded input-group-merge">
            <input
              type="search"
              class="form-control form-control-rounded form-control-prepended"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-prepend">
              <div class="input-group-text">
                <span class="fa fa-search"></span>
              </div>
            </div>
          </div>
        </form>
        <!-- Navigation -->
        <ul class="navbar-nav pr-0" dir="rtl">
          <li class="nav-item text-center mb-3">
            <!-- <a class="btn btn-info" href="@/add-invoice.html">
            </a> -->
            <router-link class="btn btn-info" to="/add-invoice">
              <i class="fas fa-pencil-alt ml-2"></i> إنشاء فاتورة جديدة
            </router-link>
          </li>
          <li class="nav-item  active ">
            <router-link class="nav-link  active" to="/">
              <i class="ni ni-tv-2 text-red ml-3"></i> لوحة التحكم
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="/accounts">
              <i class="ni ni-credit-card text-red ml-3"></i> الحسابات
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="/clients">
              <i class="ni ni-circle-08 text-red ml-3"></i> العملاء
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="/invoice-list">
              <i class="ni ni-single-copy-04 text-red ml-3"></i> الفواتير
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="/settings">
              <i class="ni ni-settings-gear-65 text-red ml-3"></i> الإعدادات
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="/login">
              <i class="ni ni-key-25 text-red ml-3"></i> دخول
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="/register">
              <i class="ni ni-circle-08 text-pink ml-3"></i> تسجيل
            </router-link>
          </li>
        </ul>
        <!-- Divider -->
        <hr class="my-3" />
        <!-- Heading -->
        <h6 class="navbar-heading text-muted text-right">التوثيق</h6>
        <!-- Navigation -->
        <ul class="navbar-nav mb-md-3 pr-0">
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html"
            >
              <i class="ni ni-spaceship ml-3"></i>البداية
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html"
            >
              <i class="ni ni-palette ml-3"></i> Foundation
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html"
            >
              <i class="ni ni-ui-04 ml-3"></i> Components
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

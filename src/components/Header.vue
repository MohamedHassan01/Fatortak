<template>
  <nav
    dir="rtl"
    class="navbar navbar-top bg-primary navbar-expand-md navbar-dark"
    id="navbar-main"
  >
    <div class="container-fluid">
      <!-- Brand -->
      <a
        class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
        href="./index.html"
        >لوحة التحكم</a
      >
      <!-- Form -->
      <form
        class="navbar-search navbar-search-dark form-inline d-none d-md-flex mr-lg-auto"
      >
        <div class="form-group mb-0">
          <div class="input-group input-group-alternative">
            <div class="input-group-prepend">
              <span class="input-group-text"
                ><i class="fas fa-search"></i
              ></span>
            </div>
            <input
              class="form-control text-left ml-3"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
      </form>
      <!-- User -->
      <ul class="navbar-nav align-items-center d-none d-md-flex">
        <li class="nav-item dropdown">
          <a
            class="nav-link pr-0"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img
                  alt="Image placeholder"
                  src="@/assets/img/theme/team-4-800x800.jpg"
                />
              </span>
              <div class="media-body mr-2 d-none d-lg-block">
                <span class="mb-0 text-sm  font-weight-bold">Fahad Khlaed</span>
              </div>
            </div>
          </a>
          <div
            class="dropdown-menu dropdown-menu-arrow dropdown-menu-right text-right"
          >
            <div class=" dropdown-header noti-title">
              <h6 class="text-overflow m-0">مرحبا!</h6>
            </div>
            <a href="./examples/profile.html" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>حسابي</span>
            </a>
            <a href="./examples/profile.html" class="dropdown-item">
              <i class="ni ni-settings-gear-65"></i>
              <span>الإعدادات</span>
            </a>
            <a href="./examples/profile.html" class="dropdown-item">
              <i class="ni ni-calendar-grid-58"></i>
              <span>التحليلات</span>
            </a>
            <a href="./examples/profile.html" class="dropdown-item">
              <i class="ni ni-support-16"></i>
              <span>الدعم</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#!" class="dropdown-item">
              <i class="ni ni-user-run"></i>
              <span>تسجيل خروج</span>
            </a>
          </div>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link nav-link-icon"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="ni ni-bell-55" style="right: auto; left: 0px;"></i>
          </a>
          <div
            class="dropdown-menu dropdown-menu-arrow dropdown-menu-right it"
            aria-labelledby="navbar-default_dropdown_1"
          >
            <a class="dropdown-item" href="#"
              >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى</a
            >
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"
              >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى</a
            >
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"
              >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى</a
            >
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="css" scoped>
.navbar .it:before {
  right: auto !important;
  left: 0 !important;
}
</style>

<template>
  <div>
    <Sidebar />
    <div class="add-client main-content" dir="rtl">
      <!-- Navbar Header -->
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
            >العملاء</a
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
                    <span class="mb-0 text-sm  font-weight-bold"
                      >Fahad Khlaed</span
                    >
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
                <i class="fad fa-bell"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-arrow dropdown-menu-right"
                aria-labelledby="navbar-default_dropdown_1"
              >
                <a class="dropdown-item" href="#"
                  >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى</a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#"
                  >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى</a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#"
                  >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى</a
                >
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div
        class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style="min-height: 600px; background-size: cover; background-position: center top;"
      >
        <!-- Mask -->
        <span class="mask bg-gradient-default opacity-8"></span>
        <!-- Header container -->
        <div class="container-fluid d-flex align-items-center">
          <div class="row">
            <div class="col-lg-7 col-md-10 text-right" dir="rtl">
              <h1 class="display-2 text-white">Hello!</h1>
              <p class="text-white mt-0 mb-5">
                This is the Add a customer account page. You can see your work
                progress and project management or specific tasks
              </p>
              <a href="#!" class="btn btn-info">Back to list</a>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid mt--7">
        <div class="row">
          <div class="col-xl-12 order-xl-1">
            <div class="card bg-secondary shadow">
              <div class="card-header bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0 text-right">اضافة عميل</h3>
                  </div>
                </div>
              </div>
              <div class="card-body text-right" dir="rtl">
                <form method="post" action="#" autocomplete="off">
                  <input
                    type="hidden"
                    name="_token"
                    value="xigoqv0GqvPIKIItBPy531i9Ujq8YWLYX7aj1YoL"
                  />
                  <h6 class="heading-small text-muted mb-4 text-center">
                    بيانات العميل
                  </h6>
                  <div class="pl-lg-4">
                    <div class="form-group">
                      <label class="form-control-label" for="input-name"
                        >اسم الشركة</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="input-name"
                        class="form-control form-control-alternative"
                        placeholder="اسم الشركة"
                        value=""
                        required=""
                        autofocus=""
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-control-label" for="input-email"
                        >البريد الالكتروني</label
                      >
                      <input
                        type="email"
                        name="email"
                        id="input-email"
                        class="form-control form-control-alternative"
                        placeholder="البريد الالكتروني"
                        value=""
                        required=""
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-control-label" for="input-number"
                        >رقم الجوال</label
                      >
                      <input
                        type="number"
                        name="number"
                        id="input-number"
                        class="form-control form-control-alternative"
                        placeholder="رقم الجوال"
                        value=""
                        required=""
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-control-label" for="input-Website"
                        >رابط الموقع</label
                      >
                      <input
                        type="password"
                        name="Website"
                        id="Website"
                        class="form-control form-control-alternative"
                        placeholder="رابط الموقع"
                        value=""
                        required=""
                      />
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-success mt-4">
                        اضافة العميل
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "add-account",
  components: {
    Sidebar,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.bg-primary {
  background-color: transparent !important;
}
.header {
  background-image: url("../assets/img/theme/profile-cover.jpg");
}
</style>

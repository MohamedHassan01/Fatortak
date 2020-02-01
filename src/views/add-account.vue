<template>
  <div>
    <Sidebar />
    <div class="add-account main-content" dir="rtl">
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
                  <div class="col-12">
                    <h3 class="mb-0 text-right">معلومات الحساب البنكي</h3>
                  </div>
                </div>
              </div>
              <div class="card-body text-right">
                <form>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group focused">
                          <label class="form-control-label" for="input-username"
                            >حدد البنك</label
                          >
                          <select id="vat" name="vat" class="form-control">
                            <option value="الراجحي" selected="">الراجحي</option>
                            <option value="الإنماء">الإنماء</option>
                            <option value="الأهلى">الأهلى</option>
                            <option value="البلاد">البلاد</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-username"
                            >اسم صاحب الحساب</label
                          >
                          <input
                            type="text"
                            id="input-username"
                            class="form-control form-control-alternative"
                            placeholder="ادخل اسم صاحب الحساب"
                            value=""
                            maxlength="10"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-username"
                            >رقم الحساب البنكي</label
                          >
                          <input
                            type="text"
                            id="input-username"
                            class="form-control form-control-alternative"
                            placeholder="ادخل رقم الحساب"
                            value=""
                            maxlength="10"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-username"
                            >آيبان</label
                          >
                          <input
                            type="tel"
                            id="input-tel"
                            class="form-control form-control-alternative"
                            placeholder="SA123456789123456789"
                            value=""
                            maxlength="10"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group focused">
                          <label class="form-control-label" for="input-username"
                            >ضريبة القيمة المضافة</label
                          >
                          <select id="vat" name="vat" class="form-control">
                            <option value="0" selected="">0</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="custom-toggle mb-0">
                            <input type="checkbox" />
                            <span
                              class="custom-toggle-slider rounded-circle"
                            ></span>
                          </label>
                          <label class="form-control-label mb-0 mr-2"
                            >عرض هذا الحساب في الفاتورة</label
                          >
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group text-center mt-4 mb-0">
                          <button type="submit" class="btn btn-success">
                            حفظ
                          </button>
                        </div>
                      </div>
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

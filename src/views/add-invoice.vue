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

      <!-- Page content -->
      <div class="container-fluid mt--7">
        <div class="row">
          <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div class="card card-profile shadow">
              <div class="card-body pt-0 pt-md-4">
                <div class="row"></div>
                <div class="text-center">
                  <h3>بيانات العميل<span class="font-weight-light"></span></h3>
                  <div class="h5 font-weight-300">
                    <i class="ni location_pin mr-2"></i>#0000942
                  </div>
                  <div class="h5 mt-2">
                    <i class="ni business_briefcase-24 mr-2"></i>شركة الإتصالات
                  </div>
                  <div><i class="ni education_hat mr-2"></i>info@gmail.com</div>
                  <hr class="my-4" />
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى،
                  </p>
                  <a href="#">Show more</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-8 order-xl-1">
            <div class="card bg-secondary shadow">
              <div class="card-header bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-12">
                    <h3 class="mb-0 text-right">اضافة فاتورة جديدة</h3>
                  </div>
                </div>
              </div>
              <div class="card-body text-right">
                <form>
                  <h6 class="heading-small text-center mb-4">
                    تفاصيل الفاتورة
                  </h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-username"
                            >اسم الشركة</label
                          >
                          <input
                            type="text"
                            id="input-username"
                            class="form-control form-control-alternative"
                            placeholder="ادخل اسم الشركة"
                            value=""
                            maxlength="10"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-email"
                            >الإيميل</label
                          >
                          <input
                            type="tel"
                            id="input-email"
                            class="form-control form-control-alternative"
                            placeholder="example@example.com"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-username"
                            >التاريخ</label
                          >
                          <div class="input-group input-group-alternative">
                            <div class="input-group-prepend">
                              <span class="input-group-text"
                                ><i class="ni ni-calendar-grid-58"></i
                              ></span>
                            </div>
                            <input
                              class="form-control datepicker text-center"
                              placeholder="Select date"
                              type="text"
                              value="06/20/2018"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="service col-12">
                        <div
                          class="row"
                          v-for="service in services"
                          :key="service.details"
                        >
                          <div class="col-lg-6">
                            <div class="form-group">
                              <label
                                class="form-control-label"
                                for="input-username"
                                >ادخل تفاصيل الخدمة</label
                              >
                              <input
                                type="text"
                                id="input-username"
                                class="form-control form-control-alternative"
                                :placeholder="service.details"
                                value=""
                                maxlength="10"
                              />
                            </div>
                          </div>
                          <div class="col-lg-2">
                            <div class="form-group">
                              <label
                                class="form-control-label"
                                for="input-username"
                                >الكمية</label
                              >
                              <input
                                type="tel"
                                id="input-tel"
                                class="form-control form-control-alternative"
                                :placeholder="service.quantity"
                                value=""
                                maxlength="10"
                              />
                            </div>
                          </div>
                          <div class="col-lg-2">
                            <div class="form-group">
                              <label
                                class="form-control-label"
                                for="input-username"
                                >السعر</label
                              >
                              <input
                                type="tel"
                                id="input-tel"
                                class="form-control form-control-alternative"
                                :placeholder="service.price"
                                value=""
                                maxlength="10"
                              />
                            </div>
                          </div>
                          <div class="col-2">
                            <div class="form-group">
                              <label
                                class="form-control-label pb-5"
                                for="input-username"
                              ></label>
                              <a
                                href="#!"
                                class="btn btn-sm btn-primary"
                                @click.prevent="removeService(service)"
                              >
                                حذف <i class="fas fa-times"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group">
                            <a href="#" @click.prevent="addService()"
                              >اضافة خدمة جديدة</a
                            >
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group text-center mt-4 mb-0">
                            <button type="submit" class="btn btn-success">
                              اضافة
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
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
  },

  data() {
    return {
      services: [
        {
          details: "أدخل تفاصيل الخدمة",
          quantity: "XX",
          price: "000SAR"
        }
      ]
    };
  },

  methods: {
    addService() {
      this.services.push({
        details: "أدخل تفاصيل الخدمة",
        quantity: "XX",
        price: "000SAR"
      });
    },
    removeService(service) {
      this.services.splice(this.services.indexOf(service), 1);
    }
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

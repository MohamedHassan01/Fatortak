<template>
  <div class="price main-content" dir="rlt">
    <SignNavbar />

    <!-- Header -->
    <div class="header bg-gradient-primary py-7 py-lg-8" dir="rtl">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-6">
              <h1 class="text-white">مرحبا!</h1>
              <p class="text-lead text-light">
                إنشاء فواتيرك في ومضه ومتابعة فواتيرك بشكل مباشر، ابدأ الان في
                الخدمة
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--8 pb-5" dir="rtl">
      <!-- Table -->
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-12">
          <div class="card bg-secondary shadow border-0">
            <div class="card-header bg-transparent pb-2">
              <div class="text-muted text-center mt-2 mb-4 text-lg">
                <h1>Pro</h1>
              </div>
              <div class="text-center">
                <p class="m-auto w-50">الباقة المدفوعة للمشاريع المتقدمة</p>
                <ul class="list-unstyled p-0 mt-4">
                  <li class="price-gray">
                    <span
                      ><i class="fas fa-check text-success text-sm ml-2 "></i
                    ></span>
                    <span>إنشاء فواتير لا محدود</span>
                  </li>
                  <li>
                    <span
                      ><i class="fas fa-check text-success text-sm  ml-2"></i
                    ></span>
                    <span>تصدير الفواتير على شكل PDF</span>
                  </li>
                  <li>
                    <span
                      ><i class="fas fa-check text-success text-sm  ml-2"></i
                    ></span>
                    <span>نسخة إحتياطية من البيانات</span>
                  </li>
                  <li>
                    <span
                      ><i class="fas fa-check text-success text-sm ml-2"></i
                    ></span>
                    <span>اضافة العملاء</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-muted bg-transparent">
              <div class="text-muted text-center mt-4" dir="ltr">
                <h1>$4.99 /month</h1>
              </div>
            </div>
            <div class="card-body text-center px-lg-2 py-lg-4">
              <button
                type="button"
                class="btn btn-primary m-auto"
                data-toggle="modal"
                data-target="#modal-form"
              >
                اشتراك
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="card bg-secondary shadow border-0">
            <div class="card-header bg-transparent pb-2">
              <div class="text-muted text-center mt-2 mb-4 text-lg">
                <h1>Free</h1>
              </div>
              <div class="text-center">
                <p class="m-auto w-50">الباقة الأساسية للمشاريع الصغيرة</p>
                <ul class="list-unstyled p-0 mt-4">
                  <s>
                    <li class="price-gray">
                      <span
                        ><i class="fas fa-check text-success text-sm ml-2 "></i
                      ></span>
                      <span>نسخة إحتياطية من البيانات</span>
                    </li>
                  </s>
                  <li>
                    <span
                      ><i class="fas fa-check text-success text-sm  ml-2"></i
                    ></span>
                    <span>إنشاء 50 فاتورة</span>
                  </li>
                  <li>
                    <span
                      ><i class="fas fa-check text-success text-sm  ml-2"></i
                    ></span>
                    <span>مشاركة الفاتورة على شكل رابط</span>
                  </li>
                  <li>
                    <span
                      ><i class="fas fa-check text-success text-sm ml-2"></i
                    ></span>
                    <span>دعم فني 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-muted bg-transparent">
              <div class="text-muted text-center mt-4" dir="ltr">
                <h1>$0 /month</h1>
              </div>
            </div>
            <div class="card-body text-center px-lg-2 py-lg-4">
              <button
                type="button"
                class="btn btn-primary m-auto"
                data-toggle="modal"
                data-target="#modal-form"
              >
                اشتراك
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <!-- model -->

    <div class="col-md-4" dir="rtl">
      <!-- <button type="button" class="btn btn-block btn-default" >Form</button> -->
      <div
        class="modal fade"
        id="modal-form"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modal-form"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-sm"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-body p-0">
              <div class="card bg-secondary shadow border-0">
                <div class="card-header bg-transparent pb-5">
                  <div class="text-muted text-center mt-2 mb-3">
                    <small>Sign in with</small>
                  </div>
                  <div class="btn-wrapper text-center">
                    <a href="#" class="btn btn-neutral btn-icon">
                      <span class="btn-inner--icon"
                        ><img src="@/assets/img/icons/common/github.svg"
                      /></span>
                      <span class="btn-inner--text">Github</span>
                    </a>
                    <a href="#" class="btn btn-neutral btn-icon">
                      <span class="btn-inner--icon"
                        ><img src="@/assets/img/icons/common/google.svg"
                      /></span>
                      <span class="btn-inner--text">Google</span>
                    </a>
                  </div>
                </div>
                <div class="card-body px-lg-5 py-lg-5">
                  <div class="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form role="form">
                    <div class="form-group mb-3">
                      <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="ni ni-email-83"></i
                          ></span>
                        </div>
                        <input
                          class="form-control"
                          placeholder="Email"
                          type="email"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="ni ni-lock-circle-open"></i
                          ></span>
                        </div>
                        <input
                          class="form-control"
                          placeholder="Password"
                          type="password"
                        />
                      </div>
                    </div>
                    <div
                      class="custom-control custom-control-alternative custom-checkbox"
                    >
                      <input
                        class="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        class="custom-control-label"
                        for=" customCheckLogin"
                      >
                        <span class="text-muted">Remember me</span>
                      </label>
                    </div>
                    <div class="text-center">
                      <button type="button" class="btn btn-primary my-4">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignNavbar from "@/components/sign/SignNavbar";
import Footer from "@/components/Footer.vue";

export default {
  name: "price",
  components: {
    SignNavbar,
    Footer
  }
};
</script>

<style scoped>
.price .bg-gradient-primary {
  background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
}
.price {
  background-color: #172b4d !important;
}
.footer {
  background-color: #172b4d !important;
  margin-top: 40px;
  margin-bottom: -30px;
}
</style>

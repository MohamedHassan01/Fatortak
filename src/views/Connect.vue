<template>
  <div>
    <div class="connect main-content" dir="rlt">
      <SignNavbar />

      <!-- Header -->
      <div class="header bg-gradient-primary py-7 py-lg-8" dir="rtl">
        <div class="container">
          <div class="header-body text-center mb-7">
            <div class="row justify-content-center">
              <div class="col-lg-5 col-md-6">
                <h1 class="text-white">Welcome!</h1>
                <p class="text-lead text-light">
                  Use these awesome forms to login or create new account in your
                  project for free.
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
          <div class="col-lg-8 col-md-8">
            <div class="alert alert-success" role="alert">
              <span class="alert-inner--icon"
                ><i class="ni ni-like-2"></i
              ></span>
              <span class="alert-inner--text"
                ><strong>Warning!</strong> This is a warning alert—check it out
                that has an icon too!</span
              >
            </div>
            <div class="card bg-secondary shadow border-0">
              <div class="card-body px-lg-5 py-lg-5">
                <div class="text-center text-muted mb-4">
                  <small>اتصل بنا</small>
                </div>
                <form role="form">
                  <div class="form-group">
                    <div class="input-group input-group-alternative mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="ni ni-hat-3"></i
                        ></span>
                      </div>
                      <input
                        class="form-control"
                        placeholder="الاسم"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group input-group-alternative mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="ni ni-email-83"></i
                        ></span>
                      </div>
                      <input
                        class="form-control"
                        placeholder="البريد الالكتروني"
                        type="email"
                      />
                    </div>
                  </div>
                  <form>
                    <textarea
                      class="form-control form-control-alternative px-2 py-lg-2"
                      rows="5"
                      placeholder="اكتب رسالتك ..."
                    ></textarea>
                  </form>
                  <div class="text-center">
                    <button type="button" class="btn btn-success mt-4">
                      ارسال
                    </button>
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
import SignNavbar from "@/components/sign/SignNavbar";
import Footer from "@/components/Footer.vue";

export default {
  name: "Connect",
  components: {
    SignNavbar,
    Footer
  }
};
</script>

<style lang="css" scoped>
.connect .bg-gradient-primary {
  background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
}
.connect {
  background-color: #172b4d !important;
}
.footer {
  background-color: #172b4d !important;
  padding-top: 85px !important;
  margin-bottom: -30px;
}
</style>

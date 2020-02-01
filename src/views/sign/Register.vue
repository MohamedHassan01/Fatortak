<template>
  <div class="login main-content" dir="rtl">
    <SignNavbar />

    <!-- Header -->
    <div class="header bg-gradient-primary py-7 py-lg-8">
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

    <div class="container mt--8 pb-5">
      <!-- Table -->
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div class="card bg-secondary shadow border-0">
            <div class="card-header bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-4">
                <small>تسجل الحساب بواسطة</small>
              </div>
              <div class="text-center">
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
                <small>تسجيل البيانات</small>
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
                <div class="form-group">
                  <vue-tel-input
                    v-model="phone"
                    id="phone"
                    class="form-control tel-control"
                    placeholder="4567 123 0100"
                  ></vue-tel-input>
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
                      placeholder="كلمة السر"
                      type="password"
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
                      placeholder="تأكيد كلمة السر"
                      type="password"
                    />
                  </div>
                </div>
                <div class="text-muted font-italic">
                  <small
                    >password strength:
                    <span class="text-success font-weight-700"
                      >strong</span
                    ></small
                  >
                </div>
                <div class="row my-4">
                  <div class="col-12">
                    <div
                      class="custom-control custom-control-alternative custom-checkbox text-right"
                    >
                      <input
                        class="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        class="custom-control-label "
                        for="customCheckRegister"
                      >
                        <span class="text-muted d-inline-block mr-4"
                          >الموافقة على<a href="#!"> سياسة الخصوصية</a></span
                        >
                      </label>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <button type="button" class="btn btn-primary mt-4">
                    تسجيل الحساب
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="py-5">
      <div class="container">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <ul
              class="nav nav-footer justify-content-center justify-content-xl-start"
            >
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com"
                  class="nav-link"
                  target="_blank"
                  >API</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/presentation"
                  class="nav-link"
                  target="_blank"
                  >About Us</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="http://blog.creative-tim.com"
                  class="nav-link"
                  target="_blank"
                  >Privacy policy</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md"
                  class="nav-link"
                  target="_blank"
                  >Terms</a
                >
              </li>
            </ul>
          </div>
          <div class="col-xl-6">
            <div class="copyright text-center text-xl-left text-muted">
              &copy; 2018
              <a
                href="https://www.arttime.sa"
                class="font-weight-bold ml-1"
                target="_blank"
                >arttime.sa</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import SignNavbar from "@/components/sign/SignNavbar";
export default {
  name: "Register",
  components: {
    SignNavbar
  }
};
</script>

<style lang="scss" scoped>
.login .bg-gradient-primary {
  background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
}
.login {
  background-color: #172b4d !important;
}
.vue-tel-input {
  border: none !important;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02) !important;
}
</style>

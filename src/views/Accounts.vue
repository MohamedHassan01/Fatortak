<template>
  <div>
    <Sidebar />
    <div class="accounts main-content" dir="rtl">
      <Header />

      <div class="header pb-6 pt-5 pt-md-8">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12 mb-5 mb-xl-0">
              <div class="card shadow">
                <div class="card-header border-0">
                  <div class="row align-items-center">
                    <div class="col-8 pd-3 text-right">
                      <h3 class="mb-0">العملاء</h3>
                    </div>
                    <div class="col text-left">
                      <router-link
                        to="add-account"
                        class="btn btn-sm btn-primary"
                        >اضافة حساب جديد</router-link
                      >
                    </div>
                  </div>
                </div>

                <div class="col-12"></div>

                <div class="table-responsive text-right">
                  <table class="table align-items-center table-flush">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">رقم الحساب البنكي</th>
                        <th scope="col">IBAN</th>
                        <th scope="col">البنك</th>
                        <th scope="col">ضريبة القيمة المضافة</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <!--Table  item -->
                      <tr>
                        <td>123456789012345</td>
                        <td>SA12345678901234567890123</td>
                        <td>الراجحي</td>
                        <td>5%</td>
                        <td class="text-right">
                          <div class="dropdown">
                            <a
                              class="btn btn-sm btn-icon-only text-light"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="fas fa-ellipsis-v"></i>
                            </a>
                            <div
                              class="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
                            >
                              <form action="#" method="post">
                                <input
                                  type="hidden"
                                  name="_token"
                                  value="xigoqv0GqvPIKIItBPy531i9Ujq8YWLYX7aj1YoL"
                                />
                                <input
                                  type="hidden"
                                  name="_method"
                                  value="delete"
                                />
                                <a class="dropdown-item" href="#">Edit</a>
                                <button
                                  type="button"
                                  class="dropdown-item"
                                  onclick="confirm('Are you sure you want to delete this user?') ? this.parentElement.submit() : ''"
                                >
                                  Delete
                                </button>
                              </form>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <!--Table  item -->
                    </tbody>
                  </table>
                </div>
                <!--start Pages Numbers -->
                <div class="card-footer py-4">
                  <nav
                    class="d-flex justify-content-end"
                    aria-label="..."
                    dir="ltr"
                  >
                    <ul class="pagination" role="navigation">
                      <li
                        class="page-item disabled"
                        aria-disabled="true"
                        aria-label="« Previous"
                      >
                        <span class="page-link" aria-hidden="true">‹</span>
                      </li>
                      <li class="page-item active" aria-current="page">
                        <span class="page-link">1</span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">4</a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          rel="next"
                          aria-label="Next"
                          >›</a
                        >
                      </li>
                    </ul>
                  </nav>
                </div>
                <!--End Pages Numbers -->
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Accounts",
  components: {
    Sidebar,
    Header,
    Footer
  }
};
</script>

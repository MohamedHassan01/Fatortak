<template>
  <div>
    <Sidebar />
    <div class="invoice-list main-content" dir="rtl">
      <Header />

      <div class="header pb-7 pt-5 pt-md-8">
        <div class="container-fluid">
          <div class="header-body text-right"></div>
        </div>
      </div>
      <div class="container-fluid mt--7">
        <div class="row">
          <div class="col-xl-12 mb-5 mb-xl-0">
            <div class="card shadow">
              <div class="card-header border-0">
                <div class="row align-items-center">
                  <div class="col-8 pd-3 text-right">
                    <h3 class="mb-0">قائمة الفواتير</h3>
                  </div>
                  <div class="col text-left">
                    <router-link to="add-invoice" class="btn btn-sm btn-primary"
                      >اضافة فاتورة</router-link
                    >
                  </div>
                </div>
              </div>

              <div class="table-responsive">
                <table class="table align-items-center table-flush text-right">
                  <thead class="thead-light">
                    <tr>
                      <th class="col">أسم الشركة</th>
                      <th class="col">القيمة</th>
                      <th class="col">الحالة</th>
                      <th class="col"></th>
                      <th class="col">التاريخ</th>
                      <th class="col">#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div class="media align-items-center">
                          <div class="media-body">
                            <a href="bill.html" class="">
                              <span class="mb-0 text-sm">
                                <bdi>#INV0005</bdi></span
                              >
                            </a>
                          </div>
                        </div>
                      </th>
                      <td dir="ltr"><span>1800</span> <span>SAR</span></td>
                      <td dir="ltr">
                        <span class="badge badge-dot ml-4">
                          <span>pending </span> <i class="bg-warning ml-2"></i>
                        </span>
                      </td>
                      <td>
                        <div class="avatar-group"></div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <span class="mr-2">01-11-2020</span>
                        </div>
                      </td>
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
                            <a class="dropdown-item" href="#">تعديل</a>
                            <a class="dropdown-item" href="#">حذف</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div class="media align-items-center">
                          <div class="media-body">
                            <a href="bill.html" class="">
                              <span class="mb-0 text-sm">
                                <bdi>#INV0005</bdi></span
                              >
                            </a>
                          </div>
                        </div>
                      </th>
                      <td dir="ltr"><span>18,200</span> <span>SAR</span></td>
                      <td dir="ltr">
                        <span class="badge badge-dot">
                          completed <i class="bg-success ml-2"></i>
                        </span>
                      </td>
                      <td>
                        <div class="avatar-group"></div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <span class="mr-2">01-11-2020</span>
                        </div>
                      </td>
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
                            <a class="dropdown-item" href="#">تعديل</a>
                            <a class="dropdown-item" href="#">حذف</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div class="media-body">
                          <a href="bill.html" class="">
                            <span class="mb-0 text-sm">
                              <bdi>#INV0005</bdi></span
                            >
                          </a>
                        </div>
                      </th>
                      <td dir="ltr"><span>3,940</span> <span>SAR</span></td>
                      <td dir="ltr">
                        <span class="badge badge-dot ml-4">
                          <span>delayed </span> <i class="bg-danger ml-2"></i>
                        </span>
                      </td>
                      <td>
                        <div class="avatar-group"></div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <span class="mr-2">01-11-2020</span>
                        </div>
                      </td>
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
                            <a class="dropdown-item" href="#">تعديل</a>
                            <a class="dropdown-item" href="#">حذف</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div class="media-body">
                          <a href="bill.html" class="">
                            <span class="mb-0 text-sm">
                              <bdi>#INV0005</bdi></span
                            >
                          </a>
                        </div>
                      </th>
                      <td dir="ltr"><span>4,592</span> <span>SAR</span></td>
                      <td dir="ltr">
                        <span class="badge badge-dot">
                          <span>on schedule</span> <i class="bg-info ml-2"></i>
                        </span>
                      </td>
                      <td>
                        <div class="avatar-group"></div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <span class="mr-2">01-11-2020</span>
                        </div>
                      </td>
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
                            <a class="dropdown-item" href="#">تعديل</a>
                            <a class="dropdown-item" href="#">حذف</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div class="media-body">
                          <a href="bill.html" class="">
                            <span class="mb-0 text-sm">
                              <bdi>#INV0005</bdi></span
                            >
                          </a>
                        </div>
                      </th>
                      <td dir="ltr"><span>20,800</span> <span>SAR</span></td>
                      <td dir="ltr">
                        <span class="badge badge-dot ml-4">
                          <span>completed</span> <i class="bg-success ml-2"></i>
                        </span>
                      </td>
                      <td>
                        <div class="avatar-group"></div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <span class="mr-2">01-11-2020</span>
                        </div>
                      </td>
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
                            <a class="dropdown-item" href="#">تعديل</a>
                            <a class="dropdown-item" href="#">حذف</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer py-4">
                <nav aria-label="..." dir="ltr">
                  <ul class="pagination justify-content-end mb-0">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">
                        <i class="fas fa-angle-left"></i>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#"
                        >2 <span class="sr-only">(current)</span></a
                      >
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <i class="fas fa-angle-right"></i>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
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
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "invoice-list",
  components: {
    Sidebar,
    Header,
    Footer
  }
};
</script>

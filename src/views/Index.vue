<template>
  <div>
    <Sidebar />
    <div class="dashboard main-content" dir="rtl">
      <Header />

      <div class="header pb-8 pt-6 pt-md-8">
        <div class="container-fluid">
          <div class="header-body text-right">
            <!-- Card stats -->
            <div class="row">
              <div class="col-xl-3 col-lg-6 px-xl-2">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col pl-0">
                        <h5 class="card-title text-uppercase text-muted mb-0">
                          إجمالي الفواتير
                        </h5>
                        <span class="h2 font-weight-bold mb-0">3,500 SAR</span>
                      </div>
                      <div class="col-auto">
                        <div
                          class="icon icon-shape bg-danger text-white rounded-circle shadow"
                        >
                          <i class="fas fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-muted text-sm">
                      <span class="text-success"
                        ><i class="fa fa-arrow-up"></i> 3.48%</span
                      >
                      <span class="text-nowrap">منذ اخر شهر</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 px-xl-2">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col pl-0">
                        <h5 class="card-title text-uppercase text-muted mb-0">
                          الفواتير المدفوعة
                        </h5>
                        <span class="h2 font-weight-bold mb-0">2,356 SAR</span>
                      </div>
                      <div class="col-auto">
                        <div
                          class="icon icon-shape bg-warning text-white rounded-circle shadow"
                        >
                          <i class="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-muted text-sm">
                      <span class="text-danger"
                        ><i class="fas fa-arrow-down"></i> 3.48%</span
                      >
                      <span class="text-nowrap">منذ اخر أسبوع</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 px-xl-2">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col pl-0">
                        <h5 class="card-title text-uppercase text-muted mb-0">
                          الفواتير بإنتظار الدفع
                        </h5>
                        <span class="h2 font-weight-bold mb-0">924 SAR</span>
                      </div>
                      <div class="col-auto">
                        <div
                          class="icon icon-shape bg-yellow text-white rounded-circle shadow"
                        >
                          <i class="fas fa-users"></i>
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-muted text-sm">
                      <span class="text-warning"
                        ><i class="fas fa-arrow-down"></i> 1.10%</span
                      >
                      <span class="text-nowrap">منذ الأمس</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 px-xl-2">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col pl-0">
                        <h5 class="card-title text-uppercase text-muted mb-0">
                          الفواتير الملغية
                        </h5>
                        <span class="h2 font-weight-bold mb-0">49,650 SAR</span>
                      </div>
                      <div class="col-auto">
                        <div
                          class="icon icon-shape bg-info text-white rounded-circle shadow"
                        >
                          <i class="fas fa-percent"></i>
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-muted text-sm">
                      <span class="text-success"
                        ><i class="fas fa-arrow-up"></i> 12%</span
                      >
                      <span class="text-nowrap">منذ اخر شهر</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid mt--7">
        <div class="row">
          <div class="col-xl-12 mb-5 mb-xl-0">
            <div class="card bg-gradient-default shadow">
              <div class="card-header bg-transparent">
                <div class="row align-items-center">
                  <div class="col text-right">
                    <h6 class="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 class="text-white mb-0">إحصائيات الفواتير</h2>
                  </div>
                  <div class="col">
                    <ul class="nav nav-pills justify-content-end">
                      <li>
                        <a
                          href="#"
                          class="nav-link py-2 px-3 ml-3 active"
                          @click.prevent="monthly()"
                        >
                          <span class="d-none d-md-block">شهري</span>
                          <span class="d-md-none">M</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="nav-link py-2 px-3"
                          @click.prevent="weekly()"
                        >
                          <span class="d-none d-md-block">أسبوعي</span>
                          <span class="d-md-none">W</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <!-- Chart -->
                <div>
                  <apexchart
                    height="350"
                    width="100%"
                    type="line"
                    :options="options"
                    :series="series"
                  ></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-xl-12 mb-5 mb-xl-0">
            <div class="card shadow">
              <div class="card-header border-0">
                <div class="row align-items-center">
                  <div class="col-8 pd-3 text-right">
                    <h3 class="mb-0">قائمة الفواتير</h3>
                  </div>
                  <div class="col text-left">
                    <router-link
                      to="add-invoice"
                      class="btn btn-sm btn-primary"
                    >
                      اضافة فاتورة
                    </router-link>
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
                            <a href="invoice.html" class="">
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
                            <a href="invoice.html" class="">
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
                        <div class="media align-items-center">
                          <div class="media-body">
                            <a href="invoice.html" class="">
                              <span class="mb-0 text-sm">
                                <bdi>#INV0005</bdi></span
                              >
                            </a>
                          </div>
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
                        <div class="media align-items-center">
                          <div class="media-body">
                            <a href="invoice.html" class="">
                              <span class="mb-0 text-sm">
                                <bdi>#INV0005</bdi></span
                              >
                            </a>
                          </div>
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
                        <div class="media align-items-center">
                          <div class="media-body">
                            <a href="invoice.html" class="">
                              <span class="mb-0 text-sm">
                                <bdi>#INV0005</bdi></span
                              >
                            </a>
                          </div>
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
  name: "index",
  components: {
    Sidebar,
    Header,
    Footer
  },

  data: function() {
    return {
      // Chart options and series
      options: {
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false
          },
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 1000,
            animateGradually: {
              enabled: true,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          }
        },
        stroke: {
          curve: "smooth"
        },
        colors: ["#5E72E4"],
        yaxis: {
          labels: {
            formatter: function(value) {
              return "$" + value + "K";
            },
            show: true,
            align: "right",
            minWidth: 0,
            maxWidth: 160,
            style: {
              color: "#b0bec5",
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              cssClass: "apexcharts-yaxis-label"
            },
            offsetX: -30,
            offsetY: 0,
            rotate: 0
          }
        },
        xaxis: {
          type: "category",
          categories: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          labels: {
            show: true,
            style: {
              colors: "#b0bec5",
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              cssClass: "apexcharts-yaxis-label"
            },
            offsetY: 3
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            show: false
          }
        },
        grid: {
          borderColor: "#222",
          strokeDashArray: 2
        }
      },
      series: [
        {
          name: "monthly",
          data: [0, 20, 10, 30, 15, 40, 20, 60]
        }
      ]
    };
  },

  methods: {
    // Chart methods
    weekly() {
      this.series = [
        {
          name: "weekly",
          data: [0, 20, 5, 25, 10, 30, 15, 40]
        }
      ];
    },
    monthly() {
      this.series = [
        {
          name: "monthly",
          data: [0, 20, 10, 30, 15, 40, 20, 60]
        }
      ];
    }
  }
};
</script>

<style lang="css" scoped>
line {
  opacity: 0.6;
}
</style>

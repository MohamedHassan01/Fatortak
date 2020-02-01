<template>
  <div>
    <SidebarEn />
    <div class="dashboard main-content">
      <Header />

      <!-- Navbar -->
      <nav
        class="navbar navbar-top bg-primary navbar-expand-md navbar-dark"
        id="navbar-main"
      >
        <div class="container-fluid">
          <!-- Brand -->
          <a
            class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            href="./index.html"
            >Dashboard</a
          >
          <!-- Form -->
          <form
            class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
          >
            <div class="form-group mb-0">
              <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i class="fas fa-search"></i
                  ></span>
                </div>
                <input class="form-control" placeholder="Search" type="text" />
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
                  <div class="media-body ml-2 d-none d-lg-block">
                    <span class="mb-0 text-sm  font-weight-bold"
                      >Jessica Jones</span
                    >
                  </div>
                </div>
              </a>
              <div
                class="dropdown-menu dropdown-menu-arrow dropdown-menu-right"
              >
                <div class=" dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="./examples/profile.html" class="dropdown-item">
                  <i class="ni ni-single-02"></i>
                  <span>My profile</span>
                </a>
                <a href="./examples/profile.html" class="dropdown-item">
                  <i class="ni ni-settings-gear-65"></i>
                  <span>Settings</span>
                </a>
                <a href="./examples/profile.html" class="dropdown-item">
                  <i class="ni ni-calendar-grid-58"></i>
                  <span>Activity</span>
                </a>
                <a href="./examples/profile.html" class="dropdown-item">
                  <i class="ni ni-support-16"></i>
                  <span>Support</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-user-run"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Header -->
      <div class="header pb-8 pt-5 pt-md-8">
        <div class="container-fluid">
          <div class="header-body">
            <!-- Card stats -->
            <div class="row">
              <div class="col-xl-3 col-lg-6">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h5 class="card-title text-uppercase text-muted mb-0">
                          Total Invoices
                        </h5>
                        <span class="h2 font-weight-bold mb-0"
                          >350,897 SAR</span
                        >
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
                      <span class="text-success mr-2"
                        ><i class="fa fa-arrow-up"></i> 3.48%</span
                      >
                      <span class="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h5 class="card-title text-uppercase text-muted mb-0">
                          Paid Invoices
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
                      <span class="text-danger mr-2"
                        ><i class="fas fa-arrow-down"></i> 3.48%</span
                      >
                      <span class="text-nowrap">Since last week</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h5 class="card-title text-uppercase text-muted mb-0">
                          Pending Invoices
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
                      <span class="text-warning mr-2"
                        ><i class="fas fa-arrow-down"></i> 1.10%</span
                      >
                      <span class="text-nowrap">Since yesterday</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h5 class="card-title text-uppercase text-muted mb-0">
                          Canceled Invoices
                        </h5>
                        <span class="h2 font-weight-bold mb-0">49,65 SAR</span>
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
                      <span class="text-success mr-2"
                        ><i class="fas fa-arrow-up"></i> 12%</span
                      >
                      <span class="text-nowrap">Since last month</span>
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
                  <div class="col">
                    <h6 class="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 class="text-white mb-0">Billing Statistics</h2>
                  </div>
                  <div class="col">
                    <ul class="nav nav-pills justify-content-end">
                      <li class="nav-item mr-2 mr-md-0">
                        <a
                          href="#"
                          class="nav-link py-2 px-3 active"
                          @click="monthly()"
                        >
                          <span class="d-none d-md-block">Month</span>
                          <span class="d-md-none">M</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="#"
                          class="nav-link py-2 px-3"
                          @click="weekly()"
                        >
                          <span class="d-none d-md-block">Week</span>
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
                <h3 class="mb-0">Card tables</h3>
              </div>
              <div class="table-responsive">
                <table class="table align-items-center table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">COMPANY NAME</th>
                      <th scope="col">Budget</th>
                      <th scope="col">Status</th>
                      <th scope="col"></th>
                      <th scope="col">INVOICING DATE</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div class="media align-items-center">
                          <div class="media-body">
                            <span class="mb-0 text-sm">#INV0001</span>
                          </div>
                        </div>
                      </th>
                      <td>
                        $2,500 SAR
                      </td>
                      <td>
                        <span class="badge badge-dot mr-4">
                          <i class="bg-warning"></i> pending
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
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#"
                              >Something else here</a
                            >
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div class="media align-items-center">
                          <div class="media-body">
                            <span class="mb-0 text-sm">#INV0002</span>
                          </div>
                        </div>
                      </th>
                      <td>
                        $1,800 SAR
                      </td>
                      <td>
                        <span class="badge badge-dot">
                          <i class="bg-success"></i> completed
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
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#"
                              >Something else here</a
                            >
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div class="media-body">
                          <span class="mb-0 text-sm">#INV0003</span>
                        </div>
                      </th>
                      <td>
                        $3,150 SAR
                      </td>
                      <td>
                        <span class="badge badge-dot mr-4">
                          <i class="bg-danger"></i> delayed
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
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#"
                              >Something else here</a
                            >
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div class="media-body">
                          <span class="mb-0 text-sm">#INV0004</span>
                        </div>
                      </th>
                      <td>
                        $4,400 SAR
                      </td>
                      <td>
                        <span class="badge badge-dot">
                          <i class="bg-info"></i> on schedule
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
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#"
                              >Something else here</a
                            >
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div class="media-body">
                          <span class="mb-0 text-sm">#INV0005</span>
                        </div>
                      </th>
                      <td>
                        $2,200 SAR
                      </td>
                      <td>
                        <span class="badge badge-dot mr-4">
                          <i class="bg-success"></i> completed
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
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#"
                              >Something else here</a
                            >
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer py-4">
                <nav aria-label="...">
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
        <FooterEN />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarEn from "@/components/SidebarEn.vue";
import Header from "@/components/Header.vue";
import FooterEN from "@/components/FooterEN.vue";

// import "@/assets/css/argon-dashboard.css?v=1.1.1";

export default {
  name: "index",
  components: {
    SidebarEn,
    Header,
    FooterEN
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

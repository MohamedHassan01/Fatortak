<template>
  <div>
    <Sidebar />
    <div class="invoice main-content" dir="rtl">
      <Header />

      <!-- Header -->
      <div class="header pb-6 pt-5 pt-md-8">
        <div class="container-fluid">
          <a href="#!" class="btn btn-info mb-2"
            >مشاركة الفاتورة <i class="fas fa-share-alt mr-2"></i
          ></a>
          <a href="#!" class="btn btn-info mb-2"
            >تصدير الفاتورة <i class="fas fa-download mr-2"></i
          ></a>
          <a href="#!" class="btn btn-info mb-2"
            >تعديل الفاتورة <i class="fas fa-pencil-alt mr-2"></i
          ></a>

          <main
            class="text-right chapter bg-white position-relative shadow rounded"
          >
            <header class="text-left" dir="ltr">
              <img src="@/assets/img/bill-logo.svg" class="d-block logo" />
            </header>
            <!--Start Bill Details  -->
            <ul class="list-unstyled p-0 bill-det" dir="ltr">
              <li>
                <span> <bdi>#000924</bdi></span>
                <span class="outline">: رقم الفاتورة </span>
              </li>
              <li>
                <span> <bdi>تصميم وبرمجة متجر الكتروني</bdi></span>
                <span class="outline">: فاتورة </span>
              </li>
              <li>
                <span> <bdi>شركة الاتصالات</bdi></span>
                <span class="outline">: إسم الفاتورة </span>
              </li>
            </ul>
            <!--End Bill details -->

            <!--Start Bill data -->
            <section class="bill-data">
              <table class="table" dir="rtl">
                <thead>
                  <tr>
                    <th scope="col" class="border-0 description py-2">الوصف</th>
                    <th scope="col" class="text-left border-0 price py-2">
                      التكلفة
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="d-block"
                        >تصميم الواجهات الأمامية للمتجر</span
                      >
                      <span class="service-info"
                        >• تصميم 3 صفحات للمتجر الإلكتروني</span
                      >
                    </td>
                    <td class="text-left total-cost pt-4">
                      <bdi>900 SAR</bdi>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="d-block"
                        >تصميم الواجهات الأمامية للمتجر</span
                      >
                      <span class="service-info"
                        >• تصميم 3 صفحات للمتجر الإلكتروني</span
                      >
                    </td>
                    <td class="text-left total-cost pt-4">
                      <bdi>900 SAR</bdi>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="d-block"
                        >تصميم الواجهات الأمامية للمتجر</span
                      >
                      <span class="service-info"
                        >• تصميم 3 صفحات للمتجر الإلكتروني</span
                      >
                    </td>
                    <td class="text-left total-cost pt-4">
                      <bdi>900 SAR</bdi>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="d-block"
                        >تصميم الواجهات الأمامية للمتجر</span
                      >
                      <span class="service-info"
                        >• تصميم 3 صفحات للمتجر الإلكتروني</span
                      >
                    </td>
                    <td class="text-left total-cost pt-4">
                      <bdi>900 SAR</bdi>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="font-weight-bold d-block total"
                        >الاجمالي</span
                      >
                    </td>
                    <td class="text-left total-price"><bdi>26,500 SAR</bdi></td>
                  </tr>
                </tbody>
              </table>

              <!--Start Payment details-->
              <table class="table pay-det" dir="rtl">
                <thead>
                  <tr>
                    <th scope="col" class="border-0 payment-info py-2">
                      <bdi>معلومات الدفع :</bdi>
                    </th>
                    <th class="border-0"></th>
                    <th scope="col" class="font-weight-normal border-0 py-2">
                      بنك الراجحي
                    </th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  <tr>
                    <td>IBAN: SA65 8000 123 6080 1111 3454</td>
                    <td>-</td>
                    <td><bdi>Account number : 123 6080 1111 3454 </bdi></td>
                  </tr>
                </tbody>
              </table>
              <!--End Payment details-->
            </section>
            <!--End Bill Data-->
          </main>
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
import "@/assets/css/bill.css";

export default {
  name: "invoice-list",
  components: {
    Sidebar,
    Header,
    Footer
  }
};
</script>

<style scoped>
.navbar-nav .nav-item:first-child {
  display: none !important;
}
main {
  width: auto !important;
}
</style>

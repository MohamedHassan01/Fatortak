<template>
  <div class="invoice-export">
    <main class="text-right chapter bg-white position-relative">
      <header class="text-left">
        <img src="@/assets/img/bill-logo.svg" class="d-block logo" />
      </header>
      <!--Start Bill Details  -->
      <ul class="list-unstyled p-0 bill-det">
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
              <th scope="col" class="border-0 description">الوصف</th>
              <th scope="col" class="text-left border-0 price">التكلفة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span class="d-block">تصميم الواجهات الأمامية للمتجر</span>
                <span class="service-info"
                  >• تصميم 3 صفحات للمتجر الإلكتروني</span
                >
              </td>
              <td class="text-left total-cost pt-4"><bdi>900 SAR</bdi></td>
            </tr>
            <tr>
              <td>
                <span class="d-block">تصميم الواجهات الأمامية للمتجر</span>
                <span class="service-info"
                  >• تصميم 3 صفحات للمتجر الإلكتروني</span
                >
              </td>
              <td class="text-left total-cost pt-4"><bdi>900 SAR</bdi></td>
            </tr>
            <tr>
              <td>
                <span class="d-block">تصميم الواجهات الأمامية للمتجر</span>
                <span class="service-info"
                  >• تصميم 3 صفحات للمتجر الإلكتروني</span
                >
              </td>
              <td class="text-left total-cost pt-4"><bdi>900 SAR</bdi></td>
            </tr>
            <tr>
              <td>
                <span class="d-block">تصميم الواجهات الأمامية للمتجر</span>
                <span class="service-info"
                  >• تصميم 3 صفحات للمتجر الإلكتروني</span
                >
              </td>
              <td class="text-left total-cost pt-4"><bdi>900 SAR</bdi></td>
            </tr>
            <tr>
              <td>
                <span class="font-weight-bold d-block total">الاجمالي</span>
              </td>
              <td class="text-left total-price"><bdi>26,500 SAR</bdi></td>
            </tr>
          </tbody>
        </table>

        <!--Start Payment details-->
        <table class="table pay-det" dir="rtl">
          <thead>
            <tr>
              <th scope="col" class="border-0 payment-info">
                <bdi>معلومات الدفع :</bdi>
              </th>
              <th class="border-0"></th>
              <th scope="col" class="font-weight-normal border-0">
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
  </div>
</template>

<script>
export default {
  name: "Invoicexport"
};
</script>

<style>
.invoice-export {
  background-color: #333 !important;
  font-family: gr-reg !important;
  padding: 50px 0;
}

header .logo {
  width: 200px;
}

.bill-det .outline {
  font-family: gr-smBold;
}

.bill-data table .total,
.bill-data table .description,
.bill-data table .price {
  font-family: gr-med;
}

.bill-data table .total-price {
  font-family: gr-bold;
}

.bill-data table .total-cost {
  font-family: gr-smBold;
}

.bill-data table .service-info {
  font-family: gr-light;
}

.bill-data table .cost-info {
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
}

h1 span {
  font-size: 14px;
  top: 10px;
  right: -10px;
}
main {
  width: 794px;
  height: 1122px;
  margin: 0 auto;
  padding: 50px;
}

.bill-det {
  margin: 80px 0;
  font-size: 14px;
}

.bill-det li {
  margin-bottom: 5px;
}

.pay-det {
  margin-top: 50px;
}
.pay-det .payment-info {
  font-family: gr-med;
}

@font-face {
  font-family: gr-reg;
  src: url("../assets/fonts/ar/GraphikArabic.otf");
}
@font-face {
  font-family: gr-black;
  src: url("../assets/fonts/ar/GraphikArabicBlack.otf");
}
@font-face {
  font-family: gr-bold;
  src: url("../assets/fonts/ar/GraphikArabicBold.otf");
}
@font-face {
  font-family: gr-exLight;
  src: url("../assets/fonts/ar/GraphikArabicExtraLight.otf");
}
@font-face {
  font-family: gr-light;
  src: url("../assets/fonts/ar/GraphikArabicLight.otf");
}
@font-face {
  font-family: gr-med;
  src: url("../assets/fonts/ar/GraphikArabicMedium.otf");
}
@font-face {
  font-family: gr-smBold;
  src: url("../assets/fonts/ar/GraphikArabicSemiBold.otf");
}
@font-face {
  font-family: gr-supBold;
  src: url("../assets/fonts/ar/GraphikArabicSuper.otf");
}
@font-face {
  font-family: gr-thin;
  src: url("../assets/fonts/ar/GraphikArabicThin.otf");
}
</style>

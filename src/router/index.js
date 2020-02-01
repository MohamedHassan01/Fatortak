import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/Index.vue";
import Accounts from "@/views/Accounts.vue";
import Clients from "@/views/Clients.vue";
import InvoiceList from "@/views/InvoiceList.vue";
import Invoice from "@/views/Invoice.vue";
import Settings from "@/views/Settings.vue";
import AddAccount from "@/views/add-account.vue";
import AddClient from "@/views/add-client.vue";
import AddInvoice from "@/views/add-invoice.vue";
import InvoiceExport from "@/views/InvoiceExport.vue";
import Login from "@/views/sign/Login.vue";
import Register from "@/views/sign/Register.vue";
import Price from "@/views/Price.vue";
import Connect from "@/views/Connect.vue";
import en from "@/views/en.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/accounts",
    name: "accounts",
    component: Accounts
  },
  {
    path: "/clients",
    name: "clients",
    component: Clients
  },
  {
    path: "/invoice-list",
    name: "invoice-List",
    component: InvoiceList
  },
  {
    path: "/invoice",
    name: "invoice",
    component: Invoice
  },
  {
    path: "/invoice-export",
    name: "invoice-export",
    component: InvoiceExport
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings
  },
  {
    path: "/add-account",
    name: "add-account",
    component: AddAccount
  },
  {
    path: "/add-client",
    name: "add-client",
    component: AddClient
  },
  {
    path: "/add-invoice",
    name: "add-invoice",
    component: AddInvoice
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/price",
    name: "price",
    component: Price
  },
  {
    path: "/connect",
    name: "connect",
    component: Connect
  },
  {
    path: "/en",
    name: "en",
    component: en
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

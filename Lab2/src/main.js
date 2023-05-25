import { createApp } from "vue";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";

import allUser from "./components/users/allUser.vue";
import userDetails from "./components/users/userDetails.vue";
import userAdd from "./components/users/userAdd";
import userEdit from "./components/users/userEdit.vue";
import errorApp from "./components/shared/error.vue";




import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const routes = [
  {
    path: "/",
    component: allUser,
    alias: "/users",
  },
  {
    path: "/users/add",
    component: userAdd,
  },
  {
    path: "/users/edit/:id",
    component: userEdit,
  },
  {
    path: "/users/:id",
    component: userDetails,
  },
  {
      path:'/:NotFound(.*)*',component:errorApp,meta:{hideNavbar:true}
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

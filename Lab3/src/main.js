import { createApp, reactive } from "vue";
import App from "./App.vue";
import axios from "axios";

import { createWebHistory, createRouter } from "vue-router";

import allUser from "./components/users/allUser.vue";
import userDetails from "./components/users/userDetails.vue";
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
    path: "/users/:id",
    component: userDetails,
  },
  {
    path: "/:NotFound(.*)*",
    component: errorApp,
    meta: { hideNavbar: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);

app.directive("fetch", {
  mounted(el, binding) {
    const fetchData = async () => {
      try {
        const response = await axios.get(binding.value);
        const data = response.data;
        binding.instance[binding.arg] = reactive(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (binding.arg === "get") {
      fetchData();
    } else if (binding.arg === "getById") {
      const id = binding.value;
      const url = `${binding.arg}/${id}`;
      fetchData(url);
    }
  },
});

createApp(App).use(router).mount("#app");

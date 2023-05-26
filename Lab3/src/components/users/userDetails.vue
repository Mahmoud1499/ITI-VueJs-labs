<template>
  <div class="container w-50">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">ID : {{ userDetails.id }}</h2>
        <p class="card-text">First Name : {{ userDetails.first_name }}</p>
        <p class="card-text">Last Name : {{ userDetails.last_name }}</p>
        <p class="card-text">Gender : {{ userDetails.gender }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserDetails } from "./composable";
import { useRoute } from "vue-router";

export default {
  name: "UserDetails",
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const { userDetails } = useUserDetails(id);

    return {
      userDetails,
    };
  },
};
</script>









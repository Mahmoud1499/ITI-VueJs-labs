<template>
  <SideNav />
  <router-view></router-view>
</template>

<script>
import SideNav from "./components/shared/navabar.vue";

export default {
  name: "App",
  components: {
    SideNav,
  },
};
</script>

<style>
</style>

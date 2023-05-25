<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="text-center">
          <h1 class="display-4">404</h1>
          <p class="lead">The page you are looking for does not exist.</p>
          <p>
            Please check the URL or go back to the
            <router-link to="/">homepage</router-link>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "errorApp",
};
</script>

<style scoped>
</style>
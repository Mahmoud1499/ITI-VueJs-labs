<template>
  <div class="container w-50 ">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">ID : {{ id }}</h2>
        <p class="card-text">First Name : {{ first_name }}</p>
        <p class="card-text">Last Name : {{ last_name }}</p>
        <p class="card-text">Generd : {{ gender }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "userDetails",
  data() {
    return {
      id: "",
      first_name: "",
      last_name: "",
      gender: "",
    };
  },
  created() {
    this.getuserById();
  },
  methods: {
    getuserById() {
      this.id = this.$route.params.id;
      console.log(this.id);
      axios
        .get(` http://localhost:3000/users/${this.id}`)
        .then((res) => {
          console.log(res.data);
          this.id = res.data.id;
          this.first_name = res.data.first_name;
          this.last_name = res.data.last_name;
          this.gender = res.data.gender;
        })
        .catch((err) => console.log(err));
    },
    back() {
      this.$router.push("/users");
    },
  },
};
</script>


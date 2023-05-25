<template>
  <div class="container my-2 w-50">
    <div v-if="success" class="alert alert-success" role="alert">
      User Added successfully!
    </div>
    <form @submit.prevent="addUser">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-model="firstName"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-model="lastName"
        />
      </div>
      <div class="form-group">
        <label for="gender">Gender:</label>
        <select class="form-control" id="gender" v-model="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary my-2">Add User</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddUser",
  data() {
    return {
      firstName: "",
      lastName: "",
      gender: "Male",
      success: false,
    };
  },
  methods: {
    addUser() {
      const newUser = {
        first_name: this.firstName,
        last_name: this.lastName,
        gender: this.gender,
      };
      axios
        .post("http://localhost:3000/users", newUser)
        .then((response) => {
          this.$emit("add-user", response.data); // emit an event to pass the new user data to the parent component
          this.firstName = ""; // clear the form fields
          this.lastName = "";
          this.gender = "Male";
          this.success = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
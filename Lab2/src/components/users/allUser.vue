<template>
  <div class="container">
    <h1 class="my-2 text-center">List Of All Users</h1>
    <router-link class="btn btn-sm btn-info " :to="`/users/add`">
                Add New User 
              </router-link >
    <table class="table">
      <thead>
        <tr>
          <th scope="col ">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">gender</th>

          <th scope="col">Actions</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.gender }}</td>

          <td>
              <router-link :to="`/users/${user.id}`" class="btn btn-sm btn-primary "
              >Details</router-link
              >
              <router-link :to="`/users/edit/${user.id}`" class="btn btn-sm btn-success mx-4">
               Edit 
             </router-link>
              <button class="btn btn-sm btn-danger " @click="deleteUser(user.id)">
                Delete
              </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allUsers",
  created() {
    this.getallusers();
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getallusers() {
      axios
        .get("  http://localhost:3000/users")
        .then((res) => {
          console.log(res.data);
          this.users = res.data;
        })
        .catch((err) => console.log(err));
    },
    deleteUser(id) {
      axios
        .delete(`  http://localhost:3000/users/${id}`)
        .then((res) => {
          console.log(res.data);
          this.getallusers();
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>

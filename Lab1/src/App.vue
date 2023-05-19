<template>
  <MainHeader />
  <InputForm :users="users" @send="getData" />
  <h2>Admin Dashboard</h2>

  <AdminData :admins="admins" @delete="deleteAdmin" />
  <UserData :normalUsers="normalUsers" @delete="deleteAdmin" />

  
</template>

<script>
import InputForm from "./components/Form.vue";
import MainHeader from "./components/Header.vue";
import AdminData from "./components/Admin.vue";
import UserData from "./components/User.vue";

export default {
  name: "App",
  components: {
    InputForm,
    MainHeader,
    AdminData,
    UserData,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.generateDummyData();
  },
  methods: {
    generateDummyData() {
      const dummyData = [
        {
          name: "Mahmoud Mohamed",
          email: "mahmoud@example.com",
          phone: "01091619355",
          age: 23,
          isAdmin: true,
        },
        {
          name: "Omar Walid",
          email: "pmar@example.com",
          phone: "9876543210",
          age: 30,
          isAdmin: false,
        },
        {
          name: "Khaled Mohamed",
          email: "khaled@example.com",
          phone: "9876543210",
          age: 20,
          isAdmin: false,
        },
        {
          name: "bassem ahmed",
          email: "bassem@example.com",
          phone: "9876543210",
          age: 30,
          isAdmin: true,
        },
      ];

      this.users = dummyData;
    },
    getData(formData) {
      console.log(formData);
      
      // console.log(this.users);
      this.users.push(formData);

       
    },
    deleteAdmin(emailToFind) {
      const index = this.users.findIndex((user) => user.email === emailToFind);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
      console.log(this.users);
    },
  },
  computed: {
    admins() {
      // Filter the users array to get only the admins
      return this.users.filter((user) => user.isAdmin == 1);
    },
    normalUsers() {
      // Filter the users array to get only the users
      return this.users.filter((user) => user.isAdmin == 0);
    },
  },
};

// console.log(this.users);
</script>

<style>
* {
  margin: 0;
}
h2 {
  text-align: center;
  margin: 10px;
  color: rgb(63, 30, 95);
}
</style>

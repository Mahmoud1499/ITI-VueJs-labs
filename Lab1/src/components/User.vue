<template>
  <div class="user-container">
    <h3>users:</h3>
    <table class="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in normalUsers" :key="user.email">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.age }}</td>
          <td>
            <button class="delete-button" @click="deleteuser(user)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "userData",
  props: ["normalUsers"],
  emits: ["delete"],
  methods:{
    deleteuser(user){

        this.$emit('delete' , user.email);
    }
  },
  
};
</script>

<style scoped>
.user-container {
  max-width: 600px;
  margin: 0 auto;
}

.user-table,
.user-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.user-table th,
.user-table td,
.user-table th,
.user-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.user-table th {
  background-color: #f5f5f5;
}

.user-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.user-table tr:nth-child(even) {
  background-color: #ffffff;
}

h2,
h3 {
  margin-top: 30px;
  margin-bottom: 10px;
}

.delete-button {
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button {
  background-color: #bf3a3a;
  color: #ffffff;
  position: relative;
}

.delete-button:hover {
  opacity: 0.9;
}
</style>

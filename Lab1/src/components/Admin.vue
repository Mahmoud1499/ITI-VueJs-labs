<template>
  <div class="admin-container">
    <h3>Admins:</h3>
    <table class="admin-table">
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
        <tr v-for="admin in admins" :key="admin.email">
          <td>{{ admin.name }}</td>
          <td>{{ admin.email }}</td>
          <td>{{ admin.phone }}</td>
          <td>{{ admin.age }}</td>
          <td>
            <button class="delete-button" @click="deleteAdmin(admin)">
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
  name: "AdminData",
  props: ["admins", ""],
  emits: ["delete"],
  methods:{
    deleteAdmin(admin){

        this.$emit('delete' , admin.email);
    }
  }
};
</script>

<style scoped>
.admin-container {
  max-width: 600px;
  margin: 0 auto;
}

.admin-table,
.user-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.admin-table th,
.admin-table td,
.user-table th,
.user-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.admin-table th {
  background-color: #f5f5f5;
}

.admin-table tr:nth-child(even) {
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

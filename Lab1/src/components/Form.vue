<template>
  <div class="form-container">
    <h2>Personal Information</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="formData.phone" required />
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="formData.age" required />
      </div>
      <div class="form-group">
        <label for="admin">Admin:</label>
        <select id="admin" v-model.number="formData.isAdmin">
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>
      <button @click="submitForm(formData)" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "inputForm",
  props: ["users"],
  emits: ["send"],

  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        address: "",
      },
    };
  },
  methods: {
    submitForm(formData) {
      // this.users.push({ ...this.formData });
      this.$emit("send", formData);
      

      // console.log(formData);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 10px 0;
  text-align: center;
  color: rgb(49, 43, 55);
}
.form-container {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #3a0432;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #c436af;
}
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
}

option {
  background-color: #fff;
  color: #333;
}
</style>

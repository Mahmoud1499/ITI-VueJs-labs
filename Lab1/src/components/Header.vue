<template>
  <header class="header">
    <nav>
      <ul>
        <li><router-link to="/form" class="nav-link">Form</router-link></li>
        <li><router-link to="/admin" class="nav-link">Admin</router-link></li>
        <li><router-link to="/user" class="nav-link">User</router-link></li>
      </ul>
    </nav>
  </header>
</template>



<script>
export default {
  name: "MainHeader",

  props: {
    msg: String,
  },
};
</script>

<style>
.header {
  background-color: #3a0432;
  padding: 10px;
  text-align: center;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 5px;
  font-size: large ;
}

nav ul li {
  display: inline-block;
  margin-right: 10px;
}

nav ul li .nav-link {
  text-decoration: none;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

nav ul li .nav-link:hover {
  background-color: #29102b;
}
</style>








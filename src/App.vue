<template>
  <div class="nav-header">
    <ul>
      <li id="app-name">Todo App</li>
      <li><router-link class="link" to="/"> Home </router-link></li>
      <li><router-link class="link" to="/about"> About </router-link></li>
      <li><router-link class="link" to="/contact"> Contact </router-link></li>
    </ul>
  </div>
  <router-view />
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: -webkit-linear-gradient(right, white, #f8f9fa, white #f8f9fa);
  margin: 0;
}

body {
  margin: 0px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  color: #213547;
}

.aboutDiv h1 {
  color: #1c1427;
}

.contactDiv h1 {
  color: #1c1427;
}

h2 {
  color: #213547;
}

.link {
  text-decoration: none;
  color: white;
}

.nav-header {
  margin-top: 0px;
  background-color: #1c1427;
  height: 60px;
}

.nav-header li {
  padding-right: 10px;
}

#app-name {
  padding-left: 30px;
  color: white;
  font-weight: bold;
  font-size: 25px;
  margin-right: auto;
}

ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #1abc9c;
  height: 60px;
}

#todo-list {
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
}

li {
  color: white;
  font-weight: bold;
  margin-right: 30px;
}

.todo-items {
  margin: 0 auto 10px;
  padding: 0 10px;
  min-width: 200px;
  max-width: 500px;
  width: auto;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  background-color: white;
  border-radius: 5px;
  height: 50px;
  font-weight: bold;
  color: black;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.item-buttons {
  margin: 0;
}

.editbutton {
  cursor: pointer;
  color: white;
  background-color: #516beb;
  border-radius: 5px;
  border-style: none;
  margin-left: 8px;
  height: 25px;
}

.deletebutton {
  cursor: pointer;
  color: white;
  background-color: red;
  border-radius: 5px;
  border-style: none;
  margin-left: 8px;
  height: 25px;
}

input[type="text"] {
  text-align: center;
  height: 50px;
  border: none;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  background-color: white;
  font-size: 20px;
  font-weight: 200;
  max-width: 440px;
  width: 100%;
  margin-bottom: 40px;
}

input[type="text"]:focus {
  outline: none;
  box-shadow: inset 0 -2px 0 0 #ffce45;
}

::placeholder {
  color: grey;
  opacity: 1;
}

div {
  margin-top: 40px;
}

.addButton {
  cursor: pointer;
  height: 50px;
  width: 60px;
  border-radius: 5px;
  margin-left: 8px;
  border-color: #49b672;
  background-color: #49b672;
  color: #fff;
  font-size: 20px;
  border-width: 0;
}

.aboutDiv,
.contactDiv {
  padding: 15px;
  border-radius: 10px;
  margin-top: 150px;
  width: 50%;
  margin-left: 380px;
  background-color: #fff;
  padding-bottom: 50px;
}
</style>

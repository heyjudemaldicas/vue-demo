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

#listDiv {
  padding-top: 40px;
  padding-bottom: 40px;
}

li {
  color: white;
  font-weight: bold;
  margin-right: 30px;
}

.todoitems {
  text-align: left;
  margin-top: 0px;
  margin-bottom: 5px;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 10px;
  width: 500px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  background-color: white;
  border-radius: 5px;
  height: 50px;
  font-weight: bold;
  margin-left: 510px;
  color: black;
  box-sizing: border-box;
}

.editbutton {
  cursor: pointer;
  float: right;
  color: white;
  background-color: #516beb;
  border-radius: 5px;
  border-style: none;
  margin-left: 8px;
  height: 25px;
}

.deletebutton {
  cursor: pointer;
  float: right;
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
  width: 440px;
  margin-bottom: 40px;
}

input[type="text"]:focus {
  outline: none;
  box-shadow: inset 0 -3px 0 0 #ffce45;
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
  border-color: #52d681;
  background-color: #52d681;
  color: #fff;
  font-size: 20px;
  border-width: 0;
}

.addButton:hover {
  background-color: white;
  color: #52d681;
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

p {
  color: #1c1427;
  font-weight: bold;
  font-size: 22px;
}

.linkTag {
  font-size: 15px;
  padding: 5px;
  text-decoration: none;
  margin-right: 20px;
  color: white;
  background-color: #516beb;
  border-radius: 3px;
}
.contactDiv a:hover {
  background-color: #dfdfdf;
  color: #516beb;
}
</style>

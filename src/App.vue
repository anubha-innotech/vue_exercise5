<template>
<div id="nav-bar">
    <router-link to="/" class="nav-menu">Home</router-link>
    <router-link to="/about" class="nav-menu">About</router-link>
    <router-link to="/jobs" class="nav-menu">Jobs</router-link>
</div>
<router-view />
</template>

<script>
export default {
    name: 'App',
    components: {}
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
}

#app {
    text-align: center;
    color: rgb(44, 35, 102);
}

#nav-bar {
    font-size: 1.2em;
    font-weight: 700;
    text-align: center;
    padding: 10px;
    background-color: darkslateblue;
}

.nav-menu {
    padding: 10px 30px;
    color: white;
    margin: 10px 0;
    text-decoration: none;
    height: 100%;
}

.nav-menu:hover {
    background-color: rgb(96, 87, 158);
    color: white;
}

.nav-menu:active {
    background-color: tomato;
}

h1,
h2,
h3 {
    margin: 30px;
}
</style>

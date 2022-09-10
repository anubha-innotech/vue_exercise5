<template>
<div id="error">
    <p id="error404">404</p>
    <h1>Oops!! Page Not Found</h1>
    <router-link to="/">Go to Home Page</router-link>
</div>
</template>

<style>
#error {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#error404 {
    font-size: 7em;
    color: tomato;
    margin: 10px;
}
</style>

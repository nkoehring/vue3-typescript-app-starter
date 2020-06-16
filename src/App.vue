<template>
  <header>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </header>
  <img id="logo" alt="Vue Logo" src="@/assets/logo.svg" />
  <router-view />
</template>

<style src="@/assets/app.css" />
<style>
#logo {
  display: block;
  height: 200px;
  margin: auto;
}
</style>

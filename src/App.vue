<template>
  <header>
    <nav>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </nav>
  </header>
  <img id="logo" src="@/assets/logo.svg" />
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

<template>
  <h1>Hello {{ state.name }}</h1>
  <p>This is a placeholder view.</p>
  <label for="name-input">
    Pick a new name:
    <input id="name-input" v-model="state.name" />
  </label>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue"

export default defineComponent({
  setup() {
    const state = inject('state')
    return { state }
  }
})
</script>

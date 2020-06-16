<template>
  <h1>About this application</h1>
  <p>Hello {{ state.name }}.</p>
  <p>
    To learn more about this Vue3 starter example, check out
    <Anchor :new-window="true" :url="url">the github page</Anchor>.
  </p>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue"
import Anchor from '@/components/Anchor.vue'

export default defineComponent({
  components: { Anchor },
  data () {
    return {
      url: "https://github.com/nkoehring/vue3-typescript-app-starter",
      state: inject('state')
    }
  }
})
</script>

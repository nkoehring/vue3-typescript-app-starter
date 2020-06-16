<template>
  <h1>vue3-typescript-app-starter</h1>
  <p>Hello {{ state.name }}.</p>
  <p>
    To learn more about this Vue3 starter example, check out
    <Anchor :new-window="true" :url="codeUrl">the github page</Anchor>.
  </p>
  <p>
    You can also see it live on
    <Anchor :new-window="true" :url="liveUrl">vue3-app-starter.netlify.app</Anchor>
  </p>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue"
import Anchor from '@/components/Anchor.vue'

export default defineComponent({
  components: { Anchor },
  data () {
    return {
      codeUrl: "https://github.com/nkoehring/vue3-typescript-app-starter",
      liveUrl: "https://vue3-app-starter.netlify.app",
      state: inject('state')
    }
  }
})
</script>

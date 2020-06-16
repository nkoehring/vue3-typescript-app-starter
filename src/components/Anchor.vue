<template>
  <a rel="noopener noreferrer" :target="target" :href="url"><slot /></a>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    url: String,
    newWindow: Boolean
  },
  computed: {
    target ():string {
      return this.newWindow ? '_blank' : '_self'
    }
  }
})
</script>

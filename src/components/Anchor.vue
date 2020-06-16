<template>
  <a rel="noopener noreferrer" :target="target" :href="url"><slot /></a>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"

export default defineComponent({
  props: {
    url: String,
    newWindow: Boolean
  },
  setup (props) {
    return {
      target: computed(() => props.newWindow ? '_blank' : '_self')
    }
  }
})
</script>

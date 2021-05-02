<template>
  <input type='submit' :value='value' class='bg-transparent p-2 border-current border-1' />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    }
  },
  name: 'InputSubmit'
})
</script>

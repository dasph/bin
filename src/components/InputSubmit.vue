<template>
  <button type='submit' class='bg-transparent p-2 border-current border-1'>{{value}}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputSubmit',
  props: {
    value: {
      type: String,
      required: true
    }
  }
})
</script>

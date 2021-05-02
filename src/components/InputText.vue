<template>
  <input type='text' :name='name' spellcheck='false' autocorrect='off' class='bg-transparent p-2 border-current border-1' />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  name: 'InputText'
})
</script>

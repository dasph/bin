<template>
  <textarea :name='name' autocapitalize='none' autocomplete='off' autocorrect='off' spellcheck='false' class='bg-transparent text-white p-1 resize-none overflow-hidden' />
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
  name: 'Textarea'
})
</script>

<template>
  <textarea :value='value' autocapitalize='none' autocomplete='off' autocorrect='off' spellcheck='false' class='bg-transparent p-1 resize-none overflow-hidden' />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Textarea',
  props: {
    value: String
  },
  watch: {
    value: function () {
      this.$nextTick(() => {
        const pt: [number, number] = [window.pageXOffset, window.pageYOffset]

        this.$el.style.height = 'auto'
        this.$el.style.height = `${this.$el.scrollHeight}px`

        window.scrollTo(...pt)
      })
    }
  }
})
</script>

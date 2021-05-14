<template>
  <textarea autocapitalize='none' autocomplete='off' autocorrect='off' spellcheck='false' class='bg-transparent p-1 resize-none overflow-hidden' @input='onInput' :style='style' />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { highlight, languages } from 'prismjs'

export default defineComponent({
  name: 'Textarea',
  data () {
    return {
      style: {
        outerHeight: 'auto'
      }
    }
  },
  methods: {
    onInput (ev: InputEvent & { target: HTMLInputElement }) {
      const html = highlight(ev.target.innerText, languages.javascript, 'javascript');
      ev.target.innerHTML = html
      const pt: [number, number] = [window.pageXOffset, window.pageYOffset]

      ev.target.style.height = 'auto'
      ev.target.style.height = `${ev.target.scrollHeight}px`

      window.scrollTo(...pt)
    }
  }

})
</script>

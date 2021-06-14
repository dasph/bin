<template>
  <Icon viewBox='0 0 48 48'>
    <path d='m32,2l-24,0c-2.21,0 -4,1.79 -4,4l0,28l4,0l0,-28l24,0l0,-4zm6,8l-22,0c-2.21,0 -4,1.79 -4,4l0,28c0,2.21 1.79,4 4,4l22,0c2.21,0 4,-1.79 4,-4l0,-28c0,-2.21 -1.79,-4 -4,-4zm0,32l-22,0l0,-28l22,0l0,28z' />
  </Icon>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from './Icon.vue'

export default defineComponent({
  name: 'IconCopy',
  components: { Icon }
})
</script>



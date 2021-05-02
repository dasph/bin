<template>
  <Icon viewBox='0 0 32 32'>
    <path d='m24,27.5l-16,0a3,3 0 0 1 -3,-3l0,-19a1,1 0 0 1 2,0l0,19a1,1 0 0 0 1,1l16,0a1,1 0 0 0 1,-1l0,-19a1,1 0 0 1 2,0l0,19a3,3 0 0 1 -3,3z' />
    <path d='m16,22.5a1,1 0 0 1 -1,-1l0,-14a1,1 0 0 1 2,0l0,14a1,1 0 0 1 -1,1z' />
    <path d='m21,20.5a1,1 0 0 1 -1,-1l0,-10a1,1 0 0 1 2,0l0,10a1,1 0 0 1 -1,1z' />
    <path d='m11,20.5a1,1 0 0 1 -1,-1l0,-10a1,1 0 0 1 2,0l0,10a1,1 0 0 1 -1,1z' />
  </Icon>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from './Icon.vue'

export default defineComponent({
  name: 'IconBin',
  components: { Icon }
})
</script>

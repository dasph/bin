<template>
  <header class='p-4 bg-gray-200 text-black'>
    <div class='flex flex-row items-center'>
      <Bin class='w-8 h-8' />
      <h1 class='text-2xl ml-2'>bin</h1>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Bin } from '../icons'

export default defineComponent({
  name: 'Header',
  components: { Bin }
})
</script>

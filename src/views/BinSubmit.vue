<template>
  <form class='m-2'>
    <h2 className='text-xl sm:text-2xl px-1 pb-1 border-l-1 border-current select-none'>your bin</h2>
    <Textarea name='code' autofocus />

    <h2 className='text-xl sm:text-2xl px-1 pb-1 border-l-1 border-current select-none'>settings</h2>
    <div class='grid grid-cols-5 gap-y-4 max-w-lg items-center mx-auto lg:mx-0 pt-5 border-t-1 border-current text-sm sm:text-base'>
      <h3 class='col-span-2 text-lg sm:text-xl ml-1.5 select-none'>title</h3>
      <InputText name='title' placeholder="bin's title" class='col-span-3' />

      <InputSubmit value='create' class='col-span-full m-auto px-6 py-1 select-none cursor-pointer' />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Textarea from '../components/Textarea.vue'
import InputText from '../components/InputText.vue'
import InputSubmit from '../components/InputSubmit.vue'

export default defineComponent({
  name: 'BinSubmit',
  components: {
    Textarea,
    InputText,
    InputSubmit
  }
})
</script>

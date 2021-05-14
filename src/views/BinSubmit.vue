<template>
  <form class='flex flex-col xl:flex-row mx-2'>
    <div class='w-full flex flex-grow flex-col xl:w-4/5 xl:pr-10'>
      <h2 className='text-lg sm:text-xl px-1 pb-1 border-l-1 border-current select-none'>your bin</h2>
      <Textarea name='code' autofocus placeholder='paste goes in here...' class='flex-grow w-full mt-2 border-current border-1 font-mono font-light text-sm' />
    </div>

    <div class='xl:flex-grow mt-5 xl:mt-0'>
      <h2 className='text-lg sm:text-xl px-1 pb-1 border-l-1 border-current select-none'>settings</h2>
      <div class='grid grid-cols-5 gap-y-4 max-w-lg items-center mx-auto xl:mx-0 pt-5 text-sm sm:text-base'>
        <h3 class='col-span-1 sm:text-lg ml-1.5 select-none font-light'>title</h3>
        <InputText name='title' placeholder="bin's title" class='col-span-4' />

        <InputSubmit value='create' class='col-span-full m-auto px-6 py-1 select-none cursor-pointer' />
      </div>
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

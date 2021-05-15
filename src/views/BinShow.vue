<template>
  <div class='flex flex-col xl:flex-row mx-2'>
    <div class='w-full flex flex-grow flex-col xl:w-4/5 xl:pr-10'>
      <h2 className='text-lg sm:text-xl px-1 pb-1 border-l-1 border-current select-none'>{ title }</h2>
      <Textarea v-bind='field' :disabled='false' readonly placeholder='loading...' class='flex-grow w-full mt-2 border-current border-1 font-mono font-light text-sm disabled:opacity-50' />
    </div>

    <div class='xl:flex-grow mt-5 xl:mt-0'>
      <h2 className='text-lg sm:text-xl px-1 pb-1 border-l-1 border-current select-none'>details</h2>
      <div class='grid grid-cols-5 gap-y-4 max-w-lg items-center mx-auto xl:mx-0 pt-5 text-sm sm:text-base'>
        <!-- <h3 class='col-span-1 sm:text-lg ml-1.5 select-none font-light'>title</h3>
        <span v-bind='field' placeholder="bin's title" class='col-span-4 disabled:opacity-50' :disabled='false' /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { request } from '../utils'
import Textarea from '../components/Textarea.vue'

type Payload = {
  title: string;
  value: string;
}

export default defineComponent({
  name: 'BinSubmit',
  components: {
    Textarea,
  },
  data () {

  },
  methods: {
  }
})
</script>

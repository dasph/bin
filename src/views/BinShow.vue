<template>
  <div class='flex flex-col xl:flex-row mx-2'>
    <div class='w-full flex flex-grow flex-col xl:w-4/5 xl:pr-10'>
      <h2 className='text-lg sm:text-xl px-1 pb-1 border-l-1 border-current select-none'>{{title}}</h2>
      <textarea v-model='value' :disabled='false' readonly placeholder='loading...' class='flex-grow w-full mt-2 bg-transparent p-1 resize-none overflowx-x-hidden overflow-y-scroll border-current border-1 font-mono font-light text-sm disabled:opacity-50' />
    </div>

    <div class='xl:flex-grow mt-5 xl:mt-0'>
      <h2 className='text-lg sm:text-xl px-1 pb-1 border-l-1 border-current select-none'>details</h2>
      <div class='grid grid-cols-5 gap-y-4 max-w-lg items-center mx-auto xl:mx-0 pt-5 text-sm sm:text-base'>
        <h3 v-if='createdAt' class='col-span-2 sm:text-lg ml-1.5 select-none font-light'>created:</h3>
        <span v-if='createdAt' class='col-span-3 disabled:opacity-50' :disabled='false'>{{new Date(+createdAt).toDateString()}}</span>
        <h3 v-if='path' class='col-span-1 sm:text-lg ml-1.5 select-none font-light'>url:</h3>
        <span v-if='path' class='col-span-4 disabled:opacity-50 text-xs' :disabled='false'>{{path}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { request } from '../utils'

type State = {
  value: string;
  title: string;
  createdAt: string | null;
  path: string | null;
}

type Bin = {
  title: string;
  value: string;
  createdAt: string;
}

export default defineComponent({
  name: 'BinShow',
  data () {
    return {
      value: 'loading...',
      title: ' ',
      createdAt: null,
      path: null
    } as State
  },
  created () {
    request<Bin>(`pastes-get?id=${this.$route.params.id}`).then(({ title, value, createdAt }) => {
      this.value = value
      this.title = title
      this.createdAt = createdAt
      this.path = window.location.href
    }).catch(() => {
      this.value = 'not found'
      this.title = 'error 404'
    })
  }
})
</script>

<template>
  <div class='flex flex-col xl:flex-row mx-2'>
    <div class='w-full flex flex-grow flex-col xl:w-4/5 xl:pr-10'>
      <h2 className='text-lg sm:text-xl px-1 pb-1 border-l-1 border-current select-none flex items-center'><Lock class='w-8 inline mr-2' v-if='password' />{{title}}</h2>
      <Textarea :value='value' ref='textarea' readonly class='flex-grow w-full mt-2 border-current border-1 font-mono font-light text-sm disabled:opacity-50' />
    </div>

    <div class='xl:w-1/5 mt-5 xl:mt-0'>
      <h2 className='text-lg sm:text-xl px-1 pb-1 border-l-1 border-current select-none'>details</h2>
      <div class='grid grid-cols-5 gap-y-4 max-w-lg items-center mx-auto xl:mx-0 pt-5 text-sm sm:text-base'>
        <h3 v-if='password' class='col-span-full sm:text-lg ml-0.5 select-none font-light'><Lock class='w-6 inline mr-2' />password protected</h3>
        <h3 v-if='createdAt' class='col-span-2 sm:text-lg ml-1.5 select-none font-light'>created on:</h3>
        <span v-if='createdAt' class='col-span-3'>{{new Date(createdAt).toDateString()}}</span>
        <h3 v-if='expireAt' class='col-span-2 sm:text-lg ml-1.5 select-none font-light'>expires on:</h3>
        <span v-if='expireAt' class='col-span-3'>{{new Date(expireAt).toDateString()}}</span>
        <h3 v-if='path' class='col-span-2 sm:text-lg ml-1.5 select-none font-light'>url:</h3>
        <div v-if='path' class='col-span-3 flex flex-row items-center'>
          <div class='relative mr-2 select-none'>
            <Copy class='w-4 h-4 flex-shrink-0 cursor-pointer' @click='copyUrl' />
            <div class='absolute mt-2 bg-green-600 rounded-lg flex items-center transform -left-full -translate-x-1 opacity-0 cursor-default' :class="{ 'animate-fadeOut': flash }">
              <div class='transform -rotate-45 w-7 h-7 bg-green-600 rounded-3xl rounded-tr-none absolute mx-auto right-0 left-0' />
              <span class='text-xs p-2 leading-none z-10'>copied!</span>
            </div>
          </div>
          <InputText :value='path' readonly v-if='path' class='flex-shrink text-xs w-28 px-1' dir='rtl' />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Textarea from '../components/Textarea.vue'
import InputText from '../components/InputText.vue'
import { Copy, Lock } from '../icons'
import { request, ApiError } from '../utils'

type State = {
  value: string;
  title: string;
  createdAt: string | null;
  expireAt?: string | null;
  path: string | null;
  flash: boolean;
  password: string | null;
}

type Bin = {
  title: string;
  value: string;
  createdAt: string;
  expireAt?: string;
}

export default defineComponent({
  name: 'BinShow',
  components: {
    Textarea,
    InputText,
    Copy,
    Lock
  },
  data () {
    return {
      value: 'loading...',
      title: ' ',
      createdAt: null,
      path: null,
      flash: false,
      password: null,
      expireAt: null
    } as State
  },
  created () {
    if (this.$route.query.password) {
      this.password = `${this.$route.query.password}`
      this.$router.replace({ 'query': void 0 })
    }

    const req = (): Promise<void> => {
      return request<Bin>(`bins/${this.$route.params.id}${this.password ? `/${this.password}` : ''}`).then(({ title, value, createdAt, expireAt }) => {
        this.value = value
        this.title = title
        this.createdAt = createdAt
        this.expireAt = expireAt
        this.path = window.location.href
      }).catch((error: ApiError) => {
        if (error.code === 403) {
          this.value = 'bin is protected by a password'
          this.title = 'password required'

          this.password = prompt('Please enter the password for this bin')
          if (this.password) return req()
          return
        }
        if (error.code === 400) {
          this.value = 'bin is protected by a password'
          this.title = 'wrong password'

          return
        }

        this.value = 'not found'
        this.title = 'error 404'
      })
    }

    req()
  },
  methods: {
    copyUrl: function () {
      if (navigator.clipboard) navigator.clipboard.writeText(this.path || '')
      else {
        const textArea = document.createElement('textarea')
        textArea.value = this.path || ''
        textArea.style.top = '0'
        textArea.style.left = '0'
        textArea.style.position = 'fixed'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }

      if (!this.$data.flash) setTimeout(() => this.$data.flash = false, 2000)
      this.$data.flash = true
    }
  }
})
</script>

<template>
  <div class='flex flex-col min-h-screen bg-gray-1000 text-gray-200'>
    <Header />

    <BinSubmit class='pt-5 pb-2 min-h-main' />

    <Footer class='mt-32' />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import BinSubmit from './views/BinSubmit.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    BinSubmit
  }
})
</script>

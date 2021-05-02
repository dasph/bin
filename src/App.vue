<template>
  <div class='flex flex-col min-h-screen bg-gray-1000 text-white'>
    <Header />

    <BinSubmit />

    <Footer />
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

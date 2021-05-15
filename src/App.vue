<template>
  <div class='flex flex-col min-h-screen bg-gray-1000 text-gray-200'>
    <Header />

    <router-view />

    <Footer class='mt-32' />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  }
})
</script>

<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue';


export default {
  components: {
    AppHeader,
    AppFooter,
  
  },
  data() {
    return {
      store,
    }
  }
}

</script>

<template>

  <div id="app">
    <AppHeader></AppHeader>
    <RouterView></RouterView>
    <AppFooter></AppFooter>

  </div>

</template>

<style lang="scss">
@use './assets/style/general.scss';
@use 'bootstrap'
</style>

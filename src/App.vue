<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppFooter from './components/AppFooter.vue';
import AppCard from './components/AppCard.vue';

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter,
    AppCard,
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
    <AppCard/>
    <AppFooter></AppFooter>

  </div>

</template>

<style lang="scss">
@use './assets/style/general.scss';
@use 'bootstrap'
</style>

<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from "@/components/FooterGuide/FooterGuide.vue"

export default {
  name: 'App',
  components:{
    FooterGuide
  }
}
</script>

<style>
</style>

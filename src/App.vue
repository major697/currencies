<template>
  <div class="app">
    <div class="app__cnt">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global/app.scss';
</style>

<script>
export default {
  name: 'App',
}
</script>

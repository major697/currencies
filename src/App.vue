<template>
  <div class="app">
    <div class="app__cnt">
      <div class="app__cnt__title">Currencies</div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global/app.scss';
</style>

<script>
import { mapActions } from 'vuex'
import { ActionsCurrency } from '@/store/modules/currency/types'

export default {
  name: 'App',
  created() {
    this.FETCH_CURRENCY()
  },
  methods: {
    ...mapActions('CurrencyModule', [ActionsCurrency.FETCH_CURRENCY]),
  },
}
</script>

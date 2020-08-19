<template>
  <div class="home">
    <div class="home__title">Currencies</div>
    <div class="home__button">
      <ButtonPrimary name="Favourites" />
    </div>
    <CurrencyTable @action-to-fav="actionToFav" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/home.scss';
</style>

<script>
import { mapActions } from 'vuex'
import { ActionsCurrency } from '@/store/modules/currency/types'

export default {
  name: 'HomeView',
  components: {
    CurrencyTable: () =>
      import(
        /* webpackChunkName: "CurrencyTable" */ '@/components/tables/CurrencyTable'
      ),
    ButtonPrimary: () =>
      import(
        /* webpackChunkName: "ButtonPrimary" */ '@/components/buttons/ButtonPrimary'
      ),
  },
  created() {
    this.FETCH_CURRENCY()
  },
  methods: {
    ...mapActions('CurrencyModule', [
      ActionsCurrency.FETCH_CURRENCY,
      ActionsCurrency.FETCH_ACTION_CURRENCY_TO_FAV,
    ]),
    actionToFav(code, action) {
      this.FETCH_ACTION_CURRENCY_TO_FAV({
        code,
        action,
      })
    },
  },
}
</script>

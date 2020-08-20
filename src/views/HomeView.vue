<template>
  <div>
    <div class="page__button">
      <ButtonPrimary
        name="Favourites"
        @click.native="$router.push({ name: 'Favourites' })"
      />
    </div>
    <CurrencyTable
      :currencies="currencies"
      @action-to-fav="actionToFav"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/page.scss';
</style>

<script>
import { mapActions, mapState } from 'vuex'
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
  computed: {
    ...mapState('CurrencyModule', {
      currencies: state => state.currency.data,
    }),
  },
  methods: {
    ...mapActions('CurrencyModule', [
      ActionsCurrency.FETCH_CURRENCY_ACTION_TO_FAV,
    ]),
    actionToFav(code, action) {
      this.FETCH_CURRENCY_ACTION_TO_FAV({
        code,
        action,
      })
    },
  },
}
</script>

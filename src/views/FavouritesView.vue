<template>
  <div>
    <div v-show="currencyGroup.length" class="home__button">
      <ButtonPrimary name="Remove" @click.native="remove" />
    </div>
    <CurrencyTable
      :currencies="GET_CURRENCY_FAV"
      :currency-group.sync="currencyGroup"
      :is-fav="true"
      @action-to-fav="actionToFav"
    />
    <CenterModal>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>
    </CenterModal>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/favourites.scss';
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
import {
  GettersCurrency,
  ActionsCurrency,
} from '@/store/modules/currency/types'

export default {
  name: 'FavouritesView',
  components: {
    CurrencyTable: () =>
      import(
        /* webpackChunkName: "CurrencyTable" */ '@/components/tables/CurrencyTable'
      ),
    ButtonPrimary: () =>
      import(
        /* webpackChunkName: "ButtonPrimary" */ '@/components/buttons/ButtonPrimary'
      ),
    CenterModal: () =>
      import(
        /* webpackChunkName: "CenterModal" */ '@/components/modals/CenterModal'
      ),
  },
  data() {
    return {
      currencyGroup: [],
    }
  },
  computed: {
    ...mapGetters('CurrencyModule', [
      GettersCurrency.GET_CURRENCY_FAV,
    ]),
  },
  methods: {
    ...mapActions('CurrencyModule', [
      ActionsCurrency.FETCH_ACTION_CURRENCY_TO_FAV,
    ]),
    actionToFav(code, action) {
      this.FETCH_ACTION_CURRENCY_TO_FAV({
        code,
        action,
      })
    },
    remove() {
      console.log(this.currencyGroup)
    },
  },
}
</script>

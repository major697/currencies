<template>
  <div>
    <div class="page__button page__button--two-btn">
      <ButtonPrimary
        icon="left-arrow.svg"
        @click.native="$router.push({ name: 'Home' })"
        title="back to home"
      />
      <ButtonPrimary
        name="Remove"
        v-if="GET_CURRENCY_FAV.length"
        :disabled="!currencyGroup.length"
        @click.native="modalRemove = true"
        title="go to favourites"
      />
    </div>
    <CurrencyTable
      :currencies="GET_CURRENCY_FAV"
      :currency-group.sync="currencyGroup"
      :is-fav="true"
      @action-to-fav="actionToFav"
    />
    <CenterModal
      v-if="modalRemove"
      @close-modal="modalRemove = false"
    >
      <template #header>
        Remove currency
      </template>
      <template #body>
        Remove: {{ currencyGroup.join(', ') }}?
      </template>
      <template #body-button>
        <ButtonPrimary
          name="Remove"
          :dark="true"
          @click.native="removeCurrency"
        />
      </template>
    </CenterModal>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/page.scss';
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
      modalRemove: false,
    }
  },
  computed: {
    ...mapGetters('CurrencyModule', [
      GettersCurrency.GET_CURRENCY_FAV,
    ]),
  },
  methods: {
    ...mapActions('CurrencyModule', [
      ActionsCurrency.FETCH_CURRENCY_ACTION_TO_FAV,
      ActionsCurrency.FETCH_CURRENCY_REMOVE,
    ]),
    actionToFav(code, action) {
      this.FETCH_CURRENCY_ACTION_TO_FAV({
        code,
        action,
      })
    },
    removeCurrency() {
      this.FETCH_CURRENCY_REMOVE(this.currencyGroup)
      this.modalRemove = false
      this.currencyGroup = []
    },
  },
}
</script>

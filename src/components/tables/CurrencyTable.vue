<template>
  <table class="table">
    <tr class="table__header">
      <th class="table__header__item">#</th>
      <th class="table__header__item table__header__item__hidden">
        currency
      </th>
      <th class="table__header__item">code</th>
      <th class="table__header__item">mid</th>
    </tr>
    <tr
      class="table__body"
      v-for="(currency, i) in getCurrencies"
      :key="currency.code"
    >
      <td class="table__body__item">
        <div class="table__body__item__star">
          <div
            @click="addToFav(currency.code, !currency.fav)"
            class="table__body__item__star__fav"
            :class="{
              'table__body__item__star__fav--un-fav': currency.fav,
            }"
            title="add to favourite"
          ></div>
          <div class="table__body__item__star__number">
            {{ i + 1 }}
          </div>
        </div>
      </td>
      <td class="table__body__item table__body__item__hidden">
        {{ currency.currency }}
      </td>
      <td class="table__body__item">
        {{ currency.code }}
      </td>
      <td class="table__body__item">{{ currency.mid }}</td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/tables/currencyTable.scss';
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CurrencyTable',
  computed: {
    ...mapState('CurrencyModule', {
      getCurrencies: state => state.currency.data,
    }),
  },
  methods: {
    addToFav(currencyCode, action) {
      this.$emit('action-to-fav', currencyCode, action)
    },
  },
}
</script>

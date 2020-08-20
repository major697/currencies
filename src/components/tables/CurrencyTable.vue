<template>
  <div>
    <table v-if="currencies.length" class="table">
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
        v-for="(currency, i) in currencies"
        :key="currency.code"
      >
        <td class="table__body__item">
          <div class="table__body__item__star">
            <input
              v-if="isFav"
              type="checkbox"
              v-model="getCurrencyGroup"
              :value="currency.code"
              title="select to remove"
            />
            <div
              @click="actionToFav(currency.code, !currency.fav)"
              class="table__body__item__star__fav"
              :class="{
                'table__body__item__star__fav--un-fav': currency.fav,
              }"
              :title="titleButton(currency.fav)"
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

    <div v-else class="table__empty">
      Empty list!
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/tables/currencyTable.scss';
</style>

<script>
export default {
  name: 'CurrencyTable',
  props: {
    currencies: {
      type: Array,
      required: true,
    },
    currencyGroup: {
      type: Array,
      default: () => [],
    },
    isFav: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    getCurrencyGroup: {
      get() {
        return this.currencyGroup
      },
      set(code) {
        this.$emit('update:currency-group', code)
      },
    },
  },
  methods: {
    actionToFav(currencyCode, action) {
      this.$emit('action-to-fav', currencyCode, action)
    },
    titleButton(status) {
      return !status ? 'add to favourite' : 'remove from favourite'
    },
  },
}
</script>

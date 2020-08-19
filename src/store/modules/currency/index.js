import {
  ActionsCurrency,
  MutationsCurrency,
  GettersCurrency,
} from './types'
import { getCurrencies } from '@/services/api/currency'

export default {
  namespaced: true,
  strict: true,
  state: {
    currency: {
      data: [],
      date: null,
    },
  },
  actions: {
    async [ActionsCurrency.FETCH_CURRENCY]({ state, commit }) {
      if (!state.currency.data.length) {
        try {
          const { data } = await getCurrencies()

          const convertDataFav = data[0].rates.map(element => ({
            ...element,
            fav: false,
          }))
          commit(MutationsCurrency.SET_CURRENCY_DATA, convertDataFav)
          commit(
            MutationsCurrency.SET_CURRENCY_DATE,
            data[0].effectiveDate,
          )
        } catch ({ response }) {
          console.error(response)
        }
      }
    },
    async [ActionsCurrency.FETCH_ACTION_CURRENCY_TO_FAV](
      { state, commit },
      payload,
    ) {
      const { code, action } = payload

      const favCurrency = state.currency.data.map(element => ({
        ...element,
        fav: element.code === code ? action : element.fav,
      }))
      commit(MutationsCurrency.SET_CURRENCY_DATA, favCurrency)
    },
  },
  mutations: {
    [MutationsCurrency.SET_CURRENCY_DATA](state, payload) {
      state.currency.data = payload
    },
    [MutationsCurrency.SET_CURRENCY_DATE](state, payload) {
      state.currency.date = payload
    },
  },
  getters: {
    [GettersCurrency.GET_CURRENCY_FAV](state) {
      return state.currency.data.filter(({ fav }) => fav)
    },
  },
}

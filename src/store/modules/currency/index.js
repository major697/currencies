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
    types: [],
  },
  actions: {
    async [ActionsCurrency.FETCH_TYPES]({ commit }) {
      try {
        const { data } = await getCurrencies()
        commit(MutationsCurrency.SET_TYPES, data)
      } catch ({ response }) {
        console.log(response)
      }
    },
  },
  mutations: {
    [MutationsCurrency.SET_TYPES](state, payload) {
      state.types = payload
    },
  },
  getters: {
    [GettersCurrency.GET_TYPES](state) {
      console.log(state)
    },
  },
}

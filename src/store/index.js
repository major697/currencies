import Vue from 'vue'
import Vuex from 'vuex'
import CurrencyModule from './modules/currency'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    CurrencyModule,
  },
})

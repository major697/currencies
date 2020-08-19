import axios from 'axios'

export const getCurrencies = () => {
  return axios.get(
    'http://api.nbp.pl/api/exchangerates/tables/a?format=json',
  )
}

const project = 'Currencies'

export default [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(
        /* webpackChunkName: "HomeView" */ '@/views/HomeView.vue'
      ),
    meta: {
      title: `${project} - Home`,
    },
  },
  {
    path: '/fav',
    name: 'Favourites',
    component: () =>
      import(
        /* webpackChunkName: "FavouritesView" */ '@/views/FavouritesView.vue'
      ),
    meta: {
      title: `${project} - Favourites`,
    },
  },
]

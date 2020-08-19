const project = 'Currencies'

export default [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
    meta: {
      title: `${project} - Home`,
    },
  },
]

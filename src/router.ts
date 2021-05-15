import BinSubmit from './views/BinSubmit.vue'
import BinShow from './views/BinShow.vue'

export const routes = [
  { name: 'home', path: '/', component: BinSubmit, props: { class: 'pt-5 pb-2 min-h-main'} },
  { name: 'bin', path: '/:id([a-zA-Z0-9_\-]{8})', component: BinShow, props: { class: 'pt-5 pb-2 min-h-main'} }
]

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import TuSituacionView from '../views/TuSituacionView.vue'
import SobreMiView from '../views/SobreMiView.vue'
import ContactoView from '../views/ContactoView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/servicios', name: 'servicios', component: ServiciosView },
  { path: '/tu-situacion/:id?', name: 'tu-situacion', component: TuSituacionView, props: true },
  { path: '/sobre-mi', name: 'sobre-mi', component: SobreMiView },
  { path: '/contacto', name: 'contacto', component: ContactoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
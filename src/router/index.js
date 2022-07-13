import { createRouter, createWebHistory } from "vue-router";
import GalleryDetail from "../views/GalleryDetail.vue";
import ProductView from "../views/ProductView.vue";
import HomeView from "../views/HomeView.vue";
import CasPlynieDetail from "../views/CasPlynieDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/gallery/:id",
      name: "gallery",
      component: GalleryDetail,
    },
    {
      path: "/produkt/:type/:id",
      name: "product",
      component: ProductView,
    },

    {
      path: "/detail/:filename",
      name: "casplynie",
      component: CasPlynieDetail,
    },
  ],
});

export default router;

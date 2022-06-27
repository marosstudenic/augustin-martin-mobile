import { createRouter, createWebHistory } from "vue-router";
import GalleryDetail from "../views/GalleryDetail.vue";
import ProductView from "../views/ProductView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
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
  ],
});

export default router;

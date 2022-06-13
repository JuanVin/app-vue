import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "Agenda",
    component: Home,
  },
  {
    path: "/tabla",
    name: "TablaAgenda",
    component: () => import("../components/TablaAgenda"),
  },
  {
    path: "/modificar/:id",
    name: "FormularioActualizar",
    component: () => import("../components/FormularioAgenda"),
  },
  {
    path: "/crear",
    name: "FormularioCrear",
    component: () => import("../components/FormularioAgenda"),
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
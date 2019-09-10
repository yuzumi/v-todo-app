import Home from "@/views/Home.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/new",
    name: "new",
    component: () => import("@/views/New.vue")
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("@/views/Edit.vue")
  }
];

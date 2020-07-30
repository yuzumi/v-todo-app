export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue")
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

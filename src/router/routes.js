export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/new",
    name: "new",
    component: () => import("@/views/NewTodo.vue")
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("@/views/EditTodo.vue")
  }
];

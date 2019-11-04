import loadable from "@loadable/component";

export default [
  {
    path: "/",
    exact: true,
    component: loadable(() => import(`@/pages/index/index.js`))
  },
  {
    path: "/ppx",
    exact: true,
    component: loadable(() => import(`@/pages/ppx/index.js`))
  },
  {
    path: "/ppx/01",
    exact: true,
    component: loadable(() => import(`@/pages/ppx/01/index.js`))
  }
];

import loadable from "@loadable/component";
export default [
  {
    path: "/main/samples",
    exact: true,
    component: loadable(() => import(`@/pages/samples/index.js`))
  },
  {
    path: "/main/samples/table",
    exact: true,
    component: loadable(() => import(`@/pages/samples/simple-table/index.js`))
  },
  {
    path: "/main/samples/complexTable",
    exact: true,
    component: loadable(() => import(`@/pages/samples/complex-table/index.js`))
  }
];

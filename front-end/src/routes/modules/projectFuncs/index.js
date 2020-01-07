
import loadable from "@loadable/component";
export default [
  {
    path: "/main/projectFuncs",
    exact: true,
    component: loadable(() => import(`@/pages/projectFuncs/index.js`))
  }
];

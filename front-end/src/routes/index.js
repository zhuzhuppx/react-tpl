import loadable from "@loadable/component";

export default {
  loginPage: {
    path: "/"
  },
  mainPage: {
    path: "/main",
    routes: [
      {
        path: "/main/ppx",
        exact: true,
        component: loadable(() => import(`@/pages/ppx/index.js`))
      },
      {
        path: "/main/ppx/01",
        exact: true,
        component: loadable(() => import(`@/pages/ppx/01/index.js`))
      }
    ]
  }
};

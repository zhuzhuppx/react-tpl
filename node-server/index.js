const Koa = require("koa");
const app = new Koa();
const router = require("./router");

const middleware = require("./middleware");
middleware(app);
router(app);
const PORT = 9870;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

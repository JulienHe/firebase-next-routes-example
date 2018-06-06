const path = require("path");
const next = require("next");
const routes = require("../src/routes");
const app = next({
  dev: process.env.NODE_ENV !== "production",
  dir: path.join(__dirname, "../src/app")
});
const handler = routes.getRequestHandler(app);

const express = require("express");
app.prepare().then(() => {
  express()
    .use(handler)
    .listen(3000);
});

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _app = require("./app");

/*
Namespace application services with function groups.
Partially deploy namespaces for independent service updates.
*/
// SSR Next.js app Cloud Function used by Firebase Hosting
// yarn deploy-app
const app = {
  next: _app.nextApp // other Hosting dependencies

};
exports.app = app;
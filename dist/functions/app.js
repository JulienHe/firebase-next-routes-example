"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextApp = undefined;

var _firebaseFunctions = require("firebase-functions");

var functions = _interopRequireWildcard(_firebaseFunctions);

var _next = require("next");

var _next2 = _interopRequireDefault(_next);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const dev = process.env.NODE_ENV !== 'production';
const app = (0, _next2.default)({
  dev,
  conf: {
    distDir: 'next'
  }
});

const handler = _routes2.default.getRequestHandler(app);

const nextApp = functions.https.onRequest((request, response) => {
  console.log('File: ' + request.originalUrl); // eslint-disable-line no-console

  return app.prepare().then(() => handler(request, response));
});
exports.nextApp = nextApp;
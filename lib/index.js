'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GO_BACK = exports.GO_FORWARD = exports.GO = exports.REPLACE = exports.PUSH = exports.LOCATION_CHANGED = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.Fragment = exports.PersistentQueryLink = exports.Link = exports.RouterProvider = exports.provideRouter = exports.initializeCurrentLocation = exports.routerForHapi = exports.routerForExpress = exports.routerForBrowser = undefined;

var _types = require('./types');

var _actions = require('./actions');

var _browserRouter = require('./environment/browser-router');

var _browserRouter2 = _interopRequireDefault(_browserRouter);

var _expressRouter = require('./environment/express-router');

var _expressRouter2 = _interopRequireDefault(_expressRouter);

var _hapiRouter = require('./environment/hapi-router');

var _hapiRouter2 = _interopRequireDefault(_hapiRouter);

var _provider = require('./components/provider');

var _provider2 = _interopRequireDefault(_provider);

var _link = require('./components/link');

var _fragment = require('./components/fragment');

var _fragment2 = _interopRequireDefault(_fragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.routerForBrowser = _browserRouter2.default;
exports.routerForExpress = _expressRouter2.default;
exports.routerForHapi = _hapiRouter2.default;
exports.initializeCurrentLocation = _actions.initializeCurrentLocation;
exports.provideRouter = _provider2.default;
exports.RouterProvider = _provider.RouterProvider;
exports.Link = _link.Link;
exports.PersistentQueryLink = _link.PersistentQueryLink;
exports.Fragment = _fragment2.default;
exports.push = _actions.push;
exports.replace = _actions.replace;
exports.go = _actions.go;
exports.goBack = _actions.goBack;
exports.goForward = _actions.goForward;
exports.LOCATION_CHANGED = _types.LOCATION_CHANGED;
exports.PUSH = _types.PUSH;
exports.REPLACE = _types.REPLACE;
exports.GO = _types.GO;
exports.GO_FORWARD = _types.GO_FORWARD;
exports.GO_BACK = _types.GO_BACK;
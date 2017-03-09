'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeCurrentLocation = exports.locationDidChange = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = undefined;

var _types = require('./types');

var _normalizeHref = require('./util/normalize-href');

var _normalizeHref2 = _interopRequireDefault(_normalizeHref);

var _locationState = require('./util/location-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var push = exports.push = function push(href, options) {
  return {
    type: _types.PUSH,
    payload: (0, _locationState.packState)((0, _normalizeHref2.default)(href), options)
  };
};

var replace = exports.replace = function replace(href, options) {
  return {
    type: _types.REPLACE,
    payload: (0, _locationState.packState)((0, _normalizeHref2.default)(href), options)
  };
};

var go = exports.go = function go(index) {
  return {
    type: _types.GO,
    payload: index
  };
};

var goBack = exports.goBack = function goBack() {
  return { type: _types.GO_BACK };
};
var goForward = exports.goForward = function goForward() {
  return { type: _types.GO_FORWARD };
};

var locationDidChange = exports.locationDidChange = function locationDidChange(location) {
  return {
    type: _types.LOCATION_CHANGED,
    payload: location
  };
};

var initializeCurrentLocation = exports.initializeCurrentLocation = function initializeCurrentLocation(location) {
  return {
    type: _types.LOCATION_CHANGED,
    payload: location
  };
};
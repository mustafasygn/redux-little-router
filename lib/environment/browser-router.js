'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _normalizeHref = require('../util/normalize-href');

var _normalizeHref2 = _interopRequireDefault(_normalizeHref);

var _install = require('../install');

var _install2 = _interopRequireDefault(_install);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next: unstubbable! */
var realLocation = function realLocation() {
  return window.location;
};

exports.default = function (_ref) {
  var routes = _ref.routes,
      basename = _ref.basename,
      _ref$getLocation = _ref.getLocation,
      getLocation = _ref$getLocation === undefined ? realLocation : _ref$getLocation;

  var history = (0, _createBrowserHistory2.default)({ basename: basename });

  var _getLocation = getLocation(),
      fullPathname = _getLocation.pathname,
      search = _getLocation.search;

  // Strip the basename from the initial pathname


  var pathname = basename ? fullPathname.replace(basename, '') : fullPathname;

  var descriptor = basename ? { pathname: pathname, basename: basename, search: search } : { pathname: pathname, search: search };

  var location = (0, _normalizeHref2.default)(descriptor);

  return (0, _install2.default)({ routes: routes, history: history, location: location });
};
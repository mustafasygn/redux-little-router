'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('./actions');

var _locationState = require('./util/location-state');

var _matchCache = require('./util/match-cache');

var _matchCache2 = _interopRequireDefault(_matchCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var routes = _ref.routes,
      history = _ref.history,
      matchRoute = _ref.matchRoute,
      matchWildcardRoute = _ref.matchWildcardRoute;
  return function (createStore) {
    return function (userReducer, initialState, enhancer) {
      var store = createStore(userReducer, initialState, enhancer);

      history.listen(function (location) {
        _matchCache2.default.clear();
        store.dispatch((0, _actions.locationDidChange)(_extends({}, (0, _locationState.unpackState)(location), matchRoute(location.pathname))));
      });

      return _extends({}, store, {
        routes: routes,
        matchRoute: matchRoute,
        matchWildcardRoute: matchWildcardRoute
      });
    };
  };
};
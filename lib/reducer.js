'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = require('./types');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var flow = function flow() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (prev, curr) {
    return function () {
      return curr(prev.apply(undefined, arguments));
    };
  });
};

var resolveQuery = function resolveQuery(_ref) {
  var oldLocation = _ref.oldLocation,
      newLocation = _ref.newLocation,
      options = _ref.options;
  var oldQuery = oldLocation.query,
      oldSearch = oldLocation.search;

  // Only use the query from state if it exists
  // and the href doesn't provide its own query

  if (options.persistQuery && oldQuery && !newLocation.search && !newLocation.query) {
    return {
      oldLocation: oldLocation,
      newLocation: _extends({}, newLocation, {
        query: oldQuery,
        search: oldSearch
      }),
      options: options
    };
  }

  return { oldLocation: oldLocation, newLocation: newLocation, options: options };
};

var resolveBasename = function resolveBasename(_ref2) {
  var oldLocation = _ref2.oldLocation,
      newLocation = _ref2.newLocation,
      options = _ref2.options;
  var basename = oldLocation.basename;

  if (basename) {
    return {
      oldLocation: oldLocation,
      newLocation: _extends({ basename: basename }, newLocation),
      options: options
    };
  }
  return { oldLocation: oldLocation, newLocation: newLocation, options: options };
};

var resolvePrevious = function resolvePrevious(_ref3) {
  var oldLocation = _ref3.oldLocation,
      newLocation = _ref3.newLocation,
      options = _ref3.options;
  return {
    oldLocation: oldLocation,
    newLocation: _extends({}, newLocation, {
      previous: oldLocation
    }),
    options: options
  };
};

exports.default = function (initialLocation) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialLocation;
    var action = arguments[1];

    if (action.type === _types.LOCATION_CHANGED) {
      // No-op the initial route action
      if (state.pathname === action.payload.pathname && state.search === action.payload.search) {
        return state;
      }

      // Extract the previous state, but dump the
      // previous state's previous state so that the
      // state tree doesn't keep growing indefinitely
      // eslint-disable-next-line no-unused-vars

      var previous = state.previous,
          _oldLocation = _objectWithoutProperties(state, ['previous']);

      var _options = action.payload.options;


      var resolveLocation = flow(resolveQuery, resolveBasename, resolvePrevious);

      return resolveLocation({
        oldLocation: _oldLocation,
        newLocation: action.payload,
        options: _options || {}
      }).newLocation;
    }
    return state;
  };
};
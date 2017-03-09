'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var packState = exports.packState = function packState(location) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // eslint-disable-next-line no-unused-vars
  var query = location.query,
      rest = _objectWithoutProperties(location, ['query']);

  return _extends({}, rest, {
    state: _extends({}, rest.state || {}, {

      // Namespace our state to prevent interference
      // with user-provided state
      reduxLittleRouter: {
        query: query || {},
        options: options
      }
    })
  });
};

var unpackState = exports.unpackState = function unpackState(location) {
  var _location$state = location.state,
      state = _location$state === undefined ? {} : _location$state,
      restLocation = _objectWithoutProperties(location, ['state']);

  var _state$reduxLittleRou = state.reduxLittleRouter,
      reduxLittleRouter = _state$reduxLittleRou === undefined ? {} : _state$reduxLittleRou,
      restState = _objectWithoutProperties(state, ['reduxLittleRouter']);

  var _reduxLittleRouter$qu = reduxLittleRouter.query,
      query = _reduxLittleRouter$qu === undefined ? {} : _reduxLittleRouter$qu,
      _reduxLittleRouter$op = reduxLittleRouter.options,
      options = _reduxLittleRouter$op === undefined ? {} : _reduxLittleRouter$op;


  return _extends({}, restLocation, {
    state: restState,
    query: query,
    options: options
  });
};
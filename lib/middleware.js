'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('./types');

/* eslint-disable consistent-return */
exports.default = function (_ref) {
  var history = _ref.history;
  return function () {
    return function (next) {
      return function (action) {
        switch (action.type) {
          case _types.PUSH:
            history.push(action.payload);
            // No return, no next() here
            // We stop all history events from progressing further through the dispatch chain...
            break;
          case _types.REPLACE:
            history.replace(action.payload);
            break;
          case _types.GO:
            history.go(action.payload);
            break;
          case _types.GO_BACK:
            history.goBack();
            break;
          case _types.GO_FORWARD:
            history.goForward();
            break;
          default:
            // ...but we want to leave all events we don't care about undisturbed
            return next(action);
        }
      };
    };
  };
};
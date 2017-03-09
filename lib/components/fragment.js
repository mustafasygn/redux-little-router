'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _matchCache = require('../util/match-cache');

var _matchCache2 = _interopRequireDefault(_matchCache);

var _generateId = require('../util/generate-id');

var _generateId2 = _interopRequireDefault(_generateId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var relativePaths = function relativePaths(ComposedComponent) {
  var RelativeFragment = function (_Component) {
    _inherits(RelativeFragment, _Component);

    function RelativeFragment() {
      _classCallCheck(this, RelativeFragment);

      var _this = _possibleConstructorReturn(this, (RelativeFragment.__proto__ || Object.getPrototypeOf(RelativeFragment)).call(this));

      _this.id = (0, _generateId2.default)();
      return _this;
    }

    _createClass(RelativeFragment, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var parentRoute = this.context.parentRoute;
        var forRoute = this.props.forRoute;


        return {
          // Append the parent route if this isn't the first
          // RelativeFragment in the hierarchy.
          parentRoute: parentRoute && parentRoute !== '/' && parentRoute !== forRoute ? '' + parentRoute + (forRoute || '') : forRoute,
          parentId: this.id
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            forRoute = _props.forRoute,
            rest = _objectWithoutProperties(_props, ['children', 'forRoute']);

        var _context = this.context,
            router = _context.router,
            parentRoute = _context.parentRoute,
            parentId = _context.parentId;
        var store = router.store;


        var location = store.getState().router;

        var routePrefix = parentRoute && parentRoute !== '/' ? parentRoute : '';

        return _react2.default.createElement(ComposedComponent, _extends({
          parentId: parentId,
          location: location,
          matchRoute: store.matchWildcardRoute,
          forRoute: forRoute && '' + routePrefix + forRoute,
          children: children
        }, rest));
      }
    }]);

    return RelativeFragment;
  }(_react.Component);

  // Consumes this context...


  RelativeFragment.contextTypes = {
    router: _react.PropTypes.object,
    parentRoute: _react.PropTypes.string,
    parentId: _react.PropTypes.string
  };

  // ...and provides this context.
  RelativeFragment.childContextTypes = {
    parentRoute: _react.PropTypes.string,
    parentId: _react.PropTypes.string
  };

  return RelativeFragment;
};

var Fragment = function Fragment(props) {
  var location = props.location,
      matchRoute = props.matchRoute,
      forRoute = props.forRoute,
      withConditions = props.withConditions,
      children = props.children,
      parentId = props.parentId;


  var matchResult = matchRoute(location.pathname, forRoute);

  if (!matchResult || withConditions && !withConditions(location) || forRoute && matchResult.route !== forRoute) {
    return null;
  }

  if (parentId) {
    var previousMatch = _matchCache2.default.get(parentId);
    if (previousMatch && previousMatch !== forRoute) {
      return null;
    } else {
      _matchCache2.default.add(parentId, forRoute);
    }
  }

  return _react2.default.createElement(
    'div',
    null,
    children
  );
};

exports.default = relativePaths(Fragment);
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var Toast =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Toast)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "initTimer", function () {
      var duration = _this.props.duration;

      if (duration) {
        _this.closeTimer = setTimeout(function () {
          _this.close();
        }, duration * 1000);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      _this.clearTimer();

      _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "clearTimer", function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    });

    return _this;
  }

  _createClass(Toast, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _className;

      var props = this.props;
      var componentClass = "".concat(props.prefixCls, "-notice");
      var className = (_className = {}, _defineProperty(_className, componentClass, 1), _defineProperty(_className, props.className, !!props.className), _className);
      return React.createElement("div", {
        className: classnames(className)
      }, props.children);
    }
  }]);

  return Toast;
}(React.Component);

_defineProperty(Toast, "propTypes", {
  duration: PropTypes.number,
  onClose: PropTypes.func,
  children: PropTypes.any // update: PropTypes.bool,
  // closeIcon: PropTypes.node

});

_defineProperty(Toast, "defaultProps", {
  onEnd: function onEnd() {},
  onClose: function onClose() {},
  duration: 3
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".w-toast {\n  position: fixed;\n  z-index: 1000;\n}\n.w-toast-mask {\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.w-toast-no-mask {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.w-toast-notice {\n  padding: 7px 20px;\n  color: #fff;\n  border-radius: 3px;\n  background: rgba(58, 58, 58, 0.9);\n  line-height: 1.5;\n}\n";
styleInject(css);

var Toaster =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toaster, _React$Component);

  function Toaster() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Toaster);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Toaster)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      notice: {}
    });

    _defineProperty(_assertThisInitialized(_this), "add", function (notice) {
      console.log('notice', notice);

      _this.setState(function (preState) {
        return {
          notice: notice
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "remove", function () {
      _this.setState({
        notice: {}
      });
    });

    return _this;
  }

  _createClass(Toaster, [{
    key: "render",
    value: function render() {
      var _className;

      var notice = this.state.notice;
      var props = this.props;
      var className = (_className = {}, _defineProperty(_className, props.prefixCls, 1), _defineProperty(_className, props.className, !!props.className), _defineProperty(_className, "".concat(props.prefixCls, "-mask"), notice.mask), _defineProperty(_className, "".concat(props.prefixCls, "-no-mask"), !notice.mask), _className);
      console.log('props', props);
      var onClose = createChainedFunction(this.remove.bind(this), notice.onCloseBack);
      return React.createElement("div", {
        className: classnames(className)
      }, notice.content && React.createElement(Toast, _extends({
        prefixCls: props.prefixCls
      }, notice, {
        onClose: onClose
      }), notice.content));
    }
  }]);

  return Toaster;
}(React.Component);

_defineProperty(Toaster, "propTypes", {
  prefixCls: PropTypes.string,
  mask: PropTypes.bool
});

_defineProperty(Toaster, "defaultProps", {
  prefixCls: 'w-toast'
});

function createChainedFunction() {
  var args = [].slice.call(arguments, 0);

  if (args.length === 1) {
    return args[0];
  }

  return function chainedFunction() {
    for (var i = 0; i < args.length; i++) {
      if (args[i] && args[i].apply) {
        args[i].apply(this, arguments);
      }
    }
  };
}

Toaster.createToast = function (properties, callback) {
  var _ref = properties || {},
      getContainer = _ref.getContainer,
      props = _objectWithoutProperties(_ref, ["getContainer"]);

  var div = document.createElement('div');

  if (getContainer) {
    var root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }

  var called = false;

  function ref(toaster) {
    if (called) return;
    called = true;
    console.log('props', props); // toaster.add(props,callback);

    callback({
      toast: function toast(toastProps) {
        console.log('add');
        toaster.add(toastProps);
      },
      component: toaster,
      destroy: function destroy() {
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
      }
    });
  }

  ReactDOM.render(React.createElement(Toaster, _extends({}, props, {
    ref: ref
  })), div);
};

var Toaster$1 = {
  text: function text(properties) {
    var toastConfig = {};

    if (typeof properties === 'string') {
      toastConfig.content = properties;
    } else if (Object.prototype.toString.call(properties) === '[object Object]') {
      toastConfig = Object.assign({}, properties);
    } else {
      throw new TypeError('The parameter is incorrect, requiring a string or object');
    }

    return Toaster.createToast({}, function (toaster) {
      var _toastConfig = toastConfig,
          onClose = _toastConfig.onClose,
          props = _objectWithoutProperties(_toastConfig, ["onClose"]);

      toaster.toast(_objectSpread2({
        mask: true
      }, props, {
        onCloseBack: function onCloseBack() {
          if (onClose) {
            onClose();
          }

          console.log('close');
          toaster.destroy();
        }
      }));
    });
  }
};

export default Toaster$1;

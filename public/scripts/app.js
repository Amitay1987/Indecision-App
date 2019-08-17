"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IndecisionApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndecisionApp).call(this, props));
    _this.state = {
      options: [],
      title: 'Put your life in the hands of computer'
    };
    _this.addToOptions = _this.addToOptions.bind(_assertThisInitialized(_this));
    _this.removeArray = _this.removeArray.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "addToOptions",
    value: function addToOptions(option) {
      var _this2 = this;

      this.state.options.push(option);
      this.setState(function () {
        return {
          options: _this2.state.options
        };
      });
    }
  }, {
    key: "removeArray",
    value: function removeArray() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      //const title = 'Indecision App';
      var subtitle = 'Put your life in the hands of computer';
      console.log(this.state.options.length);
      return React.createElement("div", null, React.createElement("h1", null, "Indecision-App"), React.createElement(Header, {
        title: this.state.title
      }), React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        options: this.state.options
      }), React.createElement("button", {
        onClick: this.removeArray
      }, "remove all"), React.createElement(Options, {
        options: this.state.options
      }), React.createElement(AddOption, {
        options: this.state.options,
        addOption: this.addToOptions
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("p", null, this.props.title));
    }
  }]);

  return Header;
}(React.Component);

var Action =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action(props) {
    var _this3;

    _classCallCheck(this, Action);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Action).call(this, props));
    _this3.handleClick = _this3.handleClick.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(Action, [{
    key: "handleClick",
    value: function handleClick() {
      var guessOption = Math.floor(Math.random() * this.props.options.length);
      alert(this.props.options[guessOption]);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.handleClick.bind(this),
        disabled: !this.props.hasOptions
      }, "What should I do"));
    }
  }]);

  return Action;
}(React.Component); //Options --> Options component here
//Add option --> AddOption component here


var Options =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, _getPrototypeOf(Options).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      console.log(this.props.options);
      return React.createElement("div", null, React.createElement("ol", null, this.props.options.length > 0 && 'Your Options', this.props.options.map(function (option, index) {
        return React.createElement(Option, {
          key: index,
          data: option
        });
      })), React.createElement("h3", null, "Number of options : ", this.props.options.length));
    }
  }]);

  return Options;
}(React.Component);

var AddOption =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(AddOption, _React$Component5);

  function AddOption() {
    var _getPrototypeOf2;

    var _this4;

    _classCallCheck(this, AddOption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddOption)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this4), "handleAddOption", function (e) {
      console.log(e.target);
      e.preventDefault();
      var val = e.target.elements.option.value;
      console.log(val);

      if (val) {
        _this4.props.addOption(val);
      }
    });

    return _this4;
  }

  _createClass(AddOption, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("form", {
        onSubmit: this.handleAddOption
      }, React.createElement("input", {
        id: "option"
      }), React.createElement("button", null, "add option")));
    }
  }]);

  return AddOption;
}(React.Component); //Option --> Option component here


var Option =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(Option, _React$Component6);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement("li", null, this.props.data);
    }
  }]);

  return Option;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

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
    _this.handleAddOptions = _this.handleAddOptions.bind(_assertThisInitialized(_this));
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    return _this;
  } //add to options array


  _createClass(IndecisionApp, [{
    key: "handleAddOptions",
    value: function handleAddOptions(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    } //delete all option array

  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    } //guess option and alert it to screen 

  }, {
    key: "handlePick",
    value: function handlePick() {
      var guess = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[guess]);
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
        options: this.state.options,
        handlePick: this.handlePick
      }), React.createElement(Options, {
        options: this.state.options,
        handleDeleteOptions: this.handleDeleteOptions,
        hasOptions: this.state.options.length > 0
      }), React.createElement(AddOption, {
        options: this.state.options,
        handleAddOption: this.handleAddOptions
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
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, _getPrototypeOf(Action).call(this, props));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.props.handlePick,
        disabled: !this.props.hasOptions
      }, "What should I do"));
    }
  }]);

  return Action;
}(React.Component);

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
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.props.handleDeleteOptions,
        disabled: !this.props.hasOptions
      }, "remove All"), React.createElement("div", null, this.props.options.length > 0 && 'Your Options', this.props.options.map(function (option, index) {
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

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props));

    _defineProperty(_assertThisInitialized(_this2), "handleAddOption", function (e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      console.log(option);

      if (option) {
        _this2.props.handleAddOption(option);
      }
    });

    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    return _this2;
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
      return React.createElement("div", null, this.props.data);
    }
  }]);

  return Option;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

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
      options: props.options,
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of computer'
    };
    _this.handleAddOptions = _this.handleAddOptions.bind(_assertThisInitialized(_this));
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_assertThisInitialized(_this));
    return _this;
  } //add to options array


  _createClass(IndecisionApp, [{
    key: "handleAddOptions",
    value: function handleAddOptions(option) {
      if (!option) {
        return 'enter valid value item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'this option already exist';
      } else {
        this.setState(function (prevState) {
          return {
            options: prevState.options.concat(option)
          };
        });
      }
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
    key: "handleDeleteOption",
    value: function handleDeleteOption(option) {
      var _this2 = this;

      // console.log('test', option);
      for (var i = 0, found = false; i < this.state.options.length && found == false; i++) {
        if (option == this.state.options[i]) {
          found = true;
          this.state.options.splice(i, 1);
        }
      }

      this.setState(function () {
        return {
          options: _this2.state.options
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Header, {
        title: this.state.title,
        subtitle: this.state.subtitle
      }), React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        options: this.state.options,
        handlePick: this.handlePick
      }), React.createElement(Options, {
        options: this.state.options,
        handleDeleteOptions: this.handleDeleteOptions,
        hasOptions: this.state.options.length > 0,
        handleDeleteOption: this.handleDeleteOption
      }), React.createElement(AddOption, {
        options: this.state.options,
        handleAddOption: this.handleAddOptions
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement("div", null, React.createElement("h1", null, props.title), props.subtitle && React.createElement("p", null, props.subtitle));
};

Header.defaultProps = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer'
};

var Action = function Action(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.handlePick,
    disabled: !props.hasOptions
  }, "What should I do"));
};

var Options = function Options(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.handleDeleteOptions,
    disabled: !props.hasOptions
  }, "remove All"), React.createElement("div", null, props.options.length > 0 && 'Your Options', props.options.map(function (option) {
    return React.createElement(Option, {
      key: option,
      optionText: option,
      handleDeleteOption: props.handleDeleteOption
    });
  })));
};

var AddOption =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    var _this3;

    _classCallCheck(this, AddOption);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props));

    _defineProperty(_assertThisInitialized(_this3), "handleAddOption", function (e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();

      var error = _this3.props.handleAddOption(option);

      _this3.setState(function () {
        return {
          error: error
        };
      });
    });

    _this3.handleAddOption = _this3.handleAddOption.bind(_assertThisInitialized(_this3));
    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(AddOption, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.state.error && React.createElement("p", null, this.state.error), React.createElement("form", {
        onSubmit: this.handleAddOption
      }, React.createElement("input", {
        id: "option"
      }), React.createElement("button", null, "add option")));
    }
  }]);

  return AddOption;
}(React.Component); //Option --> Option component here


var Option = function Option(props) {
  return React.createElement("div", null, props.optionText, React.createElement("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      props.handleDeleteOption(props.optionText);
    }
  }, "remove"));
};

IndecisionApp.defaultProps = {
  options: []
};
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

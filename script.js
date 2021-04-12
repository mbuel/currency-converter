var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var projectName = 'Currency Converter';
document.querySelector('title').textContent = projectName;

var coversionRatio = 0.89;

var toEuro = function toEuro(amount, rate) {
  return amount * rate;
};

var toUsd = function toUsd(amount, rate) {
  return amount * (1 / rate);
};

var that = this;

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      conversionRatio: props.conversionRatio,
      project: props.project

    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          conversionRatio = _state.conversionRatio,
          project = _state.project;

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'h2',
          null,
          project
        ),
        React.createElement(
          'h4',
          null,
          'USD 1 : ',
          conversionRatio
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var CurrencyInput = function (_React$Component2) {
  _inherits(CurrencyInput, _React$Component2);

  function CurrencyInput() {
    _classCallCheck(this, CurrencyInput);

    return _possibleConstructorReturn(this, (CurrencyInput.__proto__ || Object.getPrototypeOf(CurrencyInput)).apply(this, arguments));
  }

  _createClass(CurrencyInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          handleChange = _props.handleChange;

      return React.createElement('input', { value: value, onChange: handleChange, type: 'number' });
    }
  }]);

  return CurrencyInput;
}(React.Component);

var Converter = function (_React$Component3) {
  _inherits(Converter, _React$Component3);

  function Converter(props) {
    _classCallCheck(this, Converter);

    var _this3 = _possibleConstructorReturn(this, (Converter.__proto__ || Object.getPrototypeOf(Converter)).call(this, props));

    console.log(props);
    _this3.state = {
      rate: props.conversionRatio,
      usd: 1,
      euro: 1 * props.conversionRatio
    };

    _this3.handleUsdChange = _this3.handleUsdChange.bind(_this3);
    _this3.handleEuroChange = _this3.handleEuroChange.bind(_this3);
    return _this3;
  }
  // ...toUsd, toEuro


  _createClass(Converter, [{
    key: 'handleUsdChange',
    value: function handleUsdChange(event) {
      var input = parseFloat(event.target.value);
      console.log(input);
      if (Number.isNaN(input)) {
        this.setState({
          usd: '',
          euro: ''
        });
        return; // early return
      }
      var euro = this.toEuro(input, this.state.rate).toFixed(3);
      console.log(euro, input, this.state.rate);
      this.setState({
        usd: event.target.value,
        euro: euro
      });
      console.log(this.state);
    }
  }, {
    key: 'handleEuroChange',
    value: function handleEuroChange(event) {
      var input = parseFloat(event.target.value);
      if (Number.isNaN(input)) {
        this.setState({
          usd: '',
          euro: ''
        });
        return; // early return
      }
      var usd = this.toUsd(input, this.state.rate).toFixed(3);
      this.setState({
        euro: event.target.value,
        usd: usd
      });
    }
  }, {
    key: 'toUsd',
    value: function toUsd(amount, rate) {
      return amount * (1 / rate);
    }
  }, {
    key: 'toEuro',
    value: function toEuro(amount, rate) {
      return amount * rate;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          usd = _state2.usd,
          euro = _state2.euro;

      console.log(usd, euro);
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'div',
          { className: 'row text-center' },
          React.createElement(
            'div',
            { className: 'col-12' },
            React.createElement(
              'span',
              { className: 'mr-1' },
              'USD'
            ),
            React.createElement(CurrencyInput, { value: usd, handleChange: this.handleUsdChange }),
            React.createElement(
              'span',
              { className: 'mx-3' },
              '='
            ),
            React.createElement(CurrencyInput, { value: euro, handleChange: this.handleEuroChange }),
            React.createElement(
              'span',
              { className: 'ml-1' },
              'EURO'
            )
          )
        )
      );
    }
  }]);

  return Converter;
}(React.Component);

var SimpleOutput = function (_React$Component4) {
  _inherits(SimpleOutput, _React$Component4);

  function SimpleOutput() {
    _classCallCheck(this, SimpleOutput);

    return _possibleConstructorReturn(this, (SimpleOutput.__proto__ || Object.getPrototypeOf(SimpleOutput)).apply(this, arguments));
  }

  _createClass(SimpleOutput, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          value = _props2.value,
          calculation = _props2.calculation;

      return React.createElement(React.Fragment, null);
    }
  }]);

  return SimpleOutput;
}(React.Component);

var App = function (_React$Component5) {
  _inherits(App, _React$Component5);

  function App(props) {
    _classCallCheck(this, App);

    var _this5 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this5.state = {
      name: '',
      conversionRatio: props.conversionRatio
    };
    return _this5;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _state3 = this.state,
          name = _state3.name,
          conversionRatio = _state3.conversionRatio;

      return React.createElement(
        'div',
        { 'class': 'col-12 text-center' },
        React.createElement(Header, { project: projectName, conversionRatio: conversionRatio }),
        React.createElement(Converter, { conversionRatio: conversionRatio })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, { conversionRatio: 0.89 }), document.getElementById('root'));
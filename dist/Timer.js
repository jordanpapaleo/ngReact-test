'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timer = function (_React$Component) {
  _inherits(Timer, _React$Component);

  function Timer(props) {
    _classCallCheck(this, Timer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Timer).call(this));

    console.log(props);
    return _this;
  }

  _createClass(Timer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // setInterval(() => {
      //   this.setState({
      //     counter: this.state.conter + 1
      //   })
      // }, 1000)
    }
  }, {
    key: 'onclick',
    value: function onclick() {
      console.log('Clicked');
      this.props.clickCheck(true);
    }
  }, {
    key: 'render',
    value: function render() {
      // const {person} = this.props
      return React.createElement("div", null, "Hey Elapsed: ", this.props.person.fname, React.createElement("button", { onClick: this.onclick.bind(this) }, "Click Me"));
    }
  }]);

  return Timer;
}(React.Component);
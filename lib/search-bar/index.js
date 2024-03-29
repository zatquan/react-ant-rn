'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _style = require('../style');

var _getLocale = require('../_util/getLocale');

var _PropsType = require('./PropsType');

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var SearchBar = function (_React$Component) {
    (0, _inherits3['default'])(SearchBar, _React$Component);

    function SearchBar(props) {
        (0, _classCallCheck3['default'])(this, SearchBar);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.onSubmit = function (_) {
            if (_this.props.onSubmit) {
                _this.props.onSubmit(_this.state.value || '');
            }
        };
        _this.onChangeText = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        _this.onCancel = function () {
            if (_this.props.onCancel) {
                _this.props.onCancel(_this.state.value || '');
            }
        };
        _this.onFocus = function () {
            _this.setState({
                focus: true
            });
            if (_this.props.onFocus) {
                _this.props.onFocus();
            }
        };
        _this.onBlur = function () {
            _this.setState({
                focus: false
            });
            if (_this.props.onBlur) {
                _this.props.onBlur();
            }
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            value = '';
        }
        _this.state = {
            value: value,
            focus: false
        };
        return _this;
    }

    (0, _createClass3['default'])(SearchBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                showCancelButton = _a.showCancelButton,
                styles = _a.styles,
                propsValue = _a.value,
                cancelText = _a.cancelText,
                onChangeText = _a.onChangeText,
                onChange = _a.onChange,
                disabled = _a.disabled,
                style = _a.style,
                restProps = __rest(_a, ["showCancelButton", "styles", "value", "cancelText", "onChangeText", "onChange", "disabled", "style"]);
            // tslint:disable-next-line:variable-name
            var _locale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'SearchBar', function () {
                return require('./locale/zh_CN');
            });
            var _state = this.state,
                value = _state.value,
                focus = _state.focus;
            // tslint:disable-next-line:variable-name

            var _showCancelButton = showCancelButton || focus;
            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: styles, themeStyles: _index2['default'] },
                function (_styles) {
                    return _react2['default'].createElement(
                        _reactNative.View,
                        { style: _styles.wrapper },
                        _react2['default'].createElement(
                            _reactNative.View,
                            { style: _styles.inputWrapper },
                            _react2['default'].createElement(_reactNative.TextInput, (0, _extends3['default'])({ clearButtonMode: 'always', underlineColorAndroid: 'transparent', editable: !disabled }, restProps, { style: [_styles.input, style], ref: function ref(el) {
                                    return _this2.inputRef = el;
                                }, value: value, onChangeText: _this2.onChangeText, onSubmitEditing: _this2.onSubmit, onFocus: _this2.onFocus, onBlur: _this2.onBlur }))
                        ),
                        _react2['default'].createElement(_icon2['default'], { name: 'search', style: _styles.search }),
                        _showCancelButton && _react2['default'].createElement(
                            _reactNative.View,
                            { style: _styles.cancelTextContainer },
                            _react2['default'].createElement(
                                _reactNative.Text,
                                { style: _styles.cancelText, onPress: _this2.onCancel },
                                cancelText || _locale.cancelText
                            )
                        )
                    );
                }
            );
        }
    }]);
    return SearchBar;
}(_react2['default'].Component);

exports['default'] = SearchBar;

SearchBar.defaultProps = (0, _extends3['default'])({}, _PropsType.defaultProps);
SearchBar.contextTypes = {
    antLocale: _propTypes2['default'].object
};
module.exports = exports['default'];
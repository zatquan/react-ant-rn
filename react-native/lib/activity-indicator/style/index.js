'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (theme) {
    return _reactNative.StyleSheet.create({
        container: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'transparent',
            zIndex: theme.toast_zindex
        },
        innerContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent'
        },
        wrapper: {
            alignItems: 'center',
            justifyContent: 'center',
            width: 89,
            height: 89,
            borderRadius: theme.radius_md,
            backgroundColor: theme.toast_fill
        },
        tip: {
            color: theme.color_text_base,
            fontSize: theme.font_size_base,
            marginLeft: theme.h_spacing_md
        },
        toast: {
            color: theme.color_text_base_inverse,
            fontSize: theme.font_size_base,
            marginTop: theme.v_spacing_sm
        },
        spinner: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }
    });
};

module.exports = exports['default'];
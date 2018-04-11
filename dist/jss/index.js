"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(require("color"));
exports.getGradient = function (themeColors) {
    return "linear-gradient(-180deg, red 0vh, " + themeColors[1] + " 22vh, red 58vh, " + themeColors[3] + " 100vh)";
};
exports.getOpacityGradient = function (opacity) {
    return "linear-gradient(-180deg, rgba(0,0,0," + opacity + ") 0vh, rgba(0,0,0," + opacity + ") 100vh)";
};
exports.getHighlightGradient = function (direction, opacity) {
    if (direction === void 0) { direction = 'to right'; }
    if (opacity === void 0) { opacity = 0.15; }
    return "linear-gradient(" + direction + ", rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.03) 7%, rgba(255, 255, 255, " + opacity + ") 100%);";
};
exports.getGradientWithOverlay = function (themeColors, opacity) {
    var gradient = exports.getGradient(themeColors);
    var opacityGradient = exports.getOpacityGradient(opacity);
    return opacityGradient + ", " + gradient;
};
var fontMixin = function (size, weight) {
    if (weight === void 0) { weight = 'normal'; }
    return ({
        fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
        fontSize: size,
        fontWeight: weight,
    });
};
exports.theme = {
    colors: {
        gray: {
            light: '#F4F4F4',
            middle: '#949494',
            dark: '#292929',
        },
        error: '#FF8686',
    },
    titles: {
        h1: __assign({}, fontMixin(26), { lineHeight: '1.3em', marginBottom: 14 }),
        h2: __assign({}, fontMixin(20, 500), { lineHeight: '31px' }),
        h3: __assign({}, fontMixin(16), { letterSpacing: -0.4, lineHeight: '1.5em' }),
    },
    icons: {
        color: {
            base: '#FFF',
        },
    },
    mixins: {
        ellipsis: {
            display: '-webkit-box',
            '-webkit-line-clamp': 2,
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        flexbox: {
            containerCenter: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
        },
        size: function (size) { return ({
            width: size,
            height: size,
        }); },
        position: function (position, top, left, bottom, right) { return ({
            position: position,
            top: top,
            left: left,
            bottom: bottom,
            right: right,
        }); },
    },
    dock: {
        size: 50,
    },
    rightDock: {
        size: 50,
    },
    //== Base
    $gutter: '10px',
    $borderRadius: '4px',
    $imPath: '../../static/',
    //== Colors
    $red: '#FF5F5C',
    //== Z-indexes
    $zindexUltime: 1000,
    $zIndexSupra: 100,
    $zIndexUltra: 10,
    $zIndexMega: 9,
    $zIndexHuge: 4,
    $zIndexLarge: 3,
    $zIndexMedium: 2,
    $zIndexSmall: 1,
    $zIndexNull: 0,
    //== Global variables
    $bodyBkg: '#fff',
    $osbarHeight: '30px',
    $appSize: '50px',
    avatarMixin: function (value, radius) {
        if (radius === void 0) { radius = value; }
        return ({
            height: value,
            width: value,
            borderRadius: radius,
            backgroundClip: 'padding-box',
        });
    },
    covererMixin: function (bottom, left, right, top) {
        if (bottom === void 0) { bottom = 0; }
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        return ({
            bottom: bottom,
            left: left,
            position: 'absolute',
            right: right,
            top: top,
        });
    },
    fontMixin: fontMixin,
    elipsisMixin: function (lineClamp) {
        if (lineClamp === void 0) { lineClamp = 2; }
        return ({
            display: '-webkit-box',
            '-webkit-line-clamp': lineClamp,
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        });
    },
    mixinDarkenColor: function (color, ratio) {
        if (ratio === void 0) { ratio = 0.3; }
        return color_1.default(color).mix(color_1.default('black'), ratio).rgb().string();
    },
};
exports.roundedBackground = function (color) {
    if (color === void 0) { color = '#eee'; }
    return {
        borderRadius: '999px',
        backgroundColor: color,
    };
};

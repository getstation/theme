"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __importDefault(require("color"));
exports.getGradientCSSBackground = (themeColors) => {
    return `linear-gradient(-180deg, tomato 0vh, ${themeColors[1]} 22vh, olive 58vh, ${themeColors[3]} 100vh)`;
};
exports.getOpacityGradient = (opacity) => {
    return `linear-gradient(-180deg, rgba(0,0,0,${opacity}) 0vh, rgba(0,0,0,${opacity}) 100vh)`;
};
exports.getHighlightGradient = (direction = 'to right', opacity = 0.15) => {
    return `linear-gradient(${direction}, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.03) 7%, rgba(255, 255, 255, ${opacity}) 100%);`;
};
exports.getGradientWithOverlay = (themeColors, opacity) => {
    const gradient = exports.getGradientCSSBackground(themeColors);
    const opacityGradient = exports.getOpacityGradient(opacity);
    return `${opacityGradient}, ${gradient}`;
};
const fontMixin = (size, weight = 'normal') => ({
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol"`,
    fontSize: size,
    fontWeight: weight,
});
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
        h1: Object.assign({}, fontMixin(26), { lineHeight: '1.3em', marginBottom: 14 }),
        h2: Object.assign({}, fontMixin(20, 500), { lineHeight: '31px' }),
        h3: Object.assign({}, fontMixin(16), { letterSpacing: -0.4, lineHeight: '1.5em' }),
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
        size: (size) => ({
            width: size,
            height: size,
        }),
        position: (position, top, left, bottom, right) => ({
            position,
            top,
            left,
            bottom,
            right,
        }),
    },
    dock: {
        size: 50,
    },
    rightDock: {
        size: 50,
    },
    $gutter: '10px',
    $borderRadius: '4px',
    $imPath: '../../static/',
    $red: '#FF5F5C',
    $zindexUltime: 1000,
    $zIndexSupra: 100,
    $zIndexUltra: 10,
    $zIndexMega: 9,
    $zIndexHuge: 4,
    $zIndexLarge: 3,
    $zIndexMedium: 2,
    $zIndexSmall: 1,
    $zIndexNull: 0,
    $bodyBkg: '#fff',
    $osbarHeight: '30px',
    $appSize: '50px',
    avatarMixin: (value, radius = value) => ({
        height: value,
        width: value,
        borderRadius: radius,
        backgroundClip: 'padding-box',
    }),
    covererMixin: (bottom = 0, left = 0, right = 0, top = 0) => ({
        bottom: bottom,
        left: left,
        position: 'absolute',
        right: right,
        top: top,
    }),
    fontMixin,
    elipsisMixin: (lineClamp = 2) => ({
        display: '-webkit-box',
        '-webkit-line-clamp': lineClamp,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }),
    mixinDarkenColor: (color, ratio = 0.3) => color_1.default(color).mix(color_1.default('black'), ratio).rgb().string(),
};
exports.roundedBackground = (color = '#eee') => {
    return {
        borderRadius: '999px',
        backgroundColor: color,
    };
};
//# sourceMappingURL=index.js.map
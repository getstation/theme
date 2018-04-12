import Color from 'color';

export const getGradientCSSBackground = (themeColors: string[]) => {
  return `linear-gradient(-180deg, ${themeColors[0]} 0vh, ${themeColors[1]} 22vh, ${themeColors[2]} 58vh, ${themeColors[3]} 100vh)`;
};

export const getOpacityGradient = (opacity: number) => {
  return `linear-gradient(-180deg, rgba(0,0,0,${opacity}) 0vh, rgba(0,0,0,${opacity}) 100vh)`;
};

export const getHighlightGradient = (direction: string = 'to right', opacity: number = 0.15) => {
  return `linear-gradient(${direction}, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.03) 7%, rgba(255, 255, 255, ${opacity}) 100%);`;
};

export const getGradientWithOverlay = (themeColors: string[], opacity: number) => {
  const gradient = getGradientCSSBackground(themeColors);
  const opacityGradient = getOpacityGradient(opacity);

  return `${opacityGradient}, ${gradient}`;
};

const fontMixin = (size: number, weight: string | number = 'normal') => ({
  fontFamily:
    `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol"`,
  fontSize: size,
  fontWeight: weight,
});

export const theme = {
  colors: {
    gray: {
      light: '#F4F4F4',
      middle: '#949494',
      dark: '#292929',
    },
    error: '#FF8686',
  },
  titles: {
    h1: {
      ...fontMixin(26),
      lineHeight: '1.3em',
      marginBottom: 14,
    },
    h2: {
      ...fontMixin(20, 500),
      lineHeight: '31px',
    },
    h3:{
      ...fontMixin(16),
      letterSpacing: -0.4,
      lineHeight: '1.5em',
    },
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
    size: (size: number | string) => ({
      width: size,
      height: size,
    }),
    position: (position: string, top?: number | string, left?: number | string, bottom?: number | string, right?: number | string) => ({
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

  avatarMixin: (value: string, radius = value) => ({
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

  mixinDarkenColor: (color: string, ratio = 0.3) =>
    Color(color).mix(Color('black'), ratio).rgb().string(),
};

export const roundedBackground = (color: string = '#eee') => {
  return {
    borderRadius: '999px',
    backgroundColor: color,
  };
};

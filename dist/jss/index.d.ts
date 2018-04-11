export declare const getGradient: (themeColors: string[]) => string;
export declare const getOpacityGradient: (opacity: number) => string;
export declare const getHighlightGradient: (direction?: string, opacity?: number) => string;
export declare const getGradientWithOverlay: (themeColors: string[], opacity: number) => string;
export declare const theme: {
    colors: {
        gray: {
            light: string;
            middle: string;
            dark: string;
        };
        error: string;
    };
    titles: {
        h1: {
            lineHeight: string;
            marginBottom: number;
            fontFamily: string;
            fontSize: number;
            fontWeight: string | number;
        };
        h2: {
            lineHeight: string;
            fontFamily: string;
            fontSize: number;
            fontWeight: string | number;
        };
        h3: {
            letterSpacing: number;
            lineHeight: string;
            fontFamily: string;
            fontSize: number;
            fontWeight: string | number;
        };
    };
    icons: {
        color: {
            base: string;
        };
    };
    mixins: {
        ellipsis: {
            display: string;
            '-webkit-line-clamp': number;
            '-webkit-box-orient': string;
            overflow: string;
            textOverflow: string;
        };
        flexbox: {
            containerCenter: {
                display: string;
                justifyContent: string;
                alignItems: string;
            };
        };
        size: (size: string | number) => {
            width: string | number;
            height: string | number;
        };
        position: (position: string, top?: string | number | undefined, left?: string | number | undefined, bottom?: string | number | undefined, right?: string | number | undefined) => {
            position: string;
            top: string | number | undefined;
            left: string | number | undefined;
            bottom: string | number | undefined;
            right: string | number | undefined;
        };
    };
    dock: {
        size: number;
    };
    rightDock: {
        size: number;
    };
    $gutter: string;
    $borderRadius: string;
    $imPath: string;
    $red: string;
    $zindexUltime: number;
    $zIndexSupra: number;
    $zIndexUltra: number;
    $zIndexMega: number;
    $zIndexHuge: number;
    $zIndexLarge: number;
    $zIndexMedium: number;
    $zIndexSmall: number;
    $zIndexNull: number;
    $bodyBkg: string;
    $osbarHeight: string;
    $appSize: string;
    avatarMixin: (value: string, radius?: string) => {
        height: string;
        width: string;
        borderRadius: string;
        backgroundClip: string;
    };
    covererMixin: (bottom?: number, left?: number, right?: number, top?: number) => {
        bottom: number;
        left: number;
        position: string;
        right: number;
        top: number;
    };
    fontMixin: (size: number, weight?: string | number) => {
        fontFamily: string;
        fontSize: number;
        fontWeight: string | number;
    };
    elipsisMixin: (lineClamp?: number) => {
        display: string;
        '-webkit-line-clamp': number;
        '-webkit-box-orient': string;
        overflow: string;
        textOverflow: string;
    };
    mixinDarkenColor: (color: string, ratio?: number) => string;
};
export declare const roundedBackground: (color?: string) => {
    borderRadius: string;
    backgroundColor: string;
};

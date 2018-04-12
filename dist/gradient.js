"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_react_context_1 = __importDefault(require("create-react-context"));
const react_1 = __importDefault(require("react"));
const jss_1 = require("./jss");
const defaultGradientColors = ['#85A9C4', '#C5C7C6', '#DFD2C0', '#F1B87C'];
const GradientColorsContext = create_react_context_1.default(defaultGradientColors);
class GradientProvider extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(GradientColorsContext.Provider, { value: this.props.themeColors }, this.props.children));
    }
}
exports.GradientProvider = GradientProvider;
var GradientType;
(function (GradientType) {
    GradientType[GradientType["normal"] = 0] = "normal";
    GradientType[GradientType["withOverlay"] = 1] = "withOverlay";
    GradientType[GradientType["withDarkOverlay"] = 2] = "withDarkOverlay";
})(GradientType = exports.GradientType || (exports.GradientType = {}));
function computeGradient(type, themeGradientColors) {
    switch (type) {
        case GradientType.normal:
            return jss_1.getGradientCSSBackground(themeGradientColors);
        case GradientType.withOverlay:
            return jss_1.getGradientWithOverlay(themeGradientColors, .3);
        case GradientType.withDarkOverlay:
            return jss_1.getGradientWithOverlay(themeGradientColors, .5);
    }
}
exports.withGradient = (gradientType) => (WrappedComponent) => {
    class WithGradient extends react_1.default.Component {
        render() {
            return (react_1.default.createElement(GradientColorsContext.Consumer, null, (themeGradientColors) => this.renderChildren(themeGradientColors)));
        }
        renderChildren(themeGradientColors) {
            const themeGradient = computeGradient(gradientType || GradientType.normal, themeGradientColors);
            return react_1.default.createElement(WrappedComponent, Object.assign({ themeGradient: themeGradient }, this.props));
        }
    }
    WithGradient.displayName = `WithGradient(${WrappedComponent.displayName || WrappedComponent.name})`;
    return WithGradient;
};
//# sourceMappingURL=gradient.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const gradient_1 = require("./gradient");
const selectors_1 = require("./selectors");
exports.ReduxBasedGradientProvider = react_redux_1.connect((state) => ({
    themeColors: selectors_1.getThemeColors(state),
}))(gradient_1.GradientProvider);
//# sourceMappingURL=ReduxBasedGradientProvider.js.map
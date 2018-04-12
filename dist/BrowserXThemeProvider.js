"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_jss_1 = require("react-jss");
const jss_nested_1 = __importDefault(require("jss-nested"));
const jss_1 = require("./jss");
react_jss_1.jss.use(jss_nested_1.default());
class BrowserXThemeProvider extends React.Component {
    render() {
        return (React.createElement(react_jss_1.ThemeProvider, { theme: jss_1.theme }, this.props.children));
    }
}
exports.BrowserXThemeProvider = BrowserXThemeProvider;
//# sourceMappingURL=BrowserXThemeProvider.js.map
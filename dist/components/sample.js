"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
class Sample extends React.PureComponent {
    render() {
        return (React.createElement("div", null,
            "Hello, ",
            this.props.name,
            " from Sample Component!"));
    }
}
exports.Sample = Sample;
//# sourceMappingURL=Sample.js.map
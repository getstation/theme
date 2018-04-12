"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __importDefault(require("color"));
exports.getGradient = (color1, color2, ratio) => {
    const start = color_1.default(color1);
    const end = color_1.default(color2);
    if (!ratio || ratio <= 0)
        return start.rgb().string();
    if (ratio >= 1)
        return end.rgb().string();
    return start.mix(end, ratio).rgb().string();
};
exports.getGradients = (colors1, colors2, duration, frameInterval) => {
    if (colors1.length !== colors2.length) {
        throw new Error(`colors1 and colors2 should have the same length (${colors1.toString()}, ${colors2.toString()})`);
    }
    const numberOfSteps = Math.floor(duration / frameInterval);
    return Array(numberOfSteps).fill(undefined).map((_, index) => {
        const ratio = index / numberOfSteps;
        return colors1.map((color1, indexbis) => {
            const color2 = colors2[indexbis];
            return exports.getGradient(color1, color2, ratio);
        });
    });
};
//# sourceMappingURL=gradient.js.map
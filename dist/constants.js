"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var linked_map_1 = __importDefault(require("linked-map"));
var ms_1 = __importDefault(require("ms"));
var types_1 = require("./types");
// In ms
exports.QUICK_DURATION = ms_1.default('2sec');
exports.QUICK_INTERVAL = 42;
// TODO: fix this
// export const SLOW_DURATION = process.env.STATION_QUICK_TRANSITIONS === '1' ? ms('30sec') : ms('10min');
// export const SLOW_INTERVAL = process.env.STATION_QUICK_TRANSITIONS === '1' ? 167 : ms('10sec');
exports.SLOW_DURATION = ms_1.default('10min');
exports.SLOW_INTERVAL = ms_1.default('10sec');
exports.DEFAULT_SUNCALC = { dawn: 6, sunrise: 7, midday: 12, afternoon: 14, sunset: 20, night: 22 };
var Theme;
(function (Theme) {
    Theme["dawn"] = "dawn";
    Theme["sunrise"] = "sunrise";
    Theme["morning"] = "morning";
    Theme["midday"] = "midday";
    Theme["afternoon"] = "afternoon";
    Theme["sunset"] = "sunset";
    Theme["night"] = "night";
})(Theme = exports.Theme || (exports.Theme = {}));
exports.COLORS = new linked_map_1.default();
exports.COLORS.push('dawn', new types_1.ThemeColorScheme(['#1D092E', '#38154C', '#6C3272', '#E898A0'], exports.SLOW_DURATION, exports.SLOW_INTERVAL));
exports.COLORS.push('sunrise', new types_1.ThemeColorScheme(['#0F3B6E', '#164D7F', '#B76B4F', '#EF984F'], exports.SLOW_DURATION, exports.SLOW_INTERVAL));
exports.COLORS.push('morning', new types_1.ThemeColorScheme(['#85A9C4', '#C5C7C6', '#DFD2C0', '#F1B87C'], exports.SLOW_DURATION, exports.SLOW_INTERVAL));
exports.COLORS.push('midday', new types_1.ThemeColorScheme(['#4372AA', '#81AADE', '#A3C4EC', '#BAD7F0'], exports.QUICK_DURATION, exports.QUICK_INTERVAL));
exports.COLORS.push('afternoon', new types_1.ThemeColorScheme(['#276AAE', '#428CCA', '#68A9DF', '#8ACBF2'], exports.QUICK_DURATION, exports.QUICK_INTERVAL));
exports.COLORS.push('sunset', new types_1.ThemeColorScheme(['#0F3B6E', '#164D7F', '#B76B4F', '#EF984F'], exports.QUICK_DURATION, exports.QUICK_INTERVAL));
exports.COLORS.push('night', new types_1.ThemeColorScheme(['#213655', '#385679', '#4A7496', '#7272A0'], exports.QUICK_DURATION, exports.QUICK_INTERVAL));

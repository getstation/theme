"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = require("reselect");
exports.getThemeColors = reselect_1.createSelector((state) => state.getIn(['theme', 'colors']), colors => colors.toArray());
//# sourceMappingURL=selectors.js.map
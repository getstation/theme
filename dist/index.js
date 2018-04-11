"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./constants"));
__export(require("./types"));
__export(require("./jss"));
/**
* @Method: Returns greetings for a given name
* @Param {string}
* @Return {string}
*/
function greetings(name) {
    return "Hello " + name + "!";
}
exports.greetings = greetings;

// @require fis-mod

require("zone.js");
require("reflect-metadata");
// 不能require("@angular/core")
// 只能require("node_modules/@angular/core")
window.testCore = require("node_modules/@angular/core"); // require成功
window.testBrowser = require("node_modules/@angular/platform-browser"); // require失败




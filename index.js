'use strict';

var postcss = require('postcss');
var Px2rpx = require('px2rpx');

module.exports = postcss.plugin('postcss-px2rpx', function (options) {
  return function (css, result) {
    var oldCssText = css.toString();
    var px2rpxIns = new Px2rpx(options);
    var newCssText = px2rpxIns.generaterpx(oldCssText);
    var newCssObj = postcss.parse(newCssText);
    result.root = newCssObj;
  };
});
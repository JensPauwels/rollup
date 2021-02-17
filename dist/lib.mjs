(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.library = {}));
}(this, (function (exports) { 'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var Test = function Test(data) {
    classCallCheck(this, Test);

    this.data = data;
  };

  var Another = function Another(data) {
    classCallCheck(this, Another);

    this.data = data;
  };

  var Demo = function Demo() {
    classCallCheck(this, Demo);

    this.name = 'hello';
  };

  exports.Another = Another;
  exports.Demo = Demo;
  exports.Test = Test;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

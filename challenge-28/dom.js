(function (win,document) {
  'use strict';

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments)
  }

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments)
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments)
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments)
  }

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments)
  }

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments)
  }

  DOM.prototype.isArray = function isArray(paran) {
    return Object.prototype.toString.call(paran) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject(paran) {
    return Object.prototype.toString.call(paran) === '[object Object]';
  }

  DOM.prototype.isFunction = function isFunction(paran) {
    return Object.prototype.toString.call(paran) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber(paran) {
    return Object.prototype.toString.call(paran) === '[object Number]';
  }

  DOM.prototype.isString = function isString(paran) {
    return Object.prototype.toString.call(paran) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean(paran) {
    return Object.prototype.toString.call(paran) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull(paran) {
    return Object.prototype.toString.call(paran) === '[object Null]' ||
      Object.prototype.toString.call(paran) === '[object Undefined]';
  }

  win.DOM = DOM;
})(window,document);

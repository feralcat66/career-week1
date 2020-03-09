const isNumber = val => typeof val === 'number';
const isString = val => typeof val === 'string';
const isBoolean = val => typeof val === 'boolean';
const isObject = val => typeof val === 'object';
const isFunction = val => typeof val === 'function';


module.exports = {
  isNumber,
  isString,
  isBoolean,
  isObject,
  isFunction
};

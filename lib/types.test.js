const {
  isNumber,
  isString,
  isBoolean,
  isObject,
  isFunction
} = require('../lib/types.js');

describe('validator module', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });
  });

  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isString(3)).toBeFalsy();
      expect(isString('hi')).toBeTruthy();
      expect(isString([])).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString(() => {})).toBeFalsy();
      expect(isString(true)).toBeFalsy();
    });
  });

  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isBoolean(3)).toBeFalsy();
      expect(isBoolean('hi')).toBeFalsy();
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean(() => {})).toBeFalsy();
      expect(isBoolean(true)).toBeTruthy();
    });
  });

  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isObject(3)).toBeFalsy();
      expect(isObject('hi')).toBeFalsy();
      expect(isObject([])).toBeTruthy();
      expect(isObject({})).toBeTruthy();
      expect(isObject(() => {})).toBeFalsy();
      expect(isObject(true)).toBeFalsy();
    });
  });

  // describe('casters', () => {
  //   it('can cast values to a number', () => {
  //     expect(castToNumber(3)).toEqual(3);
  //     expect(castToNumber('3')).toEqual(3);
  //     expect(castToNumber(true)).toEqual(1);
  //     expect(castToNumber(false)).toEqual(0);
  //   });

  //   it('throws if value is not castable to number', () => {
  //     expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
  //     expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
  //   });
  // });

  // it('can get the right caster', () => {
  //   expect(getCaster(Number)).toEqual(castToNumber);
  //   expect(getCaster(Promise)).toBeNull();
  // });
});
    
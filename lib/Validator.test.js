const {
  Validator
} = require('./Validator.js');

describe('Validator', () => {
  const nameValidator = new Validator('name', {
    type: String,
    required: true
  });
  
  // before any test run
  beforeAll(() => {
  
  });

  describe('Validator', () => {
    it('has a field and configuration', () => {
      const nameValidator = new Validator('name', {
        type: String,
        required: true
      });

      expect(nameValidator.field).toEqual('name');
      expect(nameValidator.type).toEqual(String);
      expect(nameValidator.required).toEqual(true);

    });
  });

  it('throws an error when validating an object with the wrong type and not castable', () => {
    const fazeem = {
      name: {},
      age: 5,
      height: 3,
      eyeColor: 'brown'
    };

    expect(() => nameValidator.validate(fazeem)).toThrowError('Cannot cast >>[object Object]<< to String');
  });
});

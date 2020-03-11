const {
  newFunction
} = require('./Schema.js');

describe('Schema', () => {
    const nameValidator = new ('name', {
      type: String,
      required: true
    });
    

const blobbly = {
    name: 'blobbly',
    age: 30,
    height: '6 ft',
    eyeColor: 'brown'
  };


  
describe('Schema', () => {
  it('tests for proper configuration of an object', () => {
   
  });
  
});

it('throws if format is unacceptable', () => {
  expect(() => nameValidator(1234)).toThrowErrorMatchingSnapshot();
});
  
expect(func).toEqual('name');
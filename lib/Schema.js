const {
  Validator
} = require('./Validator.js');

const schema = {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  height: {
    type: String
  },
  eyeColor: {
    type: String
  }
};

const jim = {
  name: 'jim',
  age: '69',
  eyeColor: 'green'
};
const blobbly = {
  name: 'blobbly',
  age: 30,
  height: '6 ft',
  eyeColor: 'brown'
};
const snurf = {
  name: 'snurf',
  age: '6',
  height: '6 in',
  eyeColor: 'blue'
};


// const validators = Object.entries(schema)
//   .map(([field, configuration]) => new Validator(field, configuration));


// const validated = {};
// validators.forEach(validator => {
//   validated[validator.field] = validator.validate(jim);
// });
// console.log(validated);


const validated = newFunction();
function newFunction(schema, obj) {
  const validators = Object.entries(schema)
    .map(([field, configuration]) => new Validator(field, configuration));
  const validated = {};
  validators.forEach(validator => {
    validated[validator.field] = validator.validate(obj);
  });
  return validated;
}

module.exports = {
  newFunction
};


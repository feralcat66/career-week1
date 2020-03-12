const {
  Validator
} = require('./Validator.js');

module.exports = class Schema {
  constructor(schema) {
    this.schema = schema;
    this.validators = Object.entries(schema)
      .map(([field, options]) => new Validator(field, options));
  }

  validate(obj) {
    const validated = {};
    const errors = [];
    this.validators
      .forEach(validator => {
        try {
          validated[validator.field] = validator.validate(obj);
        } catch(e) {
          errors.push(e);
        }
      });

    if(errors.length > 0) {
      throw new Error(`invalid schema >> ${errors}`);
    }

    return validated;
  }

};





// // const validators = Object.entries(schema)
// //   .map(([field, configuration]) => new Validator(field, configuration));


// // const validated = {};
// // validators.forEach(validator => {
// //   validated[validator.field] = validator.validate(jim);
// // });
// // console.log(validated);


// const validated = newFunction();
// function newFunction(schema, obj) {
//   const validators = Object.entries(schema)
//     .map(([field, configuration]) => new Validator(field, configuration));
//   const validated = {};
//   validators.forEach(validator => {
//     validated[validator.field] = validator.validate(obj);
//   });
//   return validated;
// }

// module.exports = {
//   newFunction
// };


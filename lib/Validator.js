const { getCaster } = require('./types');
//export the validator
class Validator {
  //these things are required
  constructor(field, { type, required }) {
    this.field = field;
    this.type = type;
    this.required = required;
    // will need the caster we created
    this.caster = getCaster(type);
  }
  //this are also required and will error if they wont work
  validate(obj) {
    const val = obj[this.field];
    if(this.required && !val) throw new Error(`${this.field} is required`);
    if(!this.required && !val) return null;
    return this.caster(val);
  }
}





const jim = {
  name: 'jim',
  age: '69',
  eyeColor: 'green'
};

const nameValidator = new Validator('name', {
  type: String,
  required: true
});
    
const ageValidator = new Validator('age', {
  type: Number,
  required: true
});
    
const heightValidator = new Validator('color', {
  type: String,
});
  
const eyeValidator = new Validator('eyeColor', {
  type: String,
  required: true
});
    


module.exports = {
  nameValidator,
  ageValidator,
  heightValidator,
  eyeValidator,
  Validator
};

// console.log(nameValidator.validate(jim));
// console.log(ageValidator.validate(jim));
// console.log(heightValidator.validate(jim));
// console.log(eyeValidator.validate(jim));


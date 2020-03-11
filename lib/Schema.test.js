const Schema = require('../lib/Schema');

describe('Schema', () => {
  it('validates a good schema', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      height: {
        type: String,
        required: true
      },
      eyeColor: {
        type: String,
        required: true
      }
    });

    const blobbly = {
      name: 'blobbly',
      age: 30,
      height: '6 ft',
      eyeColor: 'brown'
    };

    expect(schema.validate(blobbly)).toEqual({
      name: 'blobbly',
      age: 30,
      height: '6 ft',
      eyeColor: 'brown'
    });
  });

  it('throws on a bad schema', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      height: {
        type: String,
        required: true
      },
      eyeColor: {
        type: String,
        required: true
      }
    });

    const derp = {
      age: 'hi',
      weight: '20 lbs'
    };

    expect(() => schema.validate(derp)).toThrowErrorMatchingSnapshot();
  });
});

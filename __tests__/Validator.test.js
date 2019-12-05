const Validator = require('../lib/Validator');

describe('Validator', () => {
    let validator;

    describe('required fields', () => {
        beforeAll(() => {
            validator = new Validator('age', {
                type: Number,
                required: true
            });
        });

        it.skip('returns the field', () => {
            const dog = {
                name: 'spot',
                age: 5,
                weight: '20 lbs'
            };

            expect(validator.validate(dog)).toEqual(5);
        });

        it.skip('returns the field cast to type', () => {
            const dog = {
                name: 'spot',
                age: '5',
                weight: '20 lbs'
            };

            expect(validator.validate(dog)).toEqual(5);
        });

        it.skip('returns the field', () => {
            const dog = {
                name: 'spot',
                weight: '20 lbs'
            };

            expect(() => validator.validate(dog)).toThrowErrorMatchingSnapshot();
        });
    });

    describe('optional fields', () => {
        beforeAll(() => {
            validator = new Validator('age', {
                type: Number
            });
        });

        it.skip('returns the field', () => {
            const dog = {
                name: 'spot',
                age: 5,
                weight: '20 lbs'
            };

            expect(validator.validate(dog)).toEqual(5);
        });

        it.skip('returns the field cast to type', () => {
            const dog = {
                name: 'spot',
                age: '5',
                weight: '20 lbs'
            };

            expect(validator.validate(dog)).toEqual(5);
        });

        it.skip('returns the field', () => {
            const dog = {
                name: 'spot',
                weight: '20 lbs'
            };

            expect(validator.validate(dog)).toBeNull();
        });
    });
});

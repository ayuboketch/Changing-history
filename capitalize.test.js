const { capitalize } = require('./capitalize.js');

describe('capitalize function', () => {
    test('capitalizes the first letter of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('returns an empty string if given an empty string', () => {
        expect(capitalize('')).toBe('');
    });
});

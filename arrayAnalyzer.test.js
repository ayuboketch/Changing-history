const { analyzeArray } = require('./analyzeArray.js');

// Group your tests using describe
describe('analyzeArray', () => {
    // Test case 1: Checking with a standard array
    test('should correctly analyze the array [1, 2, 3, 4, 5]', () => {
        const result = analyzeArray([1, 2, 3, 4, 5]);

        expect(result).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        });
    });

    // Test case 2: Edge case with an array containing one element
    test('should analyze an array with one element [10]', () => {
        const result = analyzeArray([10]);

        expect(result).toEqual({
            average: 10,
            min: 10,
            max: 10,
            length: 1
        });
    });

    // Test case 3: Check with negative numbers
    test('should analyze an array with negative numbers [-5, -10, -3]', () => {
        const result = analyzeArray([-5, -10, -3]);

        expect(result).toEqual({
            average: -6,
            min: -10,
            max: -3,
            length: 3
        });
    });

    // Test case 4: Check with an empty array (edge case)
    test('should handle empty arrays gracefully', () => {
        expect(() => analyzeArray([])).toThrow();
    });
});

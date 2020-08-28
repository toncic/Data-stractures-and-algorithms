import { findLargestAlphabeticCharacter } from './solution'
describe('LargestAlphabeticLetterTest', () => {
    test('test1', () => {
        expect(findLargestAlphabeticCharacter('admeDCAB')).toBe('D');
    });

    test('test2', () => {
        expect(findLargestAlphabeticCharacter('dAeB')).toBe(-1);
    });

    test('test3', () => {
        expect(findLargestAlphabeticCharacter('Queries')).toBe(-1);
    })
});
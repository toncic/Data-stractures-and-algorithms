/**
 * Find the largest Alphabetic character whose both
 * uppercase and lowercase are present in the string.
 * 
 * Input: str = “admeDCAB”
 * Output: D
 * 
 * Input: str = “dAeB”
*  Output: -1
 * 
 * Time complexity: O(n) where n is length of string.
 * Space complexity: O(52)
 */
export function findLargestAlphabeticCharacter(S: string) {
    let upperCase = new Array<Boolean>(26).fill(false);
    let lowerCase = new Array<Boolean>(26).fill(false);
    const characters: string[] = S.split('');

    for (const char of characters) {
        const index = getNumericPresentationOfChar(char);
        if (char == char.toLowerCase()) {
            lowerCase[index] = true;
        }

        if (char == char.toUpperCase()) {
            upperCase[index] = true;
        }
    }

    for (let i: number = 25; i > 0; i--) {
        if (upperCase[i] && lowerCase[i]) {
            return (i + 9).toString(36).toUpperCase()
        }

    }

    return -1;
}

function getNumericPresentationOfChar(char: string) {
    return parseInt(char, 36) - 9;
}
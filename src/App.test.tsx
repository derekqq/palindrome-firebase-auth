import { checkIsPalindrome } from 'helpers';

describe('test "checkIsPalindrome()" method', () => {
  const palindromeSentence = 'Do geese see God';
  const nonPalindromeSentence = 'Was it a row or a cat I saw';

  it(`should return true for "${palindromeSentence}" sentence`, () => {
    expect(checkIsPalindrome(palindromeSentence)).toBe(true);
  });

  it(`should return false for "${nonPalindromeSentence}" sentence`, () => {
    expect(checkIsPalindrome(nonPalindromeSentence)).toBe(false);
  });
});

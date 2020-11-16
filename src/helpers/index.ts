const checkIsPalindrome = (word: string) => {
  const trimmedSentence: string = word.split(' ').join('').toLowerCase();
  return trimmedSentence === trimmedSentence.split('').reverse().join('');
};

export { checkIsPalindrome };

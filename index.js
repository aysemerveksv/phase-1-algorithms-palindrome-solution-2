function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    console.log(`Comparing ${word[startIndex]} and ${word[endIndex]}`);
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("racecar")); // Expecting: true
console.log(isPalindrome("hello")); // Expecting: false
console.log(isPalindrome("a")); // Expecting: true
console.log(isPalindrome("robot")); // Expecting: false
console.log(isPalindrome("ab")); 
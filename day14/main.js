function countVowelConsonant(str) {
    // return value
    // spliting str on each character
    // reduce method (which combines all the elements together)
    // this reduce method accumulator argument is the sum of all the elements
    // this reduce method currentValue is each character in the string
    return str.split('').reduce((sum, char) => {
        //if statement defining what the vowels are
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            // return a value of + 1 for each vowel
            return sum + 1;
        } else {
            // return + 2 for each consonant; in this case we know that everything that isn't a vowel is a consonant
            return sum + 2;
        }
        // initialize the reduce method on the 0 index of the string
    }, 0);
}
  
// use the methods .split() and .reduce()
  
  /**
  * Test Suite 
  */
  describe('countVowelConsonant()', () => {
      it('returns total of vowels(1) and consonants(2) to be added', () => {
          // arrange
          const value = 'abcde';
          
          // act
          const result = countVowelConsonant(value);
  
          // log
          console.log("result: ", result);
          
          // assert
          expect(result).toBe(8);
      });
  });
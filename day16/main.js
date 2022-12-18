function insertDashes(arr) {
    // return
    // the array split by each word written as arr.split(" ")
    // for each word loop as .map(word)
    // split each word by character, written as word.split("")
    // then in the for loop join each character in the word with a hyphen between each one, written as .join("-")
    // finally, after the .map loop, join all the words in the array together, separated by a space, written as .join(" ")
    return arr.split(" ").map(word => word.split("").join("-")).join(" ");
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});
/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

// const inputPanic = document.getElementById("input-panic");
// const btnPanic = document.getElementById("btn-panic");
// const textPanic = document.getElementById("text-panic");

// btnPanic.addEventListener("click", () => {
//     const input = inputPanic.value;
//     const output = panic(input);
//     textPanic.innerText = output;
//     inputPanic.value = "";
// });

const panic = (str) => {
    if(str.includes(" ")){ 
        return str.toUpperCase().split(" ").join(" 😱 ") + " 😱";
    }
    return str.toUpperCase() + "!";
}


// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))
console.log(panic("Hello"))

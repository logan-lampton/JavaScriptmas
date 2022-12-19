
/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
    //need to make an empty array to add our final values to
    let flattenedArr = [];
    // for loop to grab all of the characters in the original array
    for(let i = 0; i < arr.length; i++){
        // declare a variable for each element, setting it to the index of i in the array
        let element = arr[i]
        // if statement using the built in Array class and .isArray method to check if the element is in the original array: (Array.isArray(element))
        if(Array.isArray(element)){
        // if in the array, use the spread operator on the element, adding each element together, then pushing to the new array with the .push method
        flattenedArr.push(...element)
        } else {
            // else use the push method to push the single element to the array
            flattenedArr.push(element)
        }
    }  
    // return the final array after the for loop runs
    return flattenedArr
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));

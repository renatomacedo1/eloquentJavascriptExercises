/*Reversing an array

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?*/

// 1st part
let array = [1, 2, 3, 4, 5, 6];

function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}
console.log("Array declared: " + array);
console.log("Array we have returned from reverseArray: ");
//console.log(reverseArray(["A", "B", "C"])); //Test with chars
console.log(reverseArray(array));
console.log("Array declared: " + array);

// 2nd part
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
console.log("Executing reverseArrayInPlace(): ");
reverseArrayInPlace(array);
console.log("Array declared: ");
console.log(array);
console.log(
  "As we can see, the declared array was changed by the function reverseArrayInPlace() "
);

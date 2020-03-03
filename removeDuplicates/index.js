// Create a function that takes a string and returns a
// new string with duplicates removed

/*
 const str = 'This is is a test test string';
 removeDuplicates(str); // 'This is a test string'
 */
// Using Set
function removeDuplicates(str) {
  return [...new Set(str.split(" "))].join(" ");
}

const str = "This is is a test test string";
console.log(removeDuplicates(str)); // 'This is a test string'

// Create a function that takes a string and returns a
// new string with duplicates removed

/*
 const str = 'This is is a test test string';
 removeDuplicates(str); // 'This is a test string'
 */

// Using Set
// function removeDuplicates(str) {
//   return [...new Set(str.split(" "))].join(" ");
// }

// Using Object hash
// function removeDuplicates(str) {
//   let unique = {};
//   str.split(" ").forEach(el => {
//     if (!unique[el]) unique[el] = true;
//   });
//   return Object.keys(unique).join(" ");
// }

// Using filter and indexOf
function removeDuplicates(str) {
  const arr = str.split(" ");
  return arr.filter((item, index) => arr.indexOf(item) === index).join(" ");
}

const str = "This is is a test test string";
console.log(removeDuplicates(str)); // 'This is a test string'

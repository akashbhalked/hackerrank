// Without using .flat(), create a function to flatten an array

// forEach
// function flatten(array) {
//   const flat = [];
//   array.forEach(element => {
//     if (Array.isArray(element)) {
//       flat.push(...flatten(element));
//     } else {
//       flat.push(element);
//     }
//   });
//   return flat;
// }

// reduce
function flatten(array) {
  return array.reduce((acc, item) => {
    return Array.isArray(item) ? [...acc, ...flatten(item)] : [...acc, item];
  }, []);
}

const exampleArray = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];
console.log(flatten(exampleArray)); // [1,2,3,4,5,6,7,8,9,10]

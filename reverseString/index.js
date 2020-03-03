// Create a function to reverse a string

/*
    reverse('Hello, world!'); // !dlrow ,olleH
*/

// Using Built-in Functions
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// Using a Decrement for loop
function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverse("Hello, world!")); // !dlrow ,olleH

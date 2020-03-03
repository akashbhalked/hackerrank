// Create a function to reverse a string

/*
    reverse('Hello, world!'); // !dlrow ,olleH
*/

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(reverse("Hello, world!")); // !dlrow ,olleH

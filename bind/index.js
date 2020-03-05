// Implement Function.prototype.bind()

/*
    const foo = function() {
        console.log(this.bar);
    }
    let baz = foo.bind({bar: 'hello'})
    baz(); // Hello
*/

Function.prototype.bind = function(context) {
  const _this = this;
  return function() {
    _this.call(context);
  };
};

const foo = function() {
  console.log(this.bar);
};
let baz = foo.bind({ bar: "hello" });
baz(); // Hello

// function bind(fn, context) {
//   return function() {
//     fn.apply(context);
//   };
// }

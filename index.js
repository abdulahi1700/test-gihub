function myFunction() {
  // Function body goes here
}
function createScopeFunction() {
  let scopeVariable = "I am inside the scope function";

  function innerFunction() {
    console.log(scopeVariable);
  }

  return innerFunction;
}

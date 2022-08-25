
// Al Sweigart, THE RECURSIVE BOOK OF RECURSION, 2022

//<script type="text/javascript">
function fibonacci(nthNumber) {
 let a = 1, b = 1;
 let nextNum;
 console.log('a = ' + a + ', b = ' + b + '<br />');
 for (let i = 1; i < nthNumber; i++) {
 nextNum = a + b; // Get the next Fibonacci number.
 a = b;
 b = nextNum;

 console.log('a = ' + a + ', b = ' + b + '<br />');
 }
 return a;
};
console.log(fibonacci(20));
//</script>

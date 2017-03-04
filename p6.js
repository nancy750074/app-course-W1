var addclosure = (() => {
  var counter = 0;
  return () => {
    counter += 1;
    console.log(counter);
  }
})();
addclosure();
addclosure();
addclosure();

var add = (x) => {
  return (y) => {
    console.log(x+y);
  };
}

var add2 = add(5);
add2(3);
function multiplyByTwo(value) {
  let number = 2;
  function inner(){
    let multiply = value * number;
    return multiply;
  }
  console.log(inner());
}
 multiplyByTwo(4);
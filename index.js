function makeLine(size) {
  //let hash = "#";
  let line = "";
  for (let i = 0; i <= size; i++) {
    //console.log(hash);
    line += "#";
  }
  return line;
}
//console.log(makeLine(5));

function makeSquare(size) {
  let line = makeLine(5);
  let square = "";
  for (let i = 0; i <= size; i++) {
  square += line + '\n';
}
return square;
}
console.log(makeSquare(4));
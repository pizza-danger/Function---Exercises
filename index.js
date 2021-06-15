function makeLine(size) {
  //let hash = "#";
  let line = "";
  for (let i = 0; i <= 4; i++) {
    //console.log(hash);
    line += "#";
  }
  return line;
}

//console.log(makeLine(5));

/*function makeSquare(size) {
  let line = makeLine();
  let square = "";
  for (let i = 0; i <= size; i++) {
  square += line;
}
return square;
}
console.log(makeSquare(4));
*/

function makeRectangle(width, height) {
  let rectangle = "";
  for(let i = 0; i < height; i++) {
    rectangle += makeLine(width) + '\n';
  }
  return rectangle.slice(0, -1);
}
console.log(makeRectangle(5,3));
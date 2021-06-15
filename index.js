//a.
function makeLine(size) {
  //let hash = "#";
  let line = "";
  for (let i = 0; i < size; i++) {
    //console.log(hash);
    line += "#";
  }
  return line;
}

//console.log(makeLine(5));

//b.
function makeSquare(size) {
  let line = makeLine();
  let square = "";
  for (let i = 0; i <= size; i++) {
  square += line + '\n';
}
return square;
}
//console.log(makeSquare(4));

//c.
function makeRectangle(width, height) {
  let rectangle = "";
  for(let i = 0; i < height; i++) {
    rectangle += makeLine(width);
    console.log(makeLine(width));
  }
  return rectangle.slice(0,-1);
}
//console.log(makeRectangle(5,3));

//d.
function makeDownwardStairs(height) {
  let stairs = "";
  for(let i = 0; i < height; i++) {
    stairs += makeLine(i + 1) + '\n';
    //console.log(makeLine(i));
  }
  return stairs.slice(0,-1);
}

console.log(makeDownwardStairs(5))


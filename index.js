//a.
function makeLine(size) {
  let line = "";
  for (let i = 0; i < size; i++) {
    line += "#";
  }
  return line;
}

//console.log(makeLine(5));

//b.
/*function makeSquare(size) {
  let line = makeLine(size);
  let square = "";
  for (let i = 0; i < size; i++) {
  square += line + '\n';
}
return square.slice(0,-1);
}*/
//console.log(makeSquare(5));

//c.
function makeRectangle(width, height) {
  let rectangle = "";
  for(let i = 0; i < height; i++) {
    rectangle += makeLine(width) + '\n';
  }
  return rectangle.slice(0,-1);
}
//console.log(makeRectangle(5,3));

//d. QUESTION - Ask for TA assistance
function makeSquare(size) {
  let square = makeRectangle(size, size);
  }

//console.log(makeSquare(5));

//e.
function makeDownwardStairs(height) {
  let stairs = "";
  for(let i = 0; i < height; i++) {
    stairs += makeLine(i + 1) + '\n';
  }
  return stairs.slice(0,-1);
}

//console.log(makeDownwardStairs(5))

//f.
function makeSpaces(numSpaces) {
  let spaces = "";
  for (let i = 0; i < numSpaces; i++) {
    spaces += " ";
  }
  return spaces;
}
//console.log(makeSpaces(5));

function makeChars(numChars) {
  let chars = "";
  for (let i = 0; i < numChars; i++) {
    chars += "#";
  }
  return chars;
}
//console.log(makeChars(5));

function makeSpaceLine(numSpaces, numChars) {
  let spaceLine = "";
  for(let i = 0; i < makeSpaceLine.length; i++) {
     spaceLine += makeSpaces(numSpaces) + makeChars(numChars) + makeSpaces(numSpaces);
  }
  return spaceLine;
}

console.log(makeSpaceLine(3,5));

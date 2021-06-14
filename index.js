function makeLine(size) {
  //let hash = "#";
  let line = "";
  for (let i = 0; i <= size; i++) {
    //console.log(hash);
    line += "#";
  }
  return line;
}
console.log(makeLine(5));
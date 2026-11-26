function collapseMagnets(arr) {
  let chamber = [];
  for (let cur of arr) {
    // while the polarities are different
    while (
      chamber.length &&
      Math.sign(chamber[chamber.length - 1]) !== Math.sign(cur)
    ) {
      let top = chamber.pop();
      let chamberTopAbs = Math.abs(top);
      let curAbs = Math.abs(cur);

      if (chamberTopAbs === curAbs) {
        cur = Math.sign(cur) * (chamberTopAbs + curAbs);
      } else if (chamberTopAbs > curAbs) {
        cur = Math.sign(top) * (chamberTopAbs - curAbs);
        break;
      } else {
        cur = Math.sign(cur) * (curAbs - chamberTopAbs);
      }
    }
    chamber.push(cur);
  }
  return chamber;
}

console.log(collapseMagnets([5, -3, -2]));
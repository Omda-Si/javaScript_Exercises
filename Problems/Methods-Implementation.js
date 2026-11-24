//the map
Array.prototype.MyMap = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};
//the Filter method
Array.prototype.Myfilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
//the reduce
Array.prototype.MyReduce = function (callback, initValue) {
  let acc;
  let start = 0;
  if (this.length >= 2) {
    acc = initValue;
  } else {
    if (this.length == 0) {
      return "can't reduce an empty array";
    }
    acc = this[0];
    start = 1;
  }
  for (let i = start; i < this.length; i++) { 
     acc = callback(acc, this[i], i, this);
  }
  return acc;
};
//forEach
Array.prototype.MyForEach = function(callback){
    for(let i = 0;i<this.length;i++){
        callback(this[i], i, this);
    }
    return undefined;
}

console.log([1, 2, 3, 8].MyMap((x) => x * 4));
console.log([1, 2, 3, 8].Myfilter((x) => x < 7));
console.log([1, 2, 3, 8].MyReduce((acc,x) => acc + x ,0));
[1, 2, 3, 8].MyForEach((x) => console.log(x));

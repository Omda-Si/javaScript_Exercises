function OddSquares(arr){
    let odd = arr.filter((num)=> num%2 !== 0);
    let squares = odd.map(num => num * num);
    console.log(squares);
}
OddSquares([1,2,3,4,5,6,7]);
function maxProduct(arr, size){

    const sortedArr = arr.sort((a,b)=> b-a);
    console.log(sortedArr);
    let topMax = sortedArr.slice(0,size);
    console.log(topMax);
    let product = 1;
    for(let num of topMax){
      product *= num;
    }
    console.log(product);
}
maxProduct([4, 3, 5], 2);
maxProduct([10, 8, 7, 9], 3);
maxProduct([14, 29, -28, 39, -16, -48], 4);t
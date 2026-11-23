function adjacentElementsProduct(array) {
    let max = array[0] * array[1];
    for(let i = 1 ;i < array.length - 2; i++){
      let newPrudect = array[i] * array[i+1];
      if(newPrudect > max){
        max = newPrudect;
      }
    }
    return max;
    
}
console.log(adjacentElementsProduct([1,2,4,5,12]));
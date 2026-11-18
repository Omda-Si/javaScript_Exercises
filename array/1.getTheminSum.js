


function minSum(arr){

  let sortedArr = arr.sort((a,b)=> a-b);
  
  let total = 0;
  let left = 0;
  let right = sortedArr.length-1;

  while(left < right){
   total +=  sortedArr[left] * sortedArr[right];
   left++;
   right--;
  }
   return total;
}
console.log(minSum([5,4,2,3]))
console.log(minSum([3,4,5,7,7,8,1,2]))
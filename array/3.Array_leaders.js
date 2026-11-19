function arrayLeaders(numbers){

 let leadersArr = [];
  for(let i = 0; i < numbers.length ; i++){
    let currentSum = 0;
    for(let y = i+1 ; y<numbers.length ; y++){
       currentSum += numbers[y];
    }
   if(currentSum < numbers[i]){
      leadersArr.push(numbers[i]);
    }
  }
  return leadersArr;
}
console.log(arrayLeaders([1,2,3,4,0]));
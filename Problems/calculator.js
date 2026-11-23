function arrayStats(arr){

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sortedArray = arr.sort((a,b) => a-b);
    const average = arr.reduce((total, num)=> total += num,0);
    
    const result = {
        Max: max,
        Min: min,
        Average : average,
        Sorted_Array :sortedArray
    };
    return result;
    
}
console.log(arrayStats([8,7,5,3,2,1,9]));
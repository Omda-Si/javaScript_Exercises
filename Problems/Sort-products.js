function SortProduct(arr){
  const sortt = arr.sort((a, b) => b.price - a.price);
  return sortt;
}

console.log(SortProduct([
    {
     name:"omda", 
     price:1000
    },
    {
     name:"siddig", 
     price:3000
    },
    {
     name: "ahmed",
     price:2000
    },
]))
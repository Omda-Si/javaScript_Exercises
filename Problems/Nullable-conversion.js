function converNullableValues(obj){
 for(let [key,value] of Object.entries(obj)){
    if(value === null){
        obj[key] = 0;
    }
    if (value === undefined){
        obj[key] = " ";
    }
 }
 return obj;
}

console.log(converNullableValues({
    custom1:"omda",
    custom2:null,
    custom3:undefined,
    contom4:"hassan"
}))
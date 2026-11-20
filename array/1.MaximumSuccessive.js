function isKiss( words ){
  
 let arrwords = words.split(' ');
 let lengthOfString = arrwords.length;
  for(let word of arrwords){
    let wordLength = word.length;
    if(wordLength > lengthOfString){
      return "Keep It Simple Stupid";
    }
  }
  return "Good work Joe!";
}

console.log(isKiss('Joe had a bad day'));
console.log(isKiss('Sometimes joe cries for hours'));
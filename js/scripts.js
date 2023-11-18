function beepBoop(number){
  let newResult = [];
  for(let i = 0; i <= number; i++){
    let stringNumber = i.toString();
    if(stringNumber.includes("1")){
      newResult.push("Beep")
    }else if(stringNumber.includes("2")){
      newResult.push("Boop!")
    }else{
      newResult.push(i)
    }
  }
  return newResult
}

console.log(beepBoop("2"))
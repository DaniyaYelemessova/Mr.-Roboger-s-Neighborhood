function beepBoop(number){
  let newResult = [];
  for(let i = 0; i <= number; i++){
    newResult.push(i)
  }
  return newResult
}

console.log(beepBoop("5"))
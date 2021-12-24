const numbers = [2,5,8,7,1,0,3];
for(let i=0; i < numbers.length; i++){
  numbers[i]=Boolean(numbers[i])
}
console.log(numbers);
for (let n = 0; n <= 100; n++) {
  let isPrime = true; 
  for (let i = 2; i < n; i++) {
    if (n % i === 0){
      isPrime = false;
      break;
    } 
  }
  if (isPrime && n > 1){
    console.log(n);
  }
}
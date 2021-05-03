function Fibonacci(number) {
    if(number < 2) return number;
        return Fibonacci(number-1) + Fibonacci(number-2);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter a number:`, number => {
    console.log(Fibonacci(number))
    readline.close()
    
  })
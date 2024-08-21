function Fibonacci(n) {
    a = 0;
    b = 1;
  
    while (n-- > 0) {
      console.log(a); 
      a = b;
      b = a + b; 
    }
  }
  
  Fibonacci(11);
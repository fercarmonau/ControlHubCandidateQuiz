function getFibonacciIndex(n) {
    if(n < 0)
        return "Invalid index";
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}

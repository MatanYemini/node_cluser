class FibonacciSeries {
  constructor() {}

  calculateFibonacciValue(number) {
    if (number === 0) return 0;
    else if (number === 1) return 1;
    else
      return (
        this.calculateFibonacciValue(number - 1) +
        this.calculateFibonacciValue(number - 2)
      );
  }
}

module.exports = new FibonacciSeries();

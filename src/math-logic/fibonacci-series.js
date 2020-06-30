class FibonacciSeries {
  constructor() {}

  calculateFibonacciValue(number) {
    let s = 0;

    if (number === 0) return s;
    else if (number === 1) return (s += 1);
    else
      return (
        this.calculateFibonacciValue(number - 1) +
        this.calculateFibonacciValue(number - 2)
      );
  }
}

module.exports = new FibonacciSeries();

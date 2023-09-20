export default function range(start: number, end: number, step: number = 1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start = start + step;
        return { value: start, done: false };
      }
      return { value: end, done: true };
    },
  };
}

console.log(...range(0, 100, 5));

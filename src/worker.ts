// worker.js
self.onmessage = function (event: MessageEvent<number>) {
  const result = doHeavyComputation(event.data);
  self.postMessage(result);
};

function doHeavyComputation(n: number) {
  let result = 0;
  const iterations = n * 1000000; // Adjust multiplier for desired intensity

  for (let i = 0; i < iterations; i++) {
    result += Math.sin(i * Math.random());
  }

  return result;
}

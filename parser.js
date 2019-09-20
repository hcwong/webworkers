// parser.js is a task for a web worker to parse a JSON file w/o blocking the main thread

// Self in this case refers to the global scope of the worker
self.addEventListener("message", (event) => {
  const data = event.data;
  const startTime = Date.now();
  JSON.parse(data.str);
  const runTime = Date.now() - startTime;
  self.postMessage(runTime);
})
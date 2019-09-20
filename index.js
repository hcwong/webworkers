// The majority of the code as of now still is derived from web worker tutorials
// Note: Chrome dosen't load local scripts for web workers so you may want to test this on localhost instead.
const jsonWorker = new Worker('parser.js');

jsonWorker.addEventListener("message", (event) => {
  console.log("On worker thread: ", event.data);
})

// Now we do the calculation for parsing the JSON file on the main thread.
performanceMarkersMain = [];
performanceMarkersMain.push(Date.now());
JSON.parse(largeJSON);
performanceMarkersMain.push(Date.now());
console.log(performanceMarkersMain);
console.log("On main thread: ", performanceMarkersMain[1] - performanceMarkersMain[0]);

// Try to use transferable objects to reduce the overhead of cloning
const message = {str: largeJSON};
jsonWorker.postMessage(message);
# Web workers

I hope to explore the potential for web workers to offload certain computationally expensive tasks from the main thread and thus improve performance. If this works out I might even make this my own library

This is heavily influenced by this [V8 article](https://v8.dev/blog/cost-of-javascript-2019#json)

`JSON.parse` is fast and all, but however, the parsing of the actual object will still take time on the main thread and I was wondering if this can instead be done on the worker threads instead.

From some the current code, my current benchmarks have shown that running it on the main thread is faster than running it on the worker thread. There is also signficant time delay when posting the data to the new thread via the postMessage API.

At 1.8MB of stringified JSON, the parallelized threads only performed marginally faster, and if one needs the parsed JSON object immediately, parallelizing is definitely slower as you have to postMessage.
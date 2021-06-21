self.onmessage = onMessage;
function onMessage(evt) {
    console.log(evt)
	if (evt.data === "start") {
        renderFibo();
    }
}

        function renderFibo() {
            for(let i=3;i<10;i++) {
                const item = fib(i);
                self.postMessage(item)
            }
        }
        function fib(n) {
            if (n < 2) {
                return n;
            }
            return fib(n-1) + fib(n-2);
        }

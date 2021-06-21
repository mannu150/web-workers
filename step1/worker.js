// self.onmessage = onMessage;
// function onMessage(evt) {
//     console.log(evt)
// 	console.log(`Received in web worker => ${evt.data}`)
// }



self.postMessage("Hello from worker")
//*************************************************************************************************** */
//Worker to Main Page
//In Main page
worker.addEventListener("message", (evt)=> {
    console.log(evt.data)
})
//And in workers file
self.postMessage("Hello")
//*************************************************************************************************** */
//Main page to worker
//In Main Page
worker.addEventListener("message", (evt)=> {
    console.log(evt.data)
    worker.postMessage('hello from the client')
})
//In worker
self.onmessage = onMessage;
function onMessage(evt) {
	console.log(`Received in web worker ${evt.data}`)
}
//*************************************************************************************************** */
//To Terminate
worker.terminate()
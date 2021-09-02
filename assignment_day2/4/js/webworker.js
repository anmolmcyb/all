var worker;
function startWorker() {
    document.getElementById("result").innerText = "";
    worker = new Worker("../js/countnums.js")
    worker.onmessage = update;
}
function update(event) {
    document.getElementById("result").append(event.data)
}
function stopWorker() {
    
    worker.terminate()
}
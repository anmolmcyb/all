var i = 30;
function countNumbers(){
    if(i < 20000){
        i = i+1
        postMessage(String.fromCharCode(i))
    }
    setTimeout("countNumbers()", 100)
}
countNumbers()
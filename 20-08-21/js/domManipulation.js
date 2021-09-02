var count = 0;
document.getElementById('redbg').addEventListener('click', function(event){
    event.preventDefault()
    document.body.style.backgroundColor = 'red'
})
function addElem(){
    let list = document.getElementById('list')
    let content = document.getElementById('add').value
    let li = document.createElement('LI')
    li.addEventListener('click', function(){
        li.style.backgroundColor = 'red'
    })

    li.appendChild(document.createTextNode(content))
    list.append(li)
}
function removeElemLast(){
    let list = document.getElementById('list')
    list.removeChild(list.lastElementChild)
}
function removeElemFirst(){
    let list = document.getElementById('list')
    list.removeChild(list.firstElementChild)

}
function setRedBg(){
    let list = document.getElementById('list')
    let last = list.lastElementChild
    last.setAttribute('style', 'background:red;')
}







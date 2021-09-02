class Product {
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }    
    
}

var products = [new Product('Rice', 25), new Product('Wheat', 25), new Product('Cereal', 50)]

function add(name, cost) {
    products.push(new Product(name, cost))
}
function search(name){
    return products.filter(p=>p.name == name)
}
function deleteProduct(name){
    products = products.filter(p=>p.name!=name)
}

let op = document.getElementById('op')
function addProd(){
    let name = document.getElementById('name')
    let cost = document.getElementById('cost')
    add(name.value,+cost.value)
    name.value = ''
    cost.value = ''
}
function searchProd() {
    let name = document.getElementById('name')
    let match = search(name.value)
    op.innerText = JSON.stringify({'Output': match})
}

function deleteProd(){
    let name = document.getElementById('name')
    deleteProduct(name.value)
    op.innerText = JSON.stringify({'Output': `All products with name ${name.value} deleted successfully.`})
}
function allProd() {
    op.innerText = JSON.stringify({'Output': products})
}




















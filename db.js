
function decrease(name) {
    var value = window.localStorage.getItem(name)
    window.localStorage.removeItem(name)
    window.localStorage.setItem(name, parseInt(value) - 1)
}
function increase(name) {
    var value = window.localStorage.getItem(name)
    window.localStorage.removeItem(name)
    window.localStorage.setItem(name, parseInt(value) + 1)
}

//adicionar item
function newItem(name) {
    window.localStorage.setItem(name, 0)
}
//remover item
function deleteItem(name) {
    window.localStorage.removeItem(name)
}

//listar todos
function showAll() {

    var itens = new Array()
    for (var i = 0; i < localStorage.length; i++) {
        nome = localStorage.key(i)
        valor = window.localStorage.getItem(nome)
        itens.push({ nome, valor })
    }
    return itens
}



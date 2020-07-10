function sortValor(){
    update('valor')
}

function update(sort) {

    let itens = showAll()
    if(sort =='valor'){
    itens = itens.sort((a,b) => b.valor - a.valor)
    }
    else{
        itens = itens.sort((a,b) => a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0)
    }

    var container = document.getElementById('lista')

    if (!(container.innerText === "")) {
        container.innerHTML = "";
    }
 
    itens.forEach((elemento) => {

        var container = document.createElement('div')
        container.className = 'itens'

        var item = document.createElement('h3')
        item.innerText = elemento.nome + ' = ' + elemento.valor

        container.appendChild(item)


        var btnContainer = document.createElement('div')
        btnContainer.className = 'btnDiv'

        var btn = document.createElement('button')
        btn.innerText = "-"
        btn.className = 'btn'
        btn.onclick = function () {
            decrease(elemento.nome)
            update()
        }
        btnContainer.appendChild(btn)
        
        var btn = document.createElement('button')
        btn.innerText = "+"
        btn.className = 'btn'
        btn.onclick = function () {
            increase(elemento.nome)
            update()
        }
        btnContainer.appendChild(btn)

        var btn = document.createElement('button')
        btn.innerText = "deletar"
        btn.className = 'btn'
        btn.onclick = function () {
            remove(elemento.nome)
        }
        btnContainer.appendChild(btn)

        container.appendChild(btnContainer)
        
        document.getElementById('lista').appendChild(container)
    })
}

function remove(name) {
    deleteItem(name)
    update()
}

function create() {
    var name = document.getElementById('NewItem').value
    newItem(name)
    update()
}

function remove_all() {
    window.localStorage.clear()
    update()
}

update()

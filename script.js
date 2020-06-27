//https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/


function update() {
    var container = document.getElementById('lista')

    if (!(container.innerText === "")) {
        container.innerHTML = "";
    }



    const itens = showAll()
    //pode-se utilizar o indice na arrow function usando a sintese itens.foreach((iten, index)=>)...
    itens.forEach((elemento) => {

        var container = document.createElement('div')
        container.className = 'itens'

        var item = document.createElement('h3')
        item.innerText = elemento.nome + ' = ' + elemento.valor

        container.appendChild(item)

        var btn = document.createElement('button')
        btn.innerText = "-"
        btn.className = 'btn'
        btn.onclick = function () {
            decrease(elemento.nome)
            update()
        }
        container.appendChild(btn)
        
        var btn = document.createElement('button')
        btn.innerText = "+"
        btn.className = 'btn'
        btn.onclick = function () {
            increase(elemento.nome)
            update()
        }


        container.appendChild(btn)

        document.getElementById('lista').appendChild(container)
    })
}
//ate aqui funfando completar update()

function remove() {
    var name = document.getElementById('DeleteItem').value
    deleteItem(name)
    update()

    //  update();

}

function create() {
    var name = document.getElementById('NewItem').value
    newItem(name)
    update()

    // document.getElementById('lista')
    // var item = document.createElement('li')
    // item.innerText = name.value
    // document.getElementById('lista').appendChild(item)
}



function remove_all() {
    window.localStorage.clear()
    update()
}

update()

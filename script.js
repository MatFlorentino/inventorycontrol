//https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/

function update(){
    var parent = document.getElementById('lista')
    var itens = parent.getElementsByTagName('li')
    
    for(i=itens.length-1;i>=0;i--){
    parent.removeChild(itens[i])
    }

    show_itens();
}



function show_itens(){
    document.getElementById('lista')

    for (var i = 0; i < localStorage.length; i++){

        var container = document.createElement('div')
        container.className = 'itens'


        var item = document.createElement('li')
        
        var text = document.createTextNode(localStorage.key(i))
        item.appendChild(text)

        container.appendChild(item)

        

        var qtd = document.createElement('h4')
        qtd.innerText = window.localStorage.getItem(text.wholeText)
        container.appendChild(qtd)

        var btn = document.createElement('button')
        btn.className = 'plus'
        container.appendChild(btn)

        btn.onclick = function(){
            //ENCONTRAR KEY E AUMENTAR VALOR
        }

        var btn = document.createElement('button')
        btn.className = 'minus'
        container.appendChild(btn)



        document.getElementById('lista').appendChild(container)

    }
}



function remove(){
    var name = document.getElementById('del_in').value
    window.localStorage.removeItem(name)

    update();

}

function create(){
    var name = document.getElementById('add_in')
    window.localStorage.setItem(name.value, 0)

    document.getElementById('lista')
    var item = document.createElement('li')
    item.innerText = name.value
    document.getElementById('lista').appendChild(item)
}



function remove_all(){
    console.log('a')
    window.localStorage.clear()
    update()
}


show_itens()
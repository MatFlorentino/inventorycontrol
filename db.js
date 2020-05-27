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
        var item = document.createElement('li')
        var text = document.createTextNode(localStorage.key(i))
        item.appendChild(text)
        document.getElementById('lista').appendChild(item)
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



function clears(){
    console.log('a')
    window.localStorage.clear()
    update()
}



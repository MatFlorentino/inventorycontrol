//https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/

function update(name, value){
    window.localStorage.removeItem(name)
    window.localStorage.setItem(name, value)
}

function create(){
    var name = document.getElementById('add_in')
    window.localStorage.setItem(name.value, 0)

    document.getElementById('lista')
    var item = document.createElement('li')
    item.innerText = name.value
    document.getElementById('lista').appendChild(item)
}

function remove(){
    console.log('well')
    var name = document.getElementById('del_in').value
    window.localStorage.removeItem(name)
}

function clear(){
    window.localStorage.clear
}

function itens(){
    for (var i = 0; i < localStorage.length; i++){
        console.log(localStorage.getItem(localStorage.key(i)))
    }
}

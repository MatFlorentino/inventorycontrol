document.getElementById('lista')

for (var i = 0; i < localStorage.length; i++){
    var item = document.createElement('li')
    var text = document.createTextNode(localStorage.key(i))
    item.appendChild(text)
    document.getElementById('lista').appendChild(item)
}

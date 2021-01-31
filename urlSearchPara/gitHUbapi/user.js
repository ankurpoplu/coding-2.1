window.addEventListener('load',function(){
    let link = new URLSearchParams(window.location.search)
    let search = link.get('q')
    let div = document.querySelector('div')
    div.innerText = search
})
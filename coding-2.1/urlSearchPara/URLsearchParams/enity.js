window.addEventListener('load',function(){
    let url = new URLSearchParams(window.location.search)
    console.log(url)
    let b = url.get('no')
    console.log(b)
    let div = document.querySelector('div')
    div.innerText = b
})
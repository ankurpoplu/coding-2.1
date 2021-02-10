window.addEventListener('load',function(){
    let form = document.querySelector('form')
    form.addEventListener('submit',onSubmit)
})

function onSubmit(){
    event.preventDefault();
    let form = new FormData(event.target)
    let search = form.get('search')
    console.log(search)
    go(search)
}

function go(e){
    document.location = `users.html?q=${e}`
}
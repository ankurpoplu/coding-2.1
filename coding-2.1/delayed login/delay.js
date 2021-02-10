let Data = JSON.parse( localStorage.getItem('data')) || {}

window.addEventListener('load',function(){
    let form = document.querySelector('form')
    form.addEventListener('submit',afterSubmit)
})

function afterSubmit(){
    event.preventDefault()
    let form = new FormData(event.target)
    let name = form.get('name')
    let email = form.get('email')
    let url = form.get('url')
    let data = {
        name,
        email,
        url
    }
    localStorage.setItem('data',JSON.stringify(data))
}

let btn = document.getElementById('btn-2')
btn.addEventListener('click',hold)

function hold(){
    let delay = document.getElementById('delay').value
    console.log(delay)
    setTimeout(()=>{
        let info = document.getElementById('info')
        info.innerHTML = `<div class='box'>
        <img src="${Data.url}">
        <h3>Name: ${Data.name}</h3>
        <h3>Email: ${Data.email}</h3>
        <div>`
    },delay*1000)
}
let table = document.getElementById('table')
let display = document.getElementById('outputBox')

window.addEventListener('load',function(){
    let form = document.querySelector('form')
    form.addEventListener('submit',onSubmit)
})

function onSubmit(){
    event.preventDefault()

    let form = new FormData(event.target)
    let search = form.get('rep')
    let sort = form.get('sort')
    let order = form.get('order')
    let perPage = form.get('btn1')
    let pageno = form.get('pageno')
    console.log(search,sort,order,perPage,pageno)
    if(search !== ""){
        handleData(search,sort,order,perPage)
    }else{
        errorMessage()
    }
}

function errorMessage(){
    display.innerHTML = ""
    display.textContent = "Input can't be Empty"
}

function handleData(q,sort,order){
    let xhr = new XMLHttpRequest()
    let url = `https://api.github.com/search/users?q=${q}+${sort}:42`;
    xhr.open(`GET`,url)
    xhr.send();
    let output = ""
    let data = []
    xhr.onload = function(){
        if(xhr.status == 200){
            data = JSON.parse(xhr.response).items
            console.log(data)
            for(i in data){
                output +=`<div class="card">
                <p>Login : ${data[i].login}</p>
                <p>URL : ${data[i].url}</p>
                <p>User Type : ${data[i].type}</p>
            </div>`
            }
        }
        display.innerHTML = output
    }
}
let display1 = document.getElementById("display1")
let display2 = document.getElementById("display2")
let btn1 = document.getElementById('btn1')
let btn3 = document.getElementById('btn3')

window.addEventListener('load',preJock)

function preJock(){
    let form = document.querySelector('form')
    form.addEventListener('submit',onSubmit)

    let xhr = new XMLHttpRequest()
    let url = `https://api.chucknorris.io/jokes/random`;
    xhr.open(`GET`,url)
    xhr.send();
    let output = ""
    let data = []
    xhr.onload = function(){
        if(xhr.status == 200){
            data = JSON.parse(xhr.response)
            console.log(data)
            output = `<div>
            <img src="${data.icon_url}">
            <h3>${data.value}</h3>
            <button id="btn3">REFRESH</button>
            </div>`
        }
        display1.innerHTML = output
    }      
}

function onSubmit(){
    event.preventDefault()

    let form = new FormData(event.target)
    let search = form.get('search')
    let categories = form.get('categories')
    console.log(search,categories)
    if(search!==''){
        searchJock()
    }if(categories!==''){
        categoriesJock()
    }else if(search!==""&&categories!==""){
        display2.innerHTML = `<h2>Enter either search or categories</h2>`
    }
    
}

function searchJock(){
    let xhr = new XMLHttpRequest()
    let url = `https://api.chucknorris.io/jokes/search?query=${search}`;
    xhr.open(`GET`,url)
    xhr.send();
    let output = ""
    let data = []
    xhr.onload = function(){
        if(xhr.status == 200){
            data = JSON.parse(xhr.response)
            console.log(data)
            output = `<div>
            <img src="${data.icon_url}">
            <h3>${data.value}</h3>
            </div>`
        }
     display2.innerHTML = output
    }
}

function categoriesJock(){
    let xhr = new XMLHttpRequest()
    let url = `https://api.chucknorris.io/jokes/random?category=${catagories}`;
    xhr.open(`GET`,url)
    xhr.send();
    let output = ""
    let data = []
    xhr.onload = function(){
        if(xhr.status == 200){
            data = JSON.parse(xhr.response)
            console.log(data)
            output = `<div>
            <img src="${data.icon_url}">
            <h3>${data.value}</h3>
            </div>`
        }
        display2.innerHTML = output
    } 
}

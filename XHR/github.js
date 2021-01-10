let display = document.getElementById('repBox')
let table = document.getElementById('table')

window.addEventListener('load',function(){
    let form = document.querySelector('form')
    form.addEventListener('submit',onSubmit)
})

function onSubmit(){
    event.preventDefault()

    let form = new FormData(event.target)
    let search = form.get('search')
    let sort = form.get('sort')
    let order = form.get('order')
    // console.log(search,sort,order)
    if(search !== ""){
        handleData(search,sort,order)
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
    let url = `https://api.github.com/search/repositories?q=${q}&sort=${sort}&order=${order}`;
    xhr.open(`GET`,url)
    xhr.send();
    let output = ""
    let data = []
    xhr.onload = function(){
        if(xhr.status == 200){
            data = JSON.parse(xhr.response).items
            console.log(data)
            for(i in data){
                output +=`<table>
                <tr>
                    <td><em style='color: red'>Language</em> : ${data[i].language}</td>
                    <td class='url'><em style='color: red'> URL</em> : ${data[i].html_url}</td>
                    <td><em style='color: red'> Discription</em> : ${data[i].description}</td>
                </tr>
            </table>`
            }
        }
        display.innerHTML = output
    }
}
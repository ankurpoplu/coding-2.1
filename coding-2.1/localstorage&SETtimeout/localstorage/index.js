let data = [
    {
        username : 'ankur',
        passward : 'matata',
        type : 'admin',
    },
    {
        username : 'chintu',
        passward : 'hakuna',
        type : 'user',
    },
    {
        username : 'minti',
        passward : 'hakuna',
        type : 'user',
    },
    {
        username : 'pinki',
        passward : 'hakuna',
        type : 'user',
    },
    {
        username : 'aditi',
        passward : 'hakuna',
        type : 'user',
    },
    {
        username : 'posha',
        passward : 'matata',
        type : 'admin',
    },
]

let allData = JSON.parse( localStorage.getItem('allData')) || []
let currentData = JSON.parse( localStorage.getItem('currentData')) || {}

window.addEventListener('load',function(){
    let form = document.querySelector('form')
    form.addEventListener('submit',afterSubmit)
})

function afterSubmit (){
    event.preventDefault()
    let form = new FormData(event.target)
    let username = form.get('userName')
    let passward = form.get('passward')
    console.log(username)
    console.log(passward)
    let userDetail = {
        username,
        passward
    }

    if( check(userDetail)){
        const { username, type} = check(userDetail)
        const time = new Date().toLocaleTimeString()

        const info = {
            username,
            type,
            time
        }
        allData = [...allData,info]
        savedDatatoLocal('allData',allData)
        savedDatatoLocal('currentUser',info)
        redirect(info)
    }else{
        let error = document.querySelector('#errorDisplay')
        error.textContent = "Invalid"
    }
}

function check(input){
    return data.find( user => (user.username === input.username && user.passward === input.passward))
}

function savedDatatoLocal(name,value){
    if(value !== 'string'){
        localStorage.setItem(name,JSON.stringify(value))
    }else {
        localStorage.setItem(name,value)
    }
}

function redirect(user){
    if(user.type === 'admin'){
        location = 'admin.html'
    }else if(user.type === 'user'){
        location = 'dash.html'
    }
}
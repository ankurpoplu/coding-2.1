let usernameD = document.querySelector('#username')
let timeD = document.querySelector('#time')
let logoutbtn = document.querySelector('button')

let user = JSON.parse(localStorage.getItem('currentUser')) || {}

window.addEventListener('load',function(){
    const {username,time} = user
    if (!username){
        location = 'index.html'
    }

    usernameD.textContent = username;
    timeD.textContent = time;
})

logoutbtn.addEventListener('click',logout)

function logout(){
    localStorage.removeItem('user')
    location = 'index.html'
}
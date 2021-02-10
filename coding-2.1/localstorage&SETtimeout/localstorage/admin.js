let display = document.querySelector('#display')
let table = document.getElementById('table')
let logoutbtn = document.querySelector('button')
let naam = document.getElementById('userAdmin') 

let user = JSON.parse(localStorage.getItem('currentUser')) || {}
let allData = JSON.parse(localStorage.getItem('allData')) || []

window.addEventListener('load',function(){
    const { username, type} = user
    naam.innerText = username
    if(!username || type !=='admin'){
        logout()
    }
    
    displayData(allData)
})

function displayData(){
    table.innerHTML = ""
    console.log(allData)
    let output = ""
    for(i in allData){
        output += `
        <tr>
            <td>${allData[i].username}</td>
            <td>${allData[i].type}</td>
            <td>${allData[i].time}</td>
        </tr>
    `
    }
    table.innerHTML = output
    // let table = document.createElement('table')

    // let thead = document.createElement('thead')
    // let tHeadRow = document.createElement('tr')

    // let th1 = document.createElement('th')
    // th1.textContent = 'USERNAME'

    // let th2  = document.createElement('th')
    // th2.textContent = 'USER-TYPE'

    // let th3 = document.createElement('th')
    // th3.textContent = 'LOGIN-TIME'

    // tHeadRow.append(th1,th2,th3)
    // thead.append

    // let tbody = document.createElement('tbody')

    // for(let i=0;i<allData.length;i++){
    //     let current = allData[i]

    //     let tBodyRow = document.createElement('tr')

    //     let td1 = document.createElement('td')
    //     td1.textContent = current['username']
    
    //     let td2  = document.createElement('td')
    //     td2.textContent = current['type']
    
    //     let td3 = document.createElement('td')
    //     td3.textContent = current['time']

    //     tBodyRow.append(td1,td2,td3)
    //     tbody.append(tBodyRow)
    // }
    // table.append(thead)
    // table.append(tbody)

    // display.append(table)

}

logoutbtn.addEventListener('click',logout)
function logout(){
    localStorage.removeItem('user')
    location = 'index.html'
}
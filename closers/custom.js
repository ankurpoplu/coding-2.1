window.addEventListener('load',function(){
    let btn1 = document.getElementById('btn1').addEventListener('click',add)
    let btn2 = document.getElementById('btn2').addEventListener('click',sub)
    let btn3 = document.getElementById('btn3').addEventListener('click',mul)
    let btn4 = document.getElementById('btn4').addEventListener('click',div)
})

function add(a,b){
    let inp1 = document.getElementById('number1').value
    let inp2 = document.getElementById('number2').value
    console.log(inp1,inp2)
    a=+inp1
    b=+inp2
    let c = a+b
    let out = document.getElementById('output')
     out.innerHTML = inp1 + '+' + inp2 + ' = ' + c
}
function sub(a,b){
    let inp1 = document.getElementById('number1').value
    let inp2 = document.getElementById('number2').value
    console.log(inp1,inp2)
    a=+inp1
    b=+inp2
    let c = a-b
    let out = document.getElementById('output')
     out.innerHTML = inp1 + '-' + inp2 + ' = ' + c
}
function mul(a,b){
    let inp1 = document.getElementById('number1').value
    let inp2 = document.getElementById('number2').value
    console.log(inp1,inp2)
    a=+inp1
    b=+inp2
    let c = a*b
    let out = document.getElementById('output')
     out.innerHTML = inp1 + '*' + inp2 + ' = ' + c
}
function div(a,b){
    let inp1 = document.getElementById('number1').value
    let inp2 = document.getElementById('number2').value
    console.log(inp1,inp2)
    a=+inp1
    b=+inp2
    let c = a/b
    let out = document.getElementById('output')
     out.innerHTML = inp1 + '/' + inp2 + ' = ' + c
}
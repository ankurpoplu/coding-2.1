let box = document.getElementById('gridBox')
let btn = document.getElementById('btn')
let playerBox = document.getElementById('info')
btn.addEventListener('click',createPlayer)

window.addEventListener('load',function(){
    for(let i=0;i<100;i++){
        let div = document.createElement('div')
        div.innerText = i+1
        div.id = i+1
        box.appendChild(div)
    }
})

function createPlayer(){
    let player = document.createElement('div')
    let name = document.getElementById('nameBox').value
    let color = document.getElementById('color').value
    player.innerText = name
    player.style.background = color
    player.style.margin = '20px'
    player.style.width = '120px'
    player.style.textAlign = 'center'
    player.id = name
    playerBox.appendChild(player)
    grid()
}

function grid(){
    let box = document.getElementById('1')
    let name = document.getElementById('nameBox').value
    box.style.display = 'flex'
    let div = document.createElement('div')
    let color = document.getElementById('color').value
    div.style.backgroundColor = color
    div.style.height = '10px'
    div.style.width = '10px'
    div.style.borderRadius = '5px'
    div.style.margin = '10px'
    div.id = name+'1'
    box.appendChild(div)
    let player = document.getElementById(`${name}`)
    console.log(player)
    player.addEventListener('click',move)
}

function move(){
    let name = document.getElementById('nameBox').value
    // console.log(name)
    let motion = document.getElementById(`${name}1`)
    console.log(motion)
    let parent = motion.parentElement.id
    console.log(parent)
    window.addEventListener('keydown', function(event) {
        if(event.keyCode == 37) {
            //move the ball to left
            if(parent>1){
                motion.remove()
                parent--
                let doc = document.getElementById(`${parent}`)
                doc.appendChild(motion)
            }
        }
        else if(event.keyCode == 38) {
            //move the ball to up
            if(parent>10){
                motion.remove()
                parent = parent - 9
                let doc = document.getElementById(`${parent}`)
                doc.appendChild(motion)
            }
        }
        else if(event.keyCode == 39) {
            //move the ball to right
            if(parent>0&&parent<100){
                motion.remove()
                parent++
                let doc = document.getElementById(`${parent}`)
                doc.appendChild(motion)
            }
        }
        else if(event.keyCode == 40) {
            //move the ball to down
            if(parent<90){
                motion.remove()
                parent = parent + 9
                let doc = document.getElementById(`${parent}`)
                doc.appendChild(motion)
            }
        }
        
        });
}

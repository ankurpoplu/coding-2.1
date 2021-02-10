window.addEventListener('load',function(){
    let out = document.getElementById('output')
    let xhr = new XMLHttpRequest()
    let url = `https://cbf34f65-7573-4154-bd49-1321786fdcef.mock.pstmn.io/get`;
    xhr.open(`GET`,url)
    xhr.send();
    let output = ""
    let data = []
    xhr.onload = function(){
        if(xhr.status == 200){
            data = JSON.parse(xhr.response).args.type
            // console.log(data)
            for(i in data){
                output +=`<h2 id="que${+i+1}">question ${+i+1}: ${data[i].question}</h2>
                          <button id='btn${+i+1}'>${+i+1}</button>
                <br>`
            }
        }
        out.innerHTML = output
    }
    // gotu()
    
})

// function gotu(){
//     let pg1 = document.getElementById('que1').addEventListener('click',function(){
//         // document.location = 'question.html?id=1'
//         alert('hello')
//     })
    // let pg2 = document.getElementById('que2').addEventListener('click',function(){
    //     document.location = 'question.html?id=2'
    // })
    // let pg3 = document.getElementById('que3').addEventListener('click',function(){
    //     document.location = 'question.html?id=3'
    // })
    // let pg4 = document.getElementById('que4').addEventListener('click',function(){
    //     document.location = 'question.html?id=4'
    // })
    // let pg5 = document.getElementById('que5').addEventListener('click',function(){
    //     document.location = 'question.html?id=5'
    // })
// }
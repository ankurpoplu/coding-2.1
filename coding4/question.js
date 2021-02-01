window.addEventListener('load',function(){
    let out = document.getElementById('out')
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
                <option>${data[i].option_1}</option>
                <option>${data[i].option_2}</option>
                <option>${data[i].option_3}</option>
                <option>${data[i].option_4}</option>
                <br>`
            }
        }
        out.innerHTML = output
    }
})
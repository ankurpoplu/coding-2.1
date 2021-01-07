let input = 'Early Monday     morning   MUSIC'
let array = function(input){
    let array = []
    let str = ''
    for(let i=0;i<input.length;i++){
        if(input[i]!==' '){
            str = str + input[i]
        }if((input[i]===' ')&&(str.length>0)){
            array.push(str)
            str = ''
        }else if(i===(input.length-1)){
            array.push(str)
        }
    }
    return array
}
let arr = array(input)
// console.log(arr)

let toLower = function(input){
    let letter = ''
    let low = 'abcdefghijklmnopqrstuvwxyz'
    let high = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=0;i<high.length;i++){
        if(input===high[i]){
            letter += low[i]
        }
    }
    if(letter===""){
        letter += input
    }

    return letter
}

let toUpper = function(input){
    let letter = ''
    let low = 'abcdefghijklmnopqrstuvwxyz'
    let high = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=0;i<high.length;i++){
        if(input===low[i]){
            letter += high[i]
        }
    }
    if(letter===""){
        letter += input
    }

    return letter
}

let joint = function(input,ele){
    let output = ''
    for(let i=0;i<input.length;i++){
        let last = input.length-1
        if(i<last){
            output += input[i] + ele 
        }else if (i==last){
            output += input[i]
        }
    }
    return output
}

let convlow = function(input){
    let output = []
    for(let i=0;i<input.length;i++){
        let str = ''
        for(let j=0;j<input[i].length;j++){
            str += toLower(input[i][j])
        }
        output.push(str)
        str = ''
    }
    return output
}

arr = convlow(arr)

let firstUpper = function(input){
    output = ''
    for(let i=0;i<input.length;i++){
        if(i==0){
            output += toUpper(input[i])
        }else if(i>0){
            output += input[i]
        }
    }
    return output
}

let ray = []
for(let i=0;i<arr.length;i++){
    if(i>0){
        ray.push(firstUpper(arr[i]))
    }else{
        ray.push(arr[i])
    }
}

let print = function(input){
    console.log(input)
}

let camelCase = function(input,call){
    input = joint(input,'')
    call(input)
}

let cababCase = function(input,call){
    input = joint(input,'-')
    call(input)
}

let snakeCase = function(input,call){
    input = joint(input,'_')
    call(input)
}

camelCase(ray,print)
cababCase(arr,print)
snakeCase(arr,print)



var arr = [ 1, 2, 3, 4, 5, 6, 7 ]
myfilter = function(e,i){
    let flag = true
    let array = []
    for(i=0;i<e.length;i++){
        if(i>1){
            if(e[i]%2===0){
                flag = true
                
            }else if(e[i]%2!==0){
                flag = false
            }
        }
        if(flag === true){
            array.push(e[i])
        }
    }
    return console.log(array)   
}
myfilter(arr,arr.length)
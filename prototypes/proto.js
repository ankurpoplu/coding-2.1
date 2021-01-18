let array = [1,2,3,4,5,6,7,8,9,10]
array.pop()
array.push(10)
array.forEach(e=>console.log(e))
let bay = array.map(e=>e*e).filter(function(e){
    if(e%2==0){
        return e
    }
}).reduce((a,b)=>a+b)
console.log(bay)

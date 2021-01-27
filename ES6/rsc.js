class rectangle {
    constructor(length,breath){
        this.length = length
        this.breath = breath
    }
    area() {
        return this.length*this.breath
    }
}

// let rec = new rectangle(10,20)
// console.log(rec.area())

class square extends rectangle {
    constructor(length,breath){
        super(length,breath)
        this.breath = length
    }
}

let sqr = new square(10)
console.log(sqr.area())
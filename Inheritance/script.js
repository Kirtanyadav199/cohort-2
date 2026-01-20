class Animal{
    constructor(){
        this.legs = 4
        this.eye = 2
    }
    eat(){

    }
    run(){
console.log("rons")
    }
}
class Dog extends Animal{
    constructor(){
        super()
        this.legs = 2
        this.hands = 2
    }
    bark(){

    }
}

let dog1 = new Dog()
dog1.run()
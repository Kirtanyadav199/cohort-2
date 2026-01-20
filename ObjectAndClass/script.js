class Bottle {
constructor(color, material, price){
    this.color = color
    this.material = material
    this.price = price
}
fill(){
 console.log("Bottle filled")
}
drink(){
console.log("Water drinked")
}
}

let Bottle1 = new Bottle("red", "Plastic","100rs")
let Bottle2 = new Bottle("yellow", "Plastic","120rs")
Bottle1.fill()
Bottle2.drink()

// global -> window
console.log(this)

// function -> window
function abcd(){
    console.log(this)
}
abcd()


// es5 function inside object -> same object 
let obj = {
    name: "kirtan",
    color:"white",
    fnc:function(){
console.log(this)
    }
}
obj.fnc()


//es6 function inside object -> window
let obj2 = {
    fnc:()=>{
console.log(this)
    }
}
obj2.fnc()


// es5 funct inside es5 func inside obj -> window
let obj3={
    fnc: function ab(){
        function abcd(){
            console.log(this)
        }
        abcd()
    }
}
obj3.fnc()


// es6 function inside es5 funct inside object ->object
let obj4 ={
    fnc:function ab(){
       let a=  ()=>{
            console.log(this)
        }
    a()
    }
}
obj4.fnc()



// Call, bind, Apply

let obj5={
    name: "Kirtan"
}

function abc(a,b,c){
    console.log(this,a,b,c)
}
abc() // -> window
abc.call(obj5) // -> object aayega ab 
abc.apply(obj5,[1,2,3]) // -> obj ke sath sath array bhi dega tod kr a,b,c me 
let b = abc.bind(obj5,1,2,4)
b()
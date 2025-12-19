     //   random color generator   
// let btn = document.querySelector('button')
// let box =  document.querySelector('#box')

// btn.addEventListener("click",function(){
//     let a = Math.floor(Math.random()*255)
//     let b = Math.floor(Math.random()*255)
//     let c = Math.floor(Math.random()*255)
//     box.style.backgroundColor = `rgb(${a},${b},${c})`
    
// })

let arr = [
    {
     team: "CSK",
     colour: "yellow"
    },
    {
     team: "RCB",
     colour: "red"

    },
    {
     team: "SRH",
     colour: "orange"
    },
    {
     team: "GT",
     colour: "darkgreen"
    },
    {
      team: "LSG",
     colour: "skyblue"
    },
    {
    team: "DC",
     colour: "darkblue"
    },
    {
     team: "KKR",
     colour: "purple"
    },
    {
    team:"PBKS",
    colour:"red"
    }
]
let btn = document.querySelector('button')
let box =  document.querySelector('#box')
let main = document.querySelector('main')

btn.addEventListener("click",function(){
   
    let a = Math.floor(Math.random()*arr.length)
    btn.innerHTML = arr[a].team
    box.style.backgroundColor = arr[a].colour
    btn.style.backgroundColor = arr[a].colour
})
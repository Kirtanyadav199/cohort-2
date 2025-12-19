
   // RANDOM DIVS WITH RANDOM ANGLE
// let btn = document.querySelector('button')
// let main = document.querySelector('main')

// btn.addEventListener("click",function(){
//   let div = document.createElement("div")

//   let a = Math.floor(Math.random()*100)   // position aage piche
//   let b = Math.floor(Math.random()*100)
//   let c1 = Math.floor(Math.random()*256)   // rgb color
//   let c2 = Math.floor(Math.random()*256)
//   let c3 = Math.floor(Math.random()*256)
//   let d = Math.floor(Math.random()*360)   // rotate degree
   
//   div.style.height = '100px'
//   div.style.width = '100px'
//   div.style.backgroundColor = 'red'
//   div.style.position = 'absolute'
//   div.style.top = a +"%"
//   div.style.left = b +"%"
//   div.style.backgroundColor=`rgb(${c1},${c2},${c3})`
//   div.style.transform = `rotateZ(${d}deg)`
//   main.appendChild(div)
  
// })


//  FOR Quotes

let arr = ["Never Give Up","Be patient","Be Confident","Good Things are on the Way","Dream Big","Keep Hustling"]

let btn = document.querySelector('button')
let main = document.querySelector('main')

btn.addEventListener("click",function(){
  let h1 = document.createElement("h1")

  let a = Math.floor(Math.random()*100)
  let b = Math.floor(Math.random()*100)
  let c1 = Math.floor(Math.random()*256)
  let c2 = Math.floor(Math.random()*256)
  let c3 = Math.floor(Math.random()*256)
  let d = Math.floor(Math.random()*80)
  let scl = Math.floor(Math.random()*3)
  let idx = Math.floor(Math.random()*arr.length)
   
  h1.style.position = 'absolute'
  h1.style.top = a +"%"
  h1.style.left = b +"%"
  h1.style.color=`rgb(${c1},${c2},${c3})`
  h1.style.transform = `rotateZ(${d}deg)`
  h1.innerHTML = arr[idx]
  h1.style.scale = scl
  main.appendChild(h1)
  
})
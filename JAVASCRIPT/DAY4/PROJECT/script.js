let btn  = document.querySelector(".bottom button")
let h2 = document.querySelector(".bottom h2")
let inner = document.querySelector(".inner")
let a = 0
btn.addEventListener("click",function(){
   
     btn.style.pointerEvents = 'none'
     
     let num = 10+(Math.floor(Math.random()*90))
     console.log(num)
    let int = setInterval(function(){
        a++
        h2.innerHTML = a+"%"
        inner.style.width = a+"%"
    },num)

    setTimeout(function(){
        clearInterval(int)
        btn.innerHTML = "Downloaded"
        btn.style.opacity = 0.5
    },num*100)
    
})
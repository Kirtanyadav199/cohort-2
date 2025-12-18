// let elem = document.querySelectorAll('.elem')
// // let elemImg = document.querySelectorAll('.elem img')


// elem.forEach(function(val){
//     val.addEventListener("mouseenter",function(){
//         val.childNodes[3].style.opacity = 1
//     })

//      val.addEventListener("mouseleave",function(){
//         val.childNodes[3].style.opacity = 0
//     })

//     val.addEventListener("mousemove",function(e){
//         val.childNodes[3].style.left = e.x+"px"
//         // val.childNodes[3].style.top = e.y+"px"
//     })
// })

// elem1.addEventListener("mousemove",function(e){
//     elemImg.style.left = e.x+"px"
//     elemImg.style.top = e.y+"px"
// }) 

// elem1.addEventListener("mouseenter",function(e){
//     elemImg.style.opacity = 1
// }) 
// elem1.addEventListener("mouseleave",function(e){
//     elemImg.style.opacity = 0
// }) 



let elem = document.querySelectorAll(".elem")
// let img = document.querySelector("#elem1 img")

elem.forEach(function(val){

val.addEventListener("mouseenter",function(){
       val.childNodes[3].style.opacity = 1
})

val.addEventListener("mouseleave",function(){
       val.childNodes[3].style.opacity = 0
})
val.addEventListener("mousemove",function(e){
       val.childNodes[3].style.left = e.x+"px"
})
})
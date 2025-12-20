
  ///               BASICS            ///
// let a = 0
// setTimeout(function(){
//     console.log(a)
// },1000)

// let int = setInterval(function(){
//     a++
//     console.log(a);
    
// },1000)

// clearInterval(int)



let a = 0;
let int = setInterval(function(){
    a++
    console.log(a);
    
},500)

setTimeout(function(){
  clearInterval(int)   // clear interval me delay laane ke liye
  
},2000)

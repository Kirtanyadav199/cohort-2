//          Promise

// let pr = new Promise(function dataLao(res,rej){
// setTimeout(() => {
//     let a = Math.floor(Math.random()*10)
//     if(a > 5) res(a);
//     else rej(a);
// }, 2000);
// })

// pr.then(function(val){
//     console.log("resolved with "+ val)
// }).catch(function(err){
//     console.log("rejected with "+ err);
// })


//          async await 

// async function abcd() {
//     try{
//         let val = await pr
//         console.log(val);   
//     }
//     catch(err){
//         console.log(err);
        
//     }
// }

// abcd()


// exaple :-

// fetch( 'https://randomuser.me/api/').then(function(notReadableData){
//    return notReadableData.json();
// }).then(function(readableData){
//     console.log(readableData.results[0].name.first);
    
// })

async function abc(){
let rawData = await fetch('https://randomuser.me/api/')
let goodData = await rawData.json()
console.log(goodData)
}

abc()
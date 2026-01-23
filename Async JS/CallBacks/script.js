//                  call back hell
// function fnc1(fnc2){
//      fnc2(function fnc3(fnc4){
//   fnc4(function fnc5(){

//   })

//      })
// }

// fnc1(function fnc2(fnc3){
//     fnc3(function fnc4(fnc5){
//         console.log("Hello");
        
//     })
// })

// function amitSeDetailsLao(address,cb){
//     cb({lat: 24252, lng:74323})
// }
// amitSeDetailsLao("Suvidha-medical",function(details){
//     console.log(details)
// })


// function medicalSeGoliLaao(add,cb){
// cb(["Paracetamol","Crocin"])
// }
// medicalSeGoliLaao("samarth-medical",function chal(dets){
// console.log(dets)
// })


//                Quetion 1
// function afterDelay(time,cb){
//     setTimeout(function(){
//         cb();
//     },time)
// }

// afterDelay(1000,function(){
//        console.log("Executed")
// })


//          Question 2

// function getUser(username,cb){
// setTimeout(function(){
//     cb({id: 1,username: "Kirtan" })
// },1000)
// }

// function getUserPosts(userId,cb){
// setTimeout(function(){
// cb(["hello","hiii","namaste"])
// },1000)
// }

// getUser("Kirtan",function(data){
//     getUserPosts("kirtan22",function(posts){
//        console.log(data.username, posts)
//     })
// })



//         Question 3

function loginUser(username,cb){
    console.log("Logging user...")
setTimeout(() => {
    cb({
   id: 113,
   username:"kirtan"
    })
}, 1000);
}

function fetchPermissions(userId,cb){
    console.log("Fetching Permissions...");
    
    setTimeout(() => {
        cb([1,2,3])
    }, 1000);

}
function loadDashBoard(Permissions,cb){
    console.log("loading dashboard");
setTimeout(() => {
    cb()
}, 1000);
}

loginUser("kirtan",function(userData){
fetchPermissions(userData.id,function(Permissions){
 loadDashBoard(Permissions,function(){
console.log("DashBoard Loaded")
 })
})
})




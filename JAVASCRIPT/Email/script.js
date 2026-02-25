const users = ["kirtan@gmail.com","harshit@gmail.com","harsh@gmail.com"];


function sendEmail(email){
return new Promise((resolve,reject)=>{
    let time = Math.floor(Math.random()*10)

   setTimeout(() => {
    let probability = Math.floor(Math.random()*10)
    if(probability <= 5) resolve("Email succesfully sent.");
    else reject("email not send");
   }, time*500)
})
}


// sendEmail("kirtan@gmail.com")
// .then(function(data){
//     console.log(data);
    
// })
// .catch(function(err){
// console.log(err);

// })


async function sendEmails(userlist){
   let Allresponses =  userlist.map(function(email){
    return   sendEmail(email)
.then(function(data){
   return data;
})
.catch(function(err){
return err;
})
   })

 
  let ans= await Promise.all(Allresponses)
  console.log(ans);
  
}

 sendEmails(users);


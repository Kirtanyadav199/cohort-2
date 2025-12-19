let btn = document.querySelector('button')
let h2 = document.querySelector('h2')

let flag = 0;

btn.addEventListener('click',function(){
    if(flag === 0){
        h2.innerHTML = 'Friends'
        h2.style.color = 'Green'
        btn.innerHTML = 'Remove Friend'
        flag = 1;
    }else{
        h2.innerHTML = 'Stanger'
        h2.style.color = 'Red'
        btn.innerHTML = 'Add Friend'
        flag = 0
    }
})
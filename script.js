let count = document.querySelector('#count')
let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')

let a = 0;

inc.addEventListener('click',function(){
    a++;
    count.innerHTML = a
}
)

dec.addEventListener('click',function(){
    a--;
    count.innerHTML = a
}
)
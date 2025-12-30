let products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    photo: "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1999,
    photo: "https://plus.unsplash.com/premium_photo-1677159499898-b061fb5bd2d7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 1499,
    photo: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 3499,
    photo: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "DSLR Camera",
    price: 45999,
    photo: "https://plus.unsplash.com/premium_photo-1677159499898-b061fb5bd2d7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    name: "Laptop Stand",
    price: 999,
    photo: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    name: "USB-C Hub",
    price: 1299,
    photo: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 9,
    name: "Noise Cancelling Earbuds",
    price: 3999,
    photo: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 10,
    name: "Power Bank 20000mAh",
    price: 2499,
    photo: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=500&q=80"
  }
];

 let cartt = [];
 let prdts = document.querySelector(".products")
 let cart = document.querySelector('.cart')
 let i = document.querySelector('body  i')


function showProducts(){

  let clutter = '';
  products.forEach(function(val,idx){
    clutter += ` <div class="product"> 
        <i data-index="${idx}" id="${idx}" class=" add       ri-shopping-cart-2-fill"></i>
        <img src="${val.photo}" alt="">
        <h2>${val.name}</h2>
        <h3>&#8377; ${val.price}</h3>
    </div>`
  })
  prdts.innerHTML = clutter;
}

function showCart(){
 
  let flag = 0;

  i.addEventListener("click",function(){
     if(flag === 0){
      cart.style.display = 'block flex'
      flag = 1;
     }
     else{
      cart.style.display = 'none'
      flag = 0;
     }
  }) 
}


function addToCart(){


 prdts.addEventListener("click", (e) => {
  if(e.target.classList.contains('add')){
  cartt.push(products[e.target.dataset.index])
  showCartProducts()
  }

   console.log(cartt);
})
};

function showCartProducts(){

 let clutter = ``
 cartt.forEach(function(obj){
  clutter += `<div class="item"> 
        <img src="${obj.photo}" alt="">
        <h2>${obj.name}</h2>
    </div>`
 })
 cart.innerHTML = clutter;
}






showProducts()
showCart()
addToCart()




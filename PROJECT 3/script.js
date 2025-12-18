let main = document.querySelector('#main')
let cursor = document.querySelector('.cursor')

main.addEventListener('mousemove',function(e){
   cursor.style.left = e.x+"px"  
   cursor.style.top= e.y+"px"
    
}) 










// Ye code mouse ke move hone par mouse ki X-Y position (event.x, event.y) leta hai aur un values se ek element (cursor) ki left aur top position update karta hai, jisse element mouse ke saath move karta dikhta hai (custom cursor effect).

// Short points:

// mousemove → mouse hilte hi trigger hota hai

//  e → event object (browser deta hai)

// e.x, e.y → mouse position (pixels)

// "px" → CSS unit

// Result → element mouse follow karta hai 
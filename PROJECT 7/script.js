const arr = [
  {
    name: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
  },
  {
    name: "Alia Williams",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    name: "Daniel Smith",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    name: "Emma Brown",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Michael Lee",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    name: "Olivia Martin",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    name: "James Anderson",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
  },
  {
    name: "Isabella Garcia",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  },
  {
    name: "William Taylor",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
  },
  {
    name: "Mia Hernandez",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
  }
];

let input = document.querySelector('input')
let block = document.querySelector('.block')
let main = document.querySelector('main')
let searchResult = document.querySelector(".search-results")

let clutter = '';

arr.forEach(function(val){
    clutter +=`<img src="${val.image}" alt="${val.name}"></img>`
    
})
main.insertAdjacentHTML("beforeend", clutter);



input.addEventListener("focus",function(){
    block.style.display = "block"
//     searchResult.style.display = 'block'
//     let sum = '';
// arr.forEach(function(obj){
// sum += ` <h3>${obj.name}</h3>`
// })
// searchResult.innerHTML = sum


})
input.addEventListener("blur",function(){
    block.style.display = "none"
    searchResult.style.display = 'none'

})

  input.addEventListener("input", function(){
       const filteredArray = arr.filter(objt => objt.name.toLowerCase().startsWith(input.value));
        var clutterr = "";
        filteredArray.forEach(function(e){
            clutterr += `<h3>${e.name}</h3>`
        })
    block.style.display = "block";
    searchResult.style.display = "block"
    searchResult.innerHTML = clutterr;
    })





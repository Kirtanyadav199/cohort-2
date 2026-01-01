let arr = [
    {songName:"Jale 2",
    url:"songs/Jale_2.webm",
    img:"Images/Jale-2.jpg"},

    {songName:"Arjan Vailley",
    url:"songs/Arjan_Vailly.webm",
    img:"Images/Arjan_Vailly.jpg"},

    {songName:"Pehle Bhi Main",
        url:"songs/Pehle_Bhi_Main.webm",
        img:"Images/Arjan_Vailly.jpg"},

    {songName:"Yadav Brand 2",
    url:"songs/Yadav_Brand_2.webm",
    img:"Images/Yadav_Brand_2.jpg"},

    {songName:"Rao Sahab Drill",
    url:"songs/Rao_Sahab_Drill.webm",
    img:"Images/Rao_Sahab_Drill.webp"},

   {songName:"Name Chale",
    url:"songs/Naam_Chale.webm",
    img:"Images/Name_Chale.jpg"},

    {songName:"Apna Bana Le",
    url:"songs/ApnaBanaLe.webm",
    img:"Images/Apna_Bana_le.jpg"},
]

let allSongs = document.querySelector('#all-songs')
let audio = new Audio()
let selectedSong = 0
let poster = document.querySelector('#left')
let play = document.querySelector('#play')
let forward = document.querySelector('#forward')
let backward = document.querySelector('#backward')

function mainFunction(){
let clutter = ``
arr.forEach(function(obj,idx){
clutter += ` <div class="song-card" id="${idx}">
                    <div class="part1">
                        <img src="${obj.img}" alt="">
                        <h2>${obj.songName}</h2>
                    </div>
                    <h6>3:56</h6>    
                </div>`
})

audio.src = arr[selectedSong].url
poster.style.backgroundImage = `url(${arr[selectedSong].img})`
allSongs.innerHTML = clutter

}
mainFunction()

allSongs.addEventListener("click",function(dets){
    selectedSong = dets.target.id
    play.innerHTML = `<i class="ri-pause-mini-line"></i>`
    forward.style.opacity = 1
    backward.style.opacity = 1
    flag  = 1
    mainFunction()
    audio.play()
})

let flag  = 0
play.addEventListener("click",function(){
if (flag == 0){
    play.innerHTML = `<i class="ri-pause-mini-line"></i>`
    mainFunction()
    audio.play()
    flag = 1
}else{
    play.innerHTML = `<i class="ri-play-fill"></i>`
    mainFunction()
    audio.pause()
    flag = 0
}
})


forward.addEventListener("click",function(){
   
   if(selectedSong < arr.length - 1){
    selectedSong++
   mainFunction()
   play.innerHTML = `<i class="ri-pause-mini-line"></i>`
   backward.style.opacity = 1
   flag = 1
   audio.play()
   }else{
    forward.style.opacity = 0.4
   }
})

backward.addEventListener("click",function(){
   
   if(selectedSong > 0){
    selectedSong--
   mainFunction()
   play.innerHTML = `<i class="ri-pause-mini-line"></i>`
   forward.style.opacity = 1
   flag = 1
   audio.play()
   }else{
    backward.style.opacity = 0.4
   }
})
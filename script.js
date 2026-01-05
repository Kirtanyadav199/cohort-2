const reels = [
  {
    username: "kirtan_17",
    userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    caption: "Consistency > Motivation 💪",
    likeCount: 1240,
    commentCount: 86,
    shareCount: 42,
    isLiked: true,
    isFollowed: true,
    video: "Reels/1.mp4",
    isMuted: true
  },
  {
    username: "code_with_rahul",
    userProfile: "https://randomuser.me/api/portraits/men/45.jpg",
    caption: "JavaScript sirf language nahi, mindset hai 🚀",
    likeCount: 980,
    commentCount: 64,
    shareCount: 28,
    isLiked: false,
    isFollowed: false,
    video: "Reels/2.mp4",
    isMuted: true
  },
  {
    username: "fit_life_daily",
    userProfile: "https://randomuser.me/api/portraits/men/12.jpg",
    caption: "No excuses. Just discipline 🏋️",
    likeCount: 3520,
    commentCount: 215,
    shareCount: 132,
    isLiked: true,
    isFollowed: true,
    video: "Reels/3.mp4",
    isMuted: true
  },
  {
    username: "travel_diaries",
    userProfile: "https://randomuser.me/api/portraits/women/65.jpg",
    caption: "Mountains > Everything ⛰️",
    likeCount: 820,
    commentCount: 47,
    shareCount: 20,
    isLiked: false,
    isFollowed: false,
    video: "Reels/4.mp4",
    isMuted: true
  },
  {
    username: "frontend_guru",
    userProfile: "https://randomuser.me/api/portraits/men/78.jpg",
    caption: "position: relative samajh lo, life set 😄",
    likeCount: 2140,
    commentCount: 138,
    shareCount: 79,
    isLiked: true,
    isFollowed: true,
    video: "Reels/5.mp4",
    isMuted: true
  }
 
 
];

let allReels = document.querySelector('.all-reels')


function addData(){
let sum = ``
reels.forEach(function(elem,idx){
sum += `   <div class="reel">
                   <video loop ${elem.isMuted ? 'muted': ''} autoplay src="${elem.video}"></video>
                     <div class="mute" id="${idx}">
                <i class="ri-volume-mute-fill"></i>
                    </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id="${idx}" class="followbtn">${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id="${idx}" class="like">
                            <h4 class="like-icon">${elem.isLiked?'<i class="liked ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                              <h6>${elem.likeCount}</h6>
                        </div>
                        

                         <div class="comment">
                            <h4 class="comment"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>

                         <div class="share">
                            <h4 class="share-icon"><i class="ri-send-ins-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>

                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></i></h4>
                        </div>
                    </div>
                </div>`
})


allReels.innerHTML = sum

}

addData()

allReels.addEventListener("click",function(dets){
  if(dets.target.className == "like"){
    if(reels[dets.target.id].isLiked){
    reels[dets.target.id].likeCount--
    reels[dets.target.id].isLiked = false
    }else{
    reels[dets.target.id].likeCount++
    reels[dets.target.id].isLiked = true
    }
  }
  addData()
  if(dets.target.className == "followbtn"){
    if(reels[dets.target.id].isFollowed){
       reels[dets.target.id].isFollowed = false
    }else{
       reels[dets.target.id].isFollowed = true
    }
  }
  addData()

  if(dets.target.className == "mute"){
    if(reels[dets.target.id].isMuted){
       reels[dets.target.id].isMuted = false
    }else{
       reels[dets.target.id].isMuted =true
    }
    addData()
  }
  
 
 
  
})









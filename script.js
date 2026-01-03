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
    video: "Reels/1.mp4"
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
    video: "Reels/2.mp4"
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
    video: "Reels/3.mp4"
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
    video: "Reels/4.mp4"
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
    video: "Reels/5.mp4"
  },
  {
    username: "daily_quotes",
    userProfile: "https://randomuser.me/api/portraits/women/21.jpg",
    caption: "Slow progress is still progress 🌱",
    likeCount: 1680,
    commentCount: 101,
    shareCount: 59,
    isLiked: false,
    isFollowed: false,
    video: "Reels/6.mp4"
  },
  {
    username: "gym_motivation",
    userProfile: "https://randomuser.me/api/portraits/men/90.jpg",
    caption: "Train your mind before your body 🧠",
    likeCount: 5120,
    commentCount: 426,
    shareCount: 312,
    isLiked: true,
    isFollowed: true,
    video: "Reels/7.mp4"
  },
  {
    username: "tech_updates",
    userProfile: "https://randomuser.me/api/portraits/men/55.jpg",
    caption: "AI future nahi, present hai 🤖",
    likeCount: 910,
    commentCount: 74,
    shareCount: 37,
    isLiked: false,
    isFollowed: false,
    video: "Reels/1.mp4"
  },
  {
    username: "minimal_vibes",
    userProfile: "https://randomuser.me/api/portraits/women/48.jpg",
    caption: "Less chaos, more clarity ✨",
    likeCount: 1390,
    commentCount: 92,
    shareCount: 51,
    isLiked: true,
    isFollowed: true,
    video: "Reels/4.mp4"
  },
  {
    username: "night_thoughts",
    userProfile: "https://randomuser.me/api/portraits/men/19.jpg",
    caption: "Late nights, deep thoughts 🌌",
    likeCount: 690,
    commentCount: 41,
    shareCount: 18,
    isLiked: false,
    isFollowed: false,
    video: "Reels/2.mp4"
  }
];

let sum = ``
reels.forEach(function(elem){
sum += `   <div class="reel">
                   <video autoplay loop muted  src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
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

let allReels = document.querySelector('.all-reels')
allReels.innerHTML = sum
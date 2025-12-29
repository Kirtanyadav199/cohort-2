const people = [
  {
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Rahul Sharma",
    profession: "Frontend Developer"
  },
  {
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Anjali Verma",
    profession: "UI/UX Designer"
  },
  {
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Amit Patel",
    profession: "Backend Developer"
  },
  {
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Priya Singh",
    profession: "Product Manager"
  },
  {
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Rahul Sharma",
    profession: "Frontend Developer"
  },
  {
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Anjali Verma",
    profession: "UI/UX Designer"
  },
  {
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Amit Patel",
    profession: "Backend Developer"
  },
  {
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Priya Singh",
    profession: "Product Manager"
  }

]

let main = document.querySelector('main')
let clutter = ''

people.forEach(function(obj){
    clutter+= `  <div class="card">
     <img src="${obj.photo}" alt="">
            <h1>${obj.name}</h1>
            <h3>${obj.profession}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, blanditiis!
            </p> </div>`
})

main.innerHTML = clutter;


async function checkWeather(city){

 try {
    let API = `e6d5da81179630446b25533ba33e4e4a`

 let raw =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)

     if (!raw.ok) {
      throw new Error("City not found or API error");
    }  


 let data = await raw.json();

 if(data.main.temp < 0){
console.warn("too much cold out there",data.main.temp,"°C");

 }
 else if(data.main.temp > 35){
    console.warn("too much hot out there",data.main.temp,"°C");
 }
 else{
     console.log(data.main.temp,"°C")
 }
}
 catch(err){
   console.log(err)
}
}
checkWeather("Indore")



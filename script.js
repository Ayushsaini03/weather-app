const weatherforecast1 = document.getElementById('weather-forecast');
const date1 = document.getElementById('date');
const currentweatheritems1 = document.getElementById("current-weather-items");
const time1 = document.getElementById('time');
const country1 = document.getElementById('country');
const timezones = document.getElementById('time-zone');
const currenttemp1 = document.getElementById('current-temp');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hours2 = hour >=13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'
    
    time1.innerHTML = (hours2 <10? '0' + hours2 :hours2) + ':' + (minutes < 10? '0' +minutes : minutes) + ' ' + `<span id="am-pm">${ampm}</span>`

    date1.innerHTML = days[day] + ' , ' + date+ ' ' + months[month]

}, 1000);


var input = document.getElementById("ans");


input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("fuck").click();
  }
});


function getinfo(){
    var city=document.getElementById("ans").value;
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&appid=404876b6b74fa78626ae9ee072d36f8a')
.then(response=>response.json())
.then(data=>{
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"min").innerHTML=Number(data.list[7+(i*7)].main.temp_min)+"°C"
    }
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"max").innerHTML=Number(data.list[7+(i*7)].main.temp_max)+"°C"
    }
    for(i=0;i<6;i++){
        document.getElementById("img"+(i+1)).src="http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon+".png"
    }
    document.getElementById("wind").innerHTML=Number(data.list[0].wind.speed)+"m/s"
    document.getElementById("humi").innerHTML=Number(data.list[0].main.humidity)+"%"
    document.getElementById("pres").innerHTML=Number(data.list[0].main.pressure)+" inHg"
    document.getElementById("te").innerHTML=Number(data.list[0].main.temp)+"°C"
    document.getElementById("min1").innerHTML=Number(data.list[0].main.temp_min)+"°C"
    document.getElementById("max1").innerHTML=Number(data.list[0].main.temp_max)+"°C"
    document.getElementById("sex").innerHTML=city;
    document.getElementById("lelo").innerHTML=data.city.country;
})

}

fetch('https://api.openweathermap.org/data/2.5/forecast?q=delhi&units=metric&appid=404876b6b74fa78626ae9ee072d36f8a')
.then(response=>response.json())
.then(data=>{
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"min").innerHTML=Number(data.list[7+(i*7)].main.temp_min)+"°C"
    }
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"max").innerHTML=Number(data.list[7+(i*7)].main.temp_max)+"°C"
    }
    for(i=0;i<6;i++){
        document.getElementById("img"+(i+1)).src="http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon+".png"
    }
    document.getElementById("wind").innerHTML=Number(data.list[0].wind.speed)+"m/s"
    document.getElementById("humi").innerHTML=Number(data.list[0].main.humidity)+"%"
    document.getElementById("pres").innerHTML=Number(data.list[0].main.pressure)+" inHg"
    document.getElementById("te").innerHTML=Number(data.list[0].main.temp)+"°C"
    document.getElementById("min1").innerHTML=Number(data.list[0].main.temp_min)+"°C"
    document.getElementById("max1").innerHTML=Number(data.list[0].main.temp_max)+"°C"
})



//day
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];


function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<6; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }

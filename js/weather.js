
function forecaster(){
    let period =""

    fetch("https://api.weather.gov/gridpoints/LOT/73,79/forecast/hourly")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      period=data.properties.periods
      console.log(period)
      console.log(data.properties.periods[5])
      console.log(period[0].startTime)


   let tbody=document.getElementById("forecast")

   for (let i=0; i < 120; i++) {
        let day=String(period[i].startTime)
        //2022-09-14T07:00:00-05:00 parse date time to date time seperate
        let newday=day.split("T")
        let daysub=newday[0].substring(5,)
        let timesub=newday[1].substring(0,2)
        //fill table with data from api
        let row=`<tr>
                    <td>${daysub}</td>
                    <td>${timesub}</td>
                    <td>${period[i].temperature}</td>
                    <td>${period[i].windSpeed}</td>
                    <td>${period[i].windDirection}</td>
                </tr>`
        tbody.innerHTML+=row
    }

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

//this is for the alternate api
// document.querySelector('.altapi').addEventListener('click', forecastalt)

// function forecastalt(){
//     let period =""

//     fetch("https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=42.04&lon=87.67&appid={API key}")
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//       period=data.properties.periods
//       console.log(period)
//       console.log(data.properties.periods[5])
//       console.log(period[0].startTime)
      

//    let table=document.getElementById("table2")

//    for(let i=0;i<120;i++){
//     let day=String(period[i].startTime)
//     //2022-09-14T07:00:00-05:00 parse date time to date time seperate
//     let newday=day.split("T")
//     let daysub=newday[0].substring(5,)
//     let timesub=newday[1].substring(0,2)
//     //fill table with data from api
//     let row=`<tr class="oddeven">
//                 <td>${daysub}</td>
//                 <td>${timesub}</td>
//                 <td>${period[i].temperature}</td>
//                 <td>${period[i].windSpeed}</td>
//                 <td>${period[i].windDirection}</td>
//             </tr>`
//     table.innerHTML+=row

//    }

//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });

// }

forecaster()
let clickCount=1

// get a new date (locale machine date time)
//this is all for the northwestern cam, it is down, have a default image for when it is down (vcr california), so time is not wasted loading a bad link
var date = new Date();
console.log(date)
// get the date as a string
var n = date.toDateString();
// get the time as a string

var hour=date.getHours()
var time = date.toLocaleTimeString();
let year=date.getFullYear()
let month=String(date.getMonth()+1)
let day = String(date.getDate())
let minute = date.getMinutes()

let minutes=minute.toNumber
let newtime= "0638"
let flexhour=hour-1
let pastminutes=minute-30
let newminutes=pastminutes

let newhour=hour


function converttoTwoDigits(n){
    return n > 9 ? "" + n: "0" + n;
}
day=converttoTwoDigits(day)
month=converttoTwoDigits(month)

//create switch case

if (pastminutes<0){
    newminutes=60+pastminutes
    newhour=flexhour
}
//create switch case
if(newminutes>59){
    newminutes=59
    }

else if (newminutes<58 && newminutes > 44){
    newminutes=44
}

else if(newminutes<44 && newminutes>29){
    newminutes=2
}
else if(newminutes<29 && newminutes >14){
    newminutes=14
}

else if(newminutes<14 && newminutes>0){
    newminutes=58
    newhour=flexhour
}
newhour=converttoTwoDigits(newhour)
newminutes=converttoTwoDigits(newminutes)
newtime=`${newhour}${newminutes}`
    

//select correctimage src="https://cameras-cam.cdn.weatherbug.net/NUEIL/2022/09/14/091420221038_l.jpg"

//to find correct time 58, 43,28, 13, 

gwoodsImg = document.getElementById('gwoods')
gwoodsImg.src =`https://cameras-cam.cdn.weatherbug.net/NUEIL/${year}/${month}/${day}/${month}${day}${year}${newtime}_l.jpg`
gwoodsImg.onerror = function() {
    this.onerror = null;
    this.src = "images/vcrcalifornianocontest.jpg"
}

//click count for wave forecast images

// let clickCount=1

function forward(){
    clickCount+=1
    if (clickCount>120){
        clickCount=120
    }
    document.getElementById('wavefc').src =`https://www.glerl.noaa.gov/emf/waves/WW3/images//ww3glm-${clickCount}.png?1663254398596` 
    
    return clickCount
}

function backward(){
    clickCount-=1
    if (clickCount<=1){
        clickCount=1
    }
    document.getElementById('wavefc').src =`https://www.glerl.noaa.gov/emf/waves/WW3/images//ww3glm-${clickCount}.png?1663254398596` 
   
    return clickCount
}

// create forward and backward button
//document.querySelector('button').onclick('click', forecaster)


document.getElementById('wavefc').src =`https://www.glerl.noaa.gov/emf/waves/WW3/images//ww3glm-${clickCount}.png?1663254398596` 

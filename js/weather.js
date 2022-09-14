
document.querySelector('button').addEventListener('click', forecaster)

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
      

   let table=document.getElementById("tables")

   for(let i=0;i<30;i++){
    let day=String(period[i].startTime)
    //2022-09-14T07:00:00-05:00 parse date time to date time seperate
    let newday=day.split("T")
    let daysub=newday[0].substring(5,)
    let timesub=newday[1].substring(0,2)

    let row=`<tr>
                <td>${daysub}</td>
                <td>${timesub}</td>
                <td>${period[i].temperature}</td>
                <td>${period[i].windSpeed}</td>
                <td>${period[i].windDirection}</td>
            </tr>`
    table.innerHTML+=row

   }

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
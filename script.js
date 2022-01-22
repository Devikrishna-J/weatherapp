function getWeatherDetails(){
    let cnt_name=cntry_name.value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cnt_name}&appid=84c5ba1cec0b52e20acd918a736febc5&units=metric`).
    then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
            throw alert("Enter valid location")
        }
        }).then(data=>displayDetails(data)).catch(err=>console.log(err.message))
}
function displayDetails(data){
    console.log(data);
    let html_data=``;
    let temperature= data.main.temp;
    temperature+=String.fromCharCode(176);
    let temp_min= data.main.temp_min+String.fromCharCode(176);
    let temp_max=data.main.temp_max+String.fromCharCode(176);
    let location= data.name;
    let weather_type=data.weather[0 ].description;
    let wind_speed= data.wind.speed+"km/h";
    let date=new Date();
    html_data=`<div class="card mb-3 text-dark border-dark" >
    <div class="row g-0 justify-content-center">
      <div class="col-md-4">
        <img src="./images/1540030.jpg" class="card-img img-responsive" alt="..." style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="card-img-overlay">
        <h1 class="card-title text-white large-font mr-3">${temperature}</h1>
        <h5></h5>
        
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title text-dark">${location}</h4>
          <h6 class="card-title">${date}</h6>
          <hr>
          <p class="card-text">Weather:${weather_type}</p>
          <hr>
          <p class="card-text ">Minimum Temperature:${temp_min}</p>
          <p class="card-text ">Maximum Temperature:${temp_max}</p>                  
          <hr>
          <p class="card-text ">Wind Speed:${wind_speed}</p><br>
        </div>
      </div>
    </div>
  </div>`;
   
            document.querySelector("#result").innerHTML=html_data;
   

}
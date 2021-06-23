const submitbtn = document.getElementById('submit');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp_deg = document.getElementById('temp_deg');
const temp_status = document.getElementById('temp_status');
const hidedata = document.querySelector('.middle_content')

const getinfo = async(event) => {
    event.preventDefault();
    let cityvalue = cityname.value;
    if(cityvalue == ""){
        city_name.innerText = `Please enter the city name`;
        hidedata.classList.add('hide_data');
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=7e94dc9b529e0a4bd02151850e545f9a`;
        const response = await fetch(url);
        const data = await response.json();
        const arrdata = [data];
        //console.log(data);
        city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
        const temp_cel = arrdata[0].main.temp

        temp_deg.innerText = (temp_cel-273.5).toFixed(2);
        //temp_status.innerText = arrdata[0].wheather[0][main];
        //console.log(arrdata[0].weather[0].main)
        //img.src = `http://openweathermap.org/img/wn/${arrdata.wheather.icon}@2x.png`;
        const tempstatus = arrdata[0].weather[0].main;
       // console.log(tempstatus);
    
        if(tempstatus == "Clouds"){
            temp_status.innerHTML = "<i class='fas fa-cloud style='color: #ECF0F1'></i>";
        }else if(tempstatus == "Rain"){
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #ECF0F1'></i>";
        }else if(tempstatus == "Drizzle"){
            temp_status.innerHTML = "<i class='fas fa-cloud-showers-heavy' style='color: #ECF0F1'></i>";
        }else if(tempstatus == "Snow"){
            temp_status.innerHTML = "<i class='far fa-snowflake' style='color: #ECF0F1'></i>";
        }else{
            temp_status.innerHTML = "<i class='far fa-sun' style='color: #ECF0F1'></i>";
        }
        hidedata.classList.remove('hide_data');
        }catch(err){
            city_name.innerText = `Please enter the city name properly`;
            //console.log(err);
            //city_name.innerText = err.message;
            hidedata.classList.add('hide_data');
        }

    }
    
}
submitbtn.addEventListener('click', getinfo)
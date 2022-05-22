import React,{useState}from 'react';
import axios from 'axios'
import ShowTemp from './ShowTemp';

function App() {
  const[city,setCity]=useState("")
  const [data,setData]=useState({
    description:"",
    temp:0,
    temp_max:0,
    temp_min:0,
    humidity:0,
    sunrise:0,
    sunset:0,
    country:"",
  })
  const handleClick=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=233ca0e35b2231c47582497795479adf`)
    .then(res =>{
      setData({
    description:res.data.weather[0].description
    ,
    temp:res.data.main.temp,
    temp_max:res.data.main.temp_max,
    temp_min:res.data.main.temp_min,
    humidity:res.data.main.humidity,
    sunrise:res.data.sys.sunrise,
    sunset:res.data.sys.sunset,
    country:res.data.sys.country,
      })
    })
    
  }
  return (
    <>
        <div className="container text-center my-2">
          <h1>Weather App</h1>
          <input type="text" className='form-control' value={city}
           onChange={(e)=>{
            setCity(e.target.value);
          }}/>
          <button className='btn btn-primary my-3' type='submit' 
          onClick={handleClick}>Get Temp</button>
        </div>
        <ShowTemp text={data}/>
    </>
  )
}

export default App;

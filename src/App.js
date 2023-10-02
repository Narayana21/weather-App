import React,{useState} from 'react'
import background from "./cloud.jpg"


const App = () => {
  const myStle={
        backgroundImage:`url(${background})`,
        marginTop:'-70px',
        fontSize:'50px',
        width:'100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
  }

  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()).then(
        data => {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
        }
      ).catch(error => console.log(error))
      setCity("");
  }

  return (
    <div style={myStle}>
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Weather App</h1>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="city" onChange={changeHandler} value={city}/> <br />
              <input type="submit" value="Get Temperature" />
              <h3>{result}</h3> 
            </form><br /> <br />
            <div>
               {/* <h3>{result}</h3>  */}
            </div>
          </div>
        </div>
      </center>
    </div>
    </div>
  )
}

export default App
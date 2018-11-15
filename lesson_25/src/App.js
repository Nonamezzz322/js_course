import React, { Component } from 'react';
// import Text from './Text.js';
import Input from './Input.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data:[]
    }
  }
  // в процессе
  render() { 
    return (
     <div>
      <Input weather={this.getMyWeather}/>

      {/* <Text city ="Poltava" temp = "-1 C" pressure = "1027.14" windSpeed = "5.46"/> */}
     </div>
    );
  }

  getMyWeather(event){
    event.preventDefault();
    const city = event.target.elements.city.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c912d7dc513a632a861c7ad683a49f7`)
    .then((res) =>res.json())
    .then((res) =>console.log(res))
  }
  
  setWeather(data){
    this.body = document.getElementsByTagName('body')[0];
    let cityName = 'data.name';
    this.city = document.createElement('span');
    this.city.id = 'city_name';
    this.body.append(this.city);
    this.cityDisplay = document.getElementById('city_name');
		this.cityDisplay.innerText = `${cityName}`;

  }
}



export default App;

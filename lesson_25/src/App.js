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

  getMyWeather = async(event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    this.d = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c912d7dc513a632a861c7ad683a49f7`)
    let data = await this.d.json();
    console.log(data)
  }
}



export default App;

import React, { Component } from 'react';

class Text extends Component {
  render() {
    return (
     <div>
       <h2>Погода в городе: {this.props.city} </h2>
       <div>Температура: {this.props.temp}</div>
       <div>Давление: {this.props.pressure}</div>
       <div>Скорость ветра: {this.props.windSpeed}</div>
     </div>
    );
  }
}
export default Text;
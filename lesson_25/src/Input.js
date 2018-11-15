import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
     <form onSubmit = {this.props.weather}>
         <input type="text" name="city" placeholder="Введите нужный город"/>
         <button>Get Weather</button>
     </form>
    );
  }
}

export default Input;